
// (C) Copyright IBM Deutschland GmbH 2020.  All rights reserved.

/***********************************************************************************************
import
***********************************************************************************************/

import config from '../../config/configProvider'
import localStorage from '../../services/localStorage/localStorage'

/***********************************************************************************************
initial state
***********************************************************************************************/

const initialState = {
	loading: false,
	error401: false,
	firstTime: true,
	categories: null,
	currentPageIndex: 1,
	showDatePicker: false,
	categoriesLoaded: false,
	questionnaireItemMap: null,
	currentCategoryIndex: null,
	showQuestionnaireModal: false,
	questionnaireResponseError: null,
}

/***********************************************************************************************
valuess handlers
***********************************************************************************************/

const valuesHandlers = {
	
	/**
	 * diplays the datepicker component
	 * @param  {any} state redux state
	 */
	['SHOW_DATEPICKER']: state => {
		return {
			...state,
			showDatePicker: true
		}
	},
	
	/**
	 * hides the datepicker component
	 * @param  {any} state
	 */
	['HIDE_DATEPICKER']: state => {
		return {
			...state,
			showDatePicker: false
		}
	},

	/**
	 * shows the modal that renders all the questionnaire-items
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['SHOW_QUESTIONNARE_MODAL']: (state, values) => {
		return {
			...state,
			showQuestionnaireModal: true,
			currentCategoryIndex: values.values.currentCategoryIndex,
			currentPageIndex: values.values.currentPageIndex,
			showDatePicker: false
		}
	},

	/**
	 * hides the quesrtionnaire modal
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['HIDE_QUESTIONNARE_MODAL']: state => {
		return {
			...state,
			showQuestionnaireModal: false,
			showDatePicker: false
		}
	},

	/**
	 * updates the page number of the currently opened category to display
	 * a different page
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['SWITCH_CONTENT']: (state, values) => {
		// if the user navigated forwards
		if (values.forward) {
			return {
				...state,
				showDatePicker: false,
				currentPageIndex:
					state.categories[state.currentCategoryIndex].item.length ===
					state.currentPageIndex
						? state.currentPageIndex
						: state.currentPageIndex + 1
			}
		}
		// if the user navigated forwards
		else {
			return {
				...state,
				showDatePicker: false,
				currentPageIndex:
					state.currentPageIndex === 1
						? state.currentPageIndex
						: state.currentPageIndex - 1
			}
		}
	},

	/**
	 * sets the aswer of a single item
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['SET_ANSWER']: (state, values) => {

		// generates local copy of questionnaireItemMap
		let questionnaireItemMap = Object.assign({}, state.questionnaireItemMap)

		// persists the new questionnaireItemMap in AsynStorage
		setTimeout(() => {
			localStorage.persistQuestionnaireItemMap(questionnaireItemMap, state.user.subjectId)
		}, 0)

		// if multiple answers are allowed
		if (values.answer.openAnswer) {
			// updates the answer-attribut in questionnaireItemMap to an array so that
			// it can hold multiple answers
			if (!Array.isArray(questionnaireItemMap[values.answer.linkId].answer)) {
				questionnaireItemMap[values.answer.linkId].answer = []
			}
			// removes the answer is already present
			if (questionnaireItemMap[values.answer.linkId].answer.includes(values.answer.answer)) {
				questionnaireItemMap[values.answer.linkId].answer.splice(
					questionnaireItemMap[values.answer.linkId].answer.indexOf(values.answer.answer),
					1
				)
			} 
			// adds the answer if not already present
			else {
				questionnaireItemMap[values.answer.linkId].answer.push(values.answer.answer)
			}
		} 
		// if its just a single-value answer
		else {
			// jsut updates the answer value
			questionnaireItemMap[values.answer.linkId].answer = values.answer.answer
		}

		// updates the questionnaireItemMap to reflect the state of the questionnaire
		questionnaireItemMap[values.answer.linkId].done = true
		questionnaireItemMap[values.answer.linkId.split('.')[0]].started = true
		questionnaireItemMap.started = true

		return {
			...state,
			showDatePicker: false,
			questionnaireItemMap
		}
	},

	/**
	 * persists the questionnaireItemMap ins state and AsyncStorage
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['SET_QUESTIONNAIRE_ITEM_MAP']: (state, values) => {
		setTimeout(() => {
			localStorage.persistQuestionnaireItemMap(values.questionnaireItemMap, state.user.subjectId)
		}, 0)

		return {
			...state,
			questionnaireItemMap: values.questionnaireItemMap
		}
	},

	/**
	 * generates the questionnaireItemMap and the categories after receiving the questionnaire.
	 * also persists them in state and AsyncStorage
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['GET_QUESTIONNAIRE_SUCCESS']: (state, values) => {
		// generates the questionnaireItemMap
		let questionnaireItemMap = generateQuestionnaireItemMap(values.questionnaire, state.user.subjectId)

		// generates the categories
		let categories = []
		values.questionnaire.item.forEach(item => categories.push(item))

		// persists them in AsncStorage
		setTimeout(() => {
			localStorage.persistCategories(categories, state.user.subjectId)
			localStorage.persistQuestionnaireItemMap(questionnaireItemMap, state.user.subjectId)	
		}, 0)
		
		return {
			...state,
			questionnaireItemMap: questionnaireItemMap,
			categories: categories,
			categoriesLoaded: true,
			questionnaireError: null,
			loading: false
		}
	},

	/**
	 * handles success after a local questionnaire was loaded
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['LOAD_LOCAL_QUESTIONNAIRE_SUCCESS']: (state, values) => {
		return {
			...state,
			error401: false,
			questionnaireItemMap: values.value.map,
			categories: values.value.list,
			categoriesLoaded: true,
			loading: false,
			questionnaireError: null
		}
	},

	/**
	 * displays the loading screen, while procuring the questionnaire
	 * @param  {any} state redux state
	 */
	['GET_QUESTIONNAIRE_START']: state => {
		return {
			...state,
			loading: true,
		}
	},

	/**
	 * handles a failed attempt to download a questionaire
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['GET_QUESTIONNAIRE_FAIL']: (state, values) => {
		return {
			...state,
			questionnaireError: values.value,
			error401: (values.value.response && values.value.response.status && values.value.response.status === 401),
			loading: false
		}
	},

	/**
	 * displays the loading screen, while exporting the questionnaire
	 * @param  {any} state redux state
	 */
	['SEND_QUESTIONNAIRE_RESPONSE_START']: state => {
		return {
			...state,
			loading: true,
			questionnaireResponseError: null
		}
	},

	/**
	 * handles the success after exporting the questionnaire to the server
	 * @param  {any} state redux state
	 */
	['SEND_QUESTIONNAIRE_RESPONSE_SUCCESS']: state => {
		return {
			...state,
			error401: false,
			questionnaireResponseError: null,
			loading: false,
			questionnaireItemMap: null,
			categories: null,
			categoriesLoaded: false,
			questionnaireError: null
		}
	},

	/**
	 * handles the failure after unsuccessfully trying to export the questionnaire to the server
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['SEND_QUESTIONNAIRE_RESPONSE_FAIL']: (state, values) => {
		return {
			...state,
			loading: false,
			questionnaireResponseError: values.value,
			error401: (values.value.response && values.value.response.status && values.value.response.status === 401)
		}
	},

	/**
	 * displays a loading screen while the user update is running
	 * @param  {any} state redux state
	 */
	['UPDATE_USER_START']: state => {
		return {
			...state,
			loading: true
		}
	},

	/**
	 * state-update after successful user update
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['UPDATE_USER_SUCCESS']: (state, values) => {
		return {
			...state,
			error401: false,
			loading: false,
			user: values.user,
			firstTime: values.user.firstTime,
			questionnaireError: null,
			noNewQuestionnaireAvailableYet: new Date() < new Date(values.user.start_date),
		}
	},

	/**
	 * error handling after user-update-fail
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['UPDATE_USER_FAIL']: (state, values) => {
		
		return {
			...state,
			loading: false,
			questionnaireError: null,
			error401: (values.value.response && values.value.response.status && values.value.response.status === 401)
		}
	},

	/**
	 * showing a loading screen while trying to send a report
	 * @param  {any} state redux state
	 */
	['SEND_REPORT_START']: state => {
		return {
			...state,
			loading: true,
		}
	},

	/**
	 * hides the loading screen after successfully sending out a report
	 * @param  {any} values values to be set
	 */
	['SEND_REPORT_SUCCESS']: state => {
		return {
			...state,
			loading: false,
		}
	},

	/**
	 * hides the loading screen after unsuccessfully sending out a report
	 * @param  {any} state redux state
	 * @param  {any} values values to be set
	 */
	['SEND_REPORT_FAIL']: state => {
		return {
			...state,
			loading: false,
		}
	},
}

/***********************************************************************************************
support
***********************************************************************************************/

/**
 * creates an entry in the questionnaireItemMap and then iterates through
 * its sub items to do the same
 * @param  {any} item questionnaireItem
 */
const traverseItem = (item, questionnaireItemMap) => {
	// generates the item
	questionnaireItemMap[item.linkId] = {
		linkId: item.linkId,
		done: false,
		answer: null,
		text: item.text,
		type: item.type || 'ignore',
		required: item.required || false,
		enableWhen: item.enableWhen,
		definition: item.definition,
	}
	// sets the started value to false if the item is category
	if(item.linkId.length === 1) {
		questionnaireItemMap[item.linkId].started = false
	}
	// traverses the subitems
	if (item.item) {
		item.item.forEach(subItem => traverseItem(subItem, questionnaireItemMap))
	}
}

/**
 * generates the questionnaireItemMap
 * @param  {any} questionnaire a fhir questionnaire
 * @param  {any} subjectId subjectId of the user
 */
const generateQuestionnaireItemMap = (questionnaire, subjectId) => {
	let questionnaireItemMap = {}

	// triggers the item-generation
	if (questionnaire.item) {
		questionnaire.item.forEach(subItem => traverseItem(subItem, questionnaireItemMap))
	}
	
	// used to determin the completion state of the questionnaire
	questionnaireItemMap.done = false
	// used to determin if the questionnaire was even opened
	questionnaireItemMap.started = false
	// used to identify the quesitonnaire
	questionnaireItemMap.id = questionnaire.title

	// persists the last known questionnaireId in the AsyncStorage
	setTimeout(() => {
		localStorage.persistLastQuestionnaireId(questionnaire.title, subjectId)
	}, 0)

	return questionnaireItemMap
}

/***********************************************************************************************
export
***********************************************************************************************/

export default (state = initialState, values) => {
  return valuesHandlers[values.type]
    ? valuesHandlers[values.type](state, values)
    : state
}
