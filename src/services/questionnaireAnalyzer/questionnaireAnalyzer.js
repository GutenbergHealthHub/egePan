
// (C) Copyright IBM Deutschland GmbH 2020.  All rights reserved.

// the code contained in this file is meant to gather information about the
// current state of the questionnaire as well as to create the responeJson that is
// sent to the backend by the user.

// there are a few terms that are used throughout the documentation:

// categories: 
// an array holding all first level questionnaire-items (QuestionnaireItem) with linkIds 
// that do no contain separators (like "1" or "6" or "15")

// page: 
// a page is composed of all sub-items of a category that have 
// the identical value as the second position of their linkId. for example:
// all linkIds starting with "1.2" (such as "1.2.1" and "1.2.1.1" and so on) will
// be considered a page

/***********************************************************************************************
imports
***********************************************************************************************/

import '../../typedef'
import store from '../../store'
import config from '../../config/configProvider'

/***********************************************************************************************
service methods
***********************************************************************************************/

// support functions
/*-----------------------------------------------------------------------------------*/

/**
 * should a questionnaire item contain the "extension" property, its content
 * is tested as an regular expression. it is used to determine if an item
 * was correctly answered.
 * @param {string} linkId linkId of a questionnaire-item
 */
const checkExtension = linkId => {

	let props = store.getState().CheckIn

	/**
	* the item that owns the extension
	* @type {QuestionnaireItem}
	*/
	let item = props.questionnaireItemMap[linkId]

	// if there is an extension and check it
	if(item.extension && item.extension.length) {
		
		//runs through the extensions and tests it
		for(let i = 0; i < item.extension.length; i++) {

			if(item.extension[i].valueString === "/\S+@\S+\.\S+/") {
				return /\S+@\S+\.\S+/.test(props.questionnaireItemMap[item.linkId].answer)
			}
			else if(!RegExp(item.extension[i].valueString).test(props.questionnaireItemMap[item.linkId].answer)) {
				return false
			}
		}
	}
	// just returns true if there is no extension
	return true
}

/**
 * gets an entry of an enableWhen-array (a condition) and returns 
 * the correct attribute-name for the conditional answer
 * @param {Condition} condition enableWhen condition
 */
const getEnableWhenAnswerType = condition => {
	return condition.answerString ? 'answerString' : 
		condition.answerDate ? 'answerDate' :
			condition.answerTime ? 'answerTime' :
				condition.answerCoding ? 'answerCoding' : 
					condition.answerInteger ? 'answerInteger' :
						condition.answerDecimal ? 'answerDecimal' :
							condition.answerBoolean ? 'answerBoolean' :
								condition.answerDateTime ? 'answerDateTime' :
									'answerQuantity'
}

/**
 * checks if the questions mentioned in the enableWhen-conditions were even answered.
 * if not, the condition is automatically not set. this is due to the fact that right now
 * only the-comparison-operator ("=") is available for conditional rendering
 * @param  {QuestionnaireItem} item questionnaire item
 */
const checkIfAnswersToConditionsAreAvailable = item => {

	/** return value of the function, tells if answer conditions are available */
	let available

	let props = store.getState().CheckIn
	
	// if enableBehavior is "all" (or not set)
	if(!item.enableBehavior || (item.enableBehavior && item.enableBehavior === 'all')) {

		// the default result
		available = true

		// iterates over all conditions
		item.enableWhen.forEach(condition => {
			// sets the return value to FALSE should a single condition not be met
			if (!props.questionnaireItemMap[condition.question].answer) available = false
		})
	
		return available
	}
	// if enableBehavior is "any"
	else {
		
		// the default result
		available = false
		
		// iterates over all conditions
		item.enableWhen.forEach(condition => {
			// sets the return value to TRUE if a single condition is met
			if (props.questionnaireItemMap[condition.question].answer) available = true
		})
	
		return available
	}
}

/**
 * calculates the relative progress of navigating through a category
 * @param  {object} [props] props-object of the calling component
 */
const calculatePageProgress = (props) => {

	let pageIndex = 0
	let pageCountRead = 0
	let pageCountRemaining = 0

	props.categories[props.currentCategoryIndex].item.forEach(item => {

		if(checkDependenciesOfSingleItem(item)) {
			
			pageCountRemaining++

			if(pageIndex < props.currentPageIndex) pageCountRead++
		}
		pageIndex++
	})

	return pageCountRead / pageCountRemaining
}

// exported functions
/*-----------------------------------------------------------------------------------*/

/**
 * just forms a date into a custom string that is required by the questionnaireResponse
 * @param  {string} date date to transform
 * @param  {boolean} [DMY] if true, outputs dd.mm.yyyy - if not: yyyy-mm-d 
 */
const getFormatedDate = (date, DMY) => {

	if(!date) return null
	
	let d = new Date(date)
	let month = '' + (d.getMonth() + 1)
	let day = '' + d.getDate()
	let year = d.getFullYear()

	if (month.length < 2)  month = '0' + month
	if (day.length < 2)  day = '0' + day

	return DMY ? [day, month, year].join('.') : [year, month, day].join('-')
}

/**
 * this function is used to produce the answer of an item in a corrected
 * way. for example: the format used for dates in the questionnaire is not the same as
 * the one used in this application. to be able to compare those two this function is used
 * to parse the formats.
 * @param  {ItemMapEntry} item item from the the questionnaireItemMap-object
 */
const getCorrectlyFormatedAnswer = item => {
	switch (item.type) {
		case 'date':
			// formats the Date into yyyy-mm-dd
			return getFormatedDate(String(item.answer))
		case 'integer':
			// needed for string comparisons
			return parseInt(String(item.answer))
		case 'decimal':
			// needed for string comparisons
			return parseFloat(String(item.answer))
		default:
			return item.answer
	}
}

/**
 * tells you if an item is completely answered or not.
 * it takes the "items"-property of a category (or none at all if the whole questionnaire
 * needs to be checked) and iterates over all active (as in they met their enableWhen-conditions)
 * sub-items to check if they are valid. 
 * @param  {QuestionnaireItem[]} [items] the items property of a questionnaire-item (from the categories-array)
 * @param  {object} [props] props-object of the calling component (needed to call an action)
 */
const checkCompletionStateOfMultipleItems = (items, props) => {

	/**
	* local copy of the categories-array from the checkin-state
	* @type {QuestionnaireItem[]}
	*/
	let categories = items || props.categories

	/**
	* local copy of the questionnaireItemMap from the checkin-state
	* @type {QuestionnaireItemMap}
	*/
	let questionnaireItemMap = Object.assign({}, { ...props.questionnaireItemMap, done: true })
	
	/**
	 * traverses all sub-items of an item (located in the "items"-attribute of said item)
	 * and then checks for their validity. executes the "checkItem" function for each 
	 * valid item.
	 * @param  {QuestionnaireItem[]} elements the items-array of a questionnaire-item
	 */
	const traverseItems = elements => {
		
		/**
		* return value of the function, shows the validity of a set ob subItems
		*/
		let validityOfTraversedItems = true

		elements.forEach(function( item ) {
			// if an enableWhen property is present...
			if ( item.enableWhen ) {
				// ... and no enableBehavior is not set (or it is set to "all")
				if( !item.enableBehavior || item.enableWhen.length === 0 || ( item.enableBehavior && item.enableBehavior === 'all' )) {
					// iterates over all conditions
					item.enableWhen.forEach(condition => {
						if (
							// if the condition provides an array of answers and the needed answer is among then OR there is only one answer and it matches
							((Array.isArray(questionnaireItemMap[condition.question].answer) && questionnaireItemMap[condition.question].answer.includes(condition[getEnableWhenAnswerType(condition)])) 
							||
							getCorrectlyFormatedAnswer(questionnaireItemMap[condition.question]) === condition[getEnableWhenAnswerType(condition)]) 
							// and the item is not valid
							&&
							!checkItem(item)
						) {
							// if not all conditions are met, the item is invalid
							validityOfTraversedItems = false
						}
					})
				}
				else {
					
					/**
					* the validity for this item (by default: false)
					*/
					let itemValidityAny = false

					/**
					* will be set to TRUE if a single condition is met
					*/
					let aChangeOccured = false

					// itereates over all conditions
					item.enableWhen.forEach( condition => {
						if (
							// if the condition provides an array of answers and the current answer is among then
							(Array.isArray(questionnaireItemMap[condition.question].answer) && questionnaireItemMap[condition.question].answer.includes(condition[getEnableWhenAnswerType(condition)])) 
							|| 
							// OR: there is only one answer and it matches
							getCorrectlyFormatedAnswer(questionnaireItemMap[condition.question]) === condition[getEnableWhenAnswerType(condition)]
						) {
							// if the condition is met
							aChangeOccured = true
							// if the content checks out, set itemValidityAny to true
							if( checkItem(item) ) itemValidityAny = true
						}
					})	

					// if no item met the conditions... then the question will never be rendered and is therefor not invalid, meaning TRUE
					if(!aChangeOccured) itemValidityAny = true
					
					// if nothing checks out
					if(!itemValidityAny) validityOfTraversedItems = false
				}
			}
			// if no enableWhen property (meaning no condition must be met)
			else {
				// set the validity to false if the item does not checks out
				if( !checkItem( item ) ) validityOfTraversedItems = false
			}
		})

		return validityOfTraversedItems
	}

	/**
	 * checks the validity of a single item and returns it. should the item contain subitems, then those will
	 * also be checked by executing "traverseItems()" on those subitems.
	 * @param  {QuestionnaireItem} item questionnaire-item
	 */
	const checkItem = item => {
		
		/** return value of the function, speaks about the validity of an item */
		let returnValue = false

		// if this item needs to be ignored 
		if (item.type === 'ignore' || !item.required  || item.type === 'display' || !checkDependenciesOfSingleItem(item)) {
			returnValue = true
		} 
		// if the item does not met its own regEx
		else if(!checkExtension(item.linkId)) {
			returnValue = false
		}
		else {
			// if its a boolean
			if (item.type === 'boolean') {
				// boolean are by default always valid (as FALSE is a valid answer).
				// but if it has subItems they must be traversed, and the result of that
				// is the result of the boolean
				returnValue = item.item ? traverseItems(item.item) : true
			} 
			// dates, numbers, strings...
			else if (
				item.type === 'date' ||
				item.type === 'string' ||
				item.type === 'integer' ||
				item.type === 'decimal' ||
				item.type === 'number'
			) {
				// ...should not be empty -> but 0 is valid value
				returnValue = (questionnaireItemMap[item.linkId].answer && questionnaireItemMap[item.linkId].answer !== '') || (questionnaireItemMap[item.linkId].answer === 0)
			} 
			// if there is no subItem..
			else if (!item.item) {
				// ...we just look up if the answer is still in its initial state (meaning null)
				returnValue = questionnaireItemMap[item.linkId].answer != null
			} 
			// and should there be at least the item-property...
			else {
				// ... traverse it and see if they all check out
				returnValue = traverseItems(item.item)
			}

			// should the item be of type "choice"...
			if (returnValue && item.type === 'choice') {
				// ... make sure its not NULL
				returnValue = questionnaireItemMap[item.linkId].answer != null
			}

			// should the item be of type "open-choice"...
			if (returnValue && item.type === 'open-choice') {
				// ... make sure its not NULL and not empty
				returnValue = !(getCorrectlyFormatedAnswer(questionnaireItemMap[item.linkId]) === null || !questionnaireItemMap[item.linkId].answer.length)
			}
		}
		
		// sets the done property of the item
		questionnaireItemMap[item.linkId].done = returnValue

		return returnValue
	}
	
	// if a set of items was given
	if (items) {
		
		/** return value of the function */
		let returnValue = true			
		
		// sets the returnValue to false if a single item does not check out
		items.forEach((item) => {
			if (!checkItem(item)) returnValue = false
		})

		return returnValue
	}
	// if there is no set, go over all categories
	else {

		// sets the done-property for the whole questionnaire
		categories.forEach(category => {
			if (!checkItem(category)) {
				questionnaireItemMap.done = false
			}
		})

		// persists the new questionnaireItemMap
		props.actions.setQuestionnaireItemMap(questionnaireItemMap)

		return questionnaireItemMap.done
	}
}

/**
 * checks the depencies of a single item (presented through its "enableWhen" property).
 * this basically tells us if the items needs to be rendered or if its answer should have
 * an impact on the completion state of the whole questionnaire
 * @param  {QuestionnaireItem} [item] questionnaire item
 */
const checkDependenciesOfSingleItem = item => {

	/** return value of the function, true if all dependencies are met */
	let returnValue = false

	let props = store.getState().CheckIn

	// if the item has a set of conditions
	if (item && item.enableWhen) {

		// checks if the items mentioned in the condtions are even answered...
		if (!checkIfAnswersToConditionsAreAvailable (item )) {
			// ...if not, the returnValue is set to FALSE - game over
			returnValue = false
		}
		else {
			// if no enableBehavior is set (or it is set to "all")
			if(!item.enableBehavior || item.enableWhen.length === 0 || (item.enableBehavior && item.enableBehavior === 'all')) {
				
				// sets the default to TRUE, as one not-matching condtion is enough to turn the reslat FALSE
				returnValue = true
				
				// iterates over all conditions
				item.enableWhen.forEach(condition => {
					// triggers if NO MATCH is found 
					if (!(
							// if the condition provides an array of answers and the current answer is among then
							(Array.isArray(props.questionnaireItemMap[condition.question].answer) && props.questionnaireItemMap[condition.question].answer.includes( condition[getEnableWhenAnswerType(condition)])) 
							||
							// OR: there is only one answer and it matches
							(getCorrectlyFormatedAnswer(props.questionnaireItemMap[condition.question]) === condition[getEnableWhenAnswerType(condition)])
						)
					){
						// in case a not-matching condition is found
						returnValue = false
					}
				})
			}
			// if enableBehavior is set to 'any'
			else {
				// iterates over all conditions
				item.enableWhen.forEach(condition => {
					if (
						// if the condition provides an array of answers and the current answer is among then
						(Array.isArray(props.questionnaireItemMap[condition.question].answer) && props.questionnaireItemMap[condition.question].answer.includes( condition[getEnableWhenAnswerType(condition)]))
						||
						// OR: there is only one answer and it matches
						(getCorrectlyFormatedAnswer(props.questionnaireItemMap[condition.question]) === condition[getEnableWhenAnswerType(condition)])
					) {
						// in case a matching condition is found
						returnValue = true
					}
				})	
			}
		}
	}
	// if there is no condition (but at least something)...
	else if (item) {
		// ... then it technically meets its conditions
		returnValue = true
	}
	// just in case
	else {
		// no
		returnValue = false
	}

	return returnValue
}

/**
 * this creates the document that, as soon as encrypted, will be sent to the backend
 * @returns {ExportData}
 */
const createResponseJSON = () => {

	/** persists the information if a trigger was... well, triggered
	 * @type {Object.<string, boolean>}
	*/
	let triggerMap = {}

	/** a local copy of the checkIn-state */
	let props = store.getState().CheckIn

	/**
	 * traverses a set of items and its children (and so on) and creates the structure
	 * that will hold the answers of the questionnaire-response
	 * @param  {QuestionnaireItem[]} items the questionnaire-items
	 * @param  {string} [necessaryAnswer] should the item be conditional to a specific answer of its child-items (for open-choice elements)
	 * @returns {QuestionnaireItem[]}
	 */
	const createItems = (items, necessaryAnswer) => {
		
		let newItems = []

		function createAnswerObject(answer) {
			if (typeof answer === "string") {
				return {
					valueString: answer,
				};
			} else if (typeof answer === "number") {
				return {
					valueInteger: answer
				};
			} else if(typeof answer === "object"){
				return {
					valueCoding: answer
				}
			} else { //null or undefined
				return {
					valueString: answer
				}
			}

		}

		if (items)
			items.forEach(function(item) {
				
				/**
				* will hold the created child-items, if there are any
				* @type {QuestionnaireItem[]}
				*/
				let childItems = []

				/**
				* wil hold the correct anwer
				* @type {ResponseAnswer}
				*/
				let answerObject = {}

				/**
				* holds the correct itemdetails
				* @type {ItemMapEntry}
				*/
				let itemDetails = props.questionnaireItemMap[item.linkId]

				// if the conditions of the item are met or if one of the ChildItems provide the necessary answer
				if (
					checkDependenciesOfSingleItem(item) 
					||
					(necessaryAnswer && itemDetails.enableWhen && itemDetails.enableWhen[0][getEnableWhenAnswerType(itemDetails.enableWhen[0])] === necessaryAnswer)
				){
					/**
					* creates a new item
					* @type {ResponseItem}
					*/
					let newItem = {
						linkId: item.linkId,
						text: item.text,
						// if there is a uui it will be coded into the definition-attribute
						...(itemDetails.definition && {definition: itemDetails.definition}),
						answer: []
					}

					// creates the item property of the new item based on its type
					switch (item.type) {
						case 'group':
							// easy, nothing to check here
							newItem.item = createItems(item.item)
							break

						case 'boolean':
							answerObject = {
								// either the set answer, or just false
								valueBoolean: Boolean(itemDetails.answer) || false,
							}
							// traverse the child-items, if there are any, and add them to the answer
							childItems = item.item ? createItems(item.item) : []
							if (childItems.length !== 0) answerObject.item = childItems
							newItem.answer = [answerObject]
							break

						case 'choice':
							answerObject = createAnswerObject(itemDetails.answer);
							// traverse the child-items, if there are any and add them to the answer
							childItems = item.item ? createItems(item.item) : []
							if (childItems.length !== 0) answerObject.item = childItems
							newItem.answer = [answerObject]
							break

						case 'open-choice':
							newItem.answer = []
							// if there are any andwers, they will be located in an array - so we have to traverse it
							if (Array.isArray(itemDetails.answer)) {
								// see?
								itemDetails.answer.forEach(function (answer) {
									// so now we create an object for each set answer
									answerObject = createAnswerObject(answer)
									// and check if there are any child-items.
									// if yes: traverse the child-items and add them to the answer
									childItems = item.item ? createItems(item.item, answer): []
									if (childItems.length !== 0) answerObject.item = childItems
									newItem.answer.push(answerObject)
								})
							}
							break

						case 'string':
							newItem.answer = [
								{
									// just the anser
									valueString: String(itemDetails.answer)
								}
							]
							break

						case 'integer':
							newItem.answer = [
								{
									valueInteger: parseInt(String(itemDetails.answer)),
								},
							]
							break

						case 'decimal':
							newItem.answer = [
								{
									// the anser, as a float
									valueDecimal: parseFloat(String(itemDetails.answer)),
								},
							]
							break

						case 'date':
							newItem.answer = [
								{
									valueDate: getFormatedDate(String(itemDetails.answer)),
								},
							]
							break
					}

					// if there is an definition and a set answer
					if(itemDetails.definition && itemDetails.answer) {
						// iterates through the rules-set...
						config.appConfig.defaultRulesConfig.forEach(trigger => {
							// and creates a property in the trigger-object
							if(!triggerMap.hasOwnProperty(trigger.type)) triggerMap[trigger.type] = false
							// determines if the rule was met...
							for (let [key, value] of Object.entries(trigger.rules)) {
								// ... by iterating over all potential answers
								trigger.rules[key].forEach(potentialAnswer => {
									if(itemDetails.answer === potentialAnswer) {
										triggerMap[trigger.type] = true
									}		
								})
							}
						})
					}

					newItems.push(newItem)
				}
			})
		return newItems
	}

	// creates the actual questionnaireResponse
	
	/**
	* the actual questionnaire response
	* @type {QuestionnaireResponse}
	*/
	let questionnaireResponse = {
		author: props.user.subjectId,
		item: createItems(props.categories),
		resourceType: 'QuestionnaireResponse',
		identifier: props.user.subjectId + '-' + Date.now(),
		status: props.questionnaireItemMap.done ? 'completed' : 'in-progress',
		authored: new Date().toLocaleString("de-DE", {timeZone: "Europe/Berlin"}),
		questionnaire: 'http://hl7.org/fhir/Questionnaire/FragebogenCOVID19_Kurzversion'
	}

	// console output
	if(config.appConfig.logPureResponse) {
		console.log('THE QUESTIONNAIRE-RESPONSE:', questionnaireResponse)
	}
	if(config.appConfig.logPureResponseJSON) {
		console.log('THE QUESTIONNAIRE-RESPONSE (JSON):', JSON.stringify(questionnaireResponse))
	}

    return {
		triggerMap,
		body: JSON.stringify(questionnaireResponse)
	}
}

/***********************************************************************************************
export
***********************************************************************************************/

export default { 
	getFormatedDate,
	createResponseJSON,
	checkDependenciesOfSingleItem,
	getCorrectlyFormatedAnswer,
	checkCompletionStateOfMultipleItems,
	calculatePageProgress
}
