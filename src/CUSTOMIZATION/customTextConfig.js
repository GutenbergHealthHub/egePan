
// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

// the object provided by this file will be merged with the return-object of the module "textConfig.js".
// should you want to update a value from that file (for example the primary color of the theme),
// than copy the content of 'src/config/textConfig.js' below the marked comment at the end of this file.
// this ensures that you do not need to touch the rest of the source code and because of that, you won't loose 
// the ability to merge updated from the repository.

//   /$$                                           /$$                                     /$$          
//  |__/                                          | $$                                    | $$          
//   /$$ /$$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$  /$$$$$$          /$$$$$$$  /$$$$$$   /$$$$$$$  /$$$$$$ 
//  | $$| $$__  $$ /$$_____/ /$$__  $$ /$$__  $$|_  $$_/         /$$_____/ /$$__  $$ /$$__  $$ /$$__  $$
//  | $$| $$  \ $$|  $$$$$$ | $$$$$$$$| $$  \__/  | $$          | $$      | $$  \ $$| $$  | $$| $$$$$$$$
//  | $$| $$  | $$ \____  $$| $$_____/| $$        | $$ /$$      | $$      | $$  | $$| $$  | $$| $$_____/
//  | $$| $$  | $$ /$$$$$$$/|  $$$$$$$| $$        |  $$$$/      |  $$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$
//  |__/|__/  |__/|_______/  \_______/|__/         \___/         \_______/ \______/  \_______/ \_______/
//                                                                                                                                                                                                                                                                                               
//   /$$                 /$$                                                                            
//  | $$                | $$                                                                            
//  | $$$$$$$   /$$$$$$ | $$  /$$$$$$  /$$  /$$  /$$                                                    
//  | $$__  $$ /$$__  $$| $$ /$$__  $$| $$ | $$ | $$                                                    
//  | $$  \ $$| $$$$$$$$| $$| $$  \ $$| $$ | $$ | $$                                                    
//  | $$  | $$| $$_____/| $$| $$  | $$| $$ | $$ | $$                                                    
//  | $$$$$$$/|  $$$$$$$| $$|  $$$$$$/|  $$$$$/$$$$/                                                    
//  |_______/  \_______/|__/ \______/  \_____/\___/                                                     

/***********************************************************************************************
                                    ADD BELOW THIS COMMENT
                            PLEASE DO ONLY ADD VALUES BELOW THIS LINE
***********************************************************************************************/
export default {

	/** strings for accessibility features (i.e. VoiceOver) */
	"accessibility":{

		"types": {
			"button": "button",
			"header": "header",
		},

		"refresh": "refresh",
		"refreshHint": "Lädt den Fragebogen sowie dessen Status erneut. Die Seite wird neu geladen",

		"back": "zurück",
		"backHint": "Gehe zurück zur vorherigen Seite",

		"close": "schließen",
		"closeHint": "Schließt die aktuelle Seite oder Eingabebereich",

		"accept": "Annehmen",
		"cancel": "Abbrechen",
		"acceptHint": "Wechsle zum Standardbrowser, um die Seite zu öffnen",

		"menu": "Zusätzliche Informationen",
		"menuHint": "Öffnet eine neue Seite mit zusätzlichen Informationen und Links",

		"logoutHint": "Startet den Logout-Prozess und leitet zurück zur Login-Seite",
		"loginHint": "Startet den Login-Prozess",
		"loginManuallyHint": "Bitte geben Sie Ihre Probanden-ID ein, sofern sie bereits registriert sind",
		"submitHint": "Abschicken",

		"questionnaire": {
			"middleButtonFinished": "Frage wurde beantwortet. Weiter zur nächsten Frage",
			"middleButtonUnfinished": "Frage wurde noch nicht beantwortet. Trotzdem weiter zur nächsten Frage.",
			"middleButtonHint": "Geht zur nächsten Frage oder schließe den Eingabebereich, wenn dies die letzte Frage ist",

			"rightButtonHint": "Schließt den Eingabebereich",
			"leftButtonHint": "Geht zur vorherigen Frage",
			"alertButtonHint": "Schließt das Hinweisfenster",

			"questionnaireCellHint": "Öffnet eine neue Seite, um die Kategorien des Fragebogens anzuzeigen",
			"categoryCellHint": "Öffnet den Eingabebereich, um die Kategorie des Fragebogens zu beantworten",
			"category": "Diese Kategorie ",
			"questionnaire": "Dieser Fragebogen",
			"notStarted": "wurde noch nicht angefangen",
			"notFinished": "wurde angefangen, aber noch nicht abgeschlossen",
			"finished": "ist abgeschlossen",

			"sendHint": "Schickt den Fragebogen zur Auswertung ab",

			"multipleChoice": "Mehrfachauswahl - Mehr als eine Antwort möglich",
			"singleChoice": "Einfachauswahl - Nur eine Antwort möglich",
			"textFieldHint": "Bitte geben Sie die gefragten Informationen hier ein",
			"dateFieldHint": "Öffnet ein Fenster zur Auswahl eines Datums",
			"sliderFieldEquals": " entspricht ",
			"sliderFieldAnd": ", und ",

			"triggerHint": "Wenn diese Antwort ausgewählt wird erscheint eine weitere Frage. Bitte beantworten sie diese zusätzliche Frage ebenfalls ",
		}

	},

	/** contains all string rendered on the login-screen, as well as the ones for the landing-screen */
	"login":{
		"title": 'Login',
		"subTitle":"",
		"submit":"Login",
		"user":"Probanden-ID",
		"pass":"Passwort",
		"waiting":"Sie werden eingeloggt...",
		"errorPass":"Please try again.",
		"noSubjectId":"no valid subjectId found",
		"errorUserUnauthorized":"Invalid user data.",
		"qrInfo":"Please point the camera onto the qr-code.",
		"errorUserGeneric":"Beim Login ist ein Fehler aufgetreten",
		"permissionDialog":"Please allow the app to access your camera.",
		"studyIdHint":"Probanden-ID eingeben",

		/** contains all strings of the landing-screen */
		"landing":{
			"buttonText":"Registrieren",
			"title":"",
			"subTitle":"",
		   	"welcomeTitle":"Willkommen in der S.A.M.-Studien-App",
		   	"text":"Klicken Sie auf den \"Registrieren\"-Button, um sich neu zu registrieren.\n\n Falls sie bereits registriert sind, geben Sie bitte Ihre Probanden-ID ein, um sich wieder anzumelden."
		},
	},

	/** strings with generic purpose that can be used throughout the application */
	"generic":{
		"ok":"OK",
		"error":"Fehler",
		"abort":"Abbrechen",
		"warning":"Warnung",
		"info":"Information",
		"errorTitle":"Fehler",
		"successTitle":"Erfolg",
		"delete":"Ja, Daten löschen",
		"goBack":"Yes, please logout",
		"logoutWarning":"Logout Warning",
		"sendSuccess":"Ihre Daten wurden erfolgreich versendet.",
		"sendError":"Beim Übermitteln der Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
		"eraseAllWarning":"This will delete all local data. Do you want to precede?",
		"updateError":"Beim Abfragen der Daten ist ein Fehler aufgetreten. Bitte versuchen sie es erneut.",
		"infoRemoval":"Der aktuell gespeicherte Fragebogen ist obsolet und wird  nun gelöscht.",
		"reportWhileInIteratedMode":"Dialog to tell the user that he already sent in a special report and that he is right now on a special interval.",
		"reportWhileQuestionnaire":"Dialog to tell the user that currently a questionnaire is available and that he might use that one to report about his condition.",
	},
	
	/** strings of the about-screen */
	"about":{
		"title":"Über",
		"subTitle":"Informationen & Links",
	   	"logout":"Logout (just on DEV)",
		"delete":"Delete all & logout (just on DEV)",
		"userIdTitle":"Ihre Probanden-ID: ",

		/** contains the strings for the optional LegalInformation Screen */
		"legal": {
			"title": "Rechtliche Informationen",
			"subTitle": "//TODO",
			"iconType": "entypo",
			"iconTitle": "archive"
		}
	},

	/** contains the strings for the legal information screen */
	"legalInformation": {
		"title": "Rechtliche Informationen",
		"subTitle": "Rechtliches, Datenschutzhinweise und Lizenzen",
		"headline": "Example Legal Text",

		"content": `DEFINITIONS In this license apply to the interfaces of, the Work is not the case where Apple is the primary copyright notice of copyright, i.e., "Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006 Python Software Foundation; either version 1.3 or later is part of a file documenting the additions, changes or deletions from the Work. If this search is successful, then enquire whether the Work by You alone, not by any Contributor under this Agreement shall terminate as of the following: a) Accompany it with a work which combines Covered Code may contain in whole or in any resulting litigation. Definitions. 1.0.1. "Commercial Use" means distribution or otherwise redistribute the Licensed Product, or for any liability incurred by or claims asserted against, such Contributor as a consequence you may do only in order to apply it to your customers.
					You cannot charge for the Work is distributed to all recipients of Covered Code and executable versions of the Modified Version, and of promoting the sharing and reuse of software distributed under this License. Code" means the original Licensed Product. If you wish while maintaining the availability, integrity, and reliability of that Derived Work under any applicable law.		
					Interpreter' referring to the credit given on this website, or c) through a medium customarily used for display of the Package (7) You may distribute the Source form of the <ORGANIZATION> nor the names of the Source Code. You must duplicate the notice in Exhibit A shall not of themselves be deemed a waiver of future enforcement of that Package while still keeping the Package constitutes direct or contributory patent infringement, then any Derivative Works that You meet the following conditions are met: Redistributions of source code from the Original Code, and keep intact the notices that do not apply to any part thereof, and wants to make the terms applicable to Covered Code. All sublicenses to the work (an example is provided in accordance with the program. It is safest to attach them to the program. It is not confusingly similar phrase do not forfeit any of its terms and conditions of this License, provided that the Program originate from and are distributed by the Licensed Product.		
					This License To use this License which applies to any technical questions or inquiries, or provide any other system and a notice and this permission notice shall be subject to the user community. They therefore concern themselves with the appropriate bodies (for example the POSIX committees). Definitions: "Package" refers to such a notice. If You create or to ask you to surrender the rights.		
					These restrictions translate to certain responsibilities for you to comply with any of the Work that has been certified as open source. It has also been designated as GPL compatible by the Work to which you contribute may be distributed and modified, as well as in related documentation and collateral materials stating that the Program in object code form. This patent license to reproduce, prepare Derivative Works from it. Works" is defined in Article 3 (Restriction) The license granted by this license; they are first used, and the following restrictions: 1.		
					If a component of this License, provided that the Source Code or portions thereof with code not governed by the Contributor, such addition of the Program in a commercial product offering, such Distributor ("Commercial Distributor") hereby agrees to cease use and Distribution of Compiled Forms of the Package, if it fails to comply with the wishes of the software, Licensee agrees to defend claims against the other Contributors related to Product X, those performance claims and warranties, and if a Contributor which are reasonably necessary to make it enforceable. This License complies with the United States and the code itself as a special exception, the source code. And you must rename your license so that distribution is permitted only in or as it is not allowed.		
					You can re-use content from Wikimedia projects freely, with the Licensed Program from such Contributor, if any, must include such Notice in a manner that reasonably allows subsequent Recipients to identify the originator of its Contribution, if any, must include a copy of this License. Artistic License as published by the acts or omissions of such breach; (b) immediately in the copyright notice appear in the name of products derived from the rights conveyed by this License. Provisions which, by their nature, must remain in effect beyond the termination of this License and the following conditions are met: Redistributions of source code as you received as to the Free Software Foundation ("PSF"), and the following disclaimers.		
					Redistributions in source code and object code form. The patent license is also available under the new version. However, only the Licensor or any Contributor, and only if the Program in a commercial product offering, Product X. That Contributor is then produced by applying some process to that Work or a CC-BY-SA-compatible license is granted: 1) for code that you propose to make sure that everyone has such rights, we need to make reasonable conjectures as to name you as the conditions listed in Clause 6 above, in regard to the terms of this Agreement and any Modifications made by someone other than You; and/or (b) to use it for any purpose, but the Licensor or such Contributor (or portions thereof) either on an equitable basis. Nothing herein is intended to facilitate the commercial use of the License published by the parties or the like.`
	},

	/** strings of the survey-screen */
	"survery":{
		"logout":"Ausloggen",
		"title":"Fragebogen",
		"isLoading":"Wird geladen...",
		"yourAnswer":"Ihre Antwort",
		"titleCheckIn":"Check-In",
		/*TODO*/"welcomeTitle":"[welcomeTitle: Titel nach Vollendung des ersten Fragebogens]",
		"noUserTitle":"User not found",
		"sendFinished":"Fragebogen abschicken",
		"send":"Fragebogen abschicken",
		"subTitle":"",
		"surveySubTitle":"Auszufüllen bis:  ",
		"surveyTitle":"Ihr aktueller Fragebogen",
		"inputPlaceholder":"Bitte geben sie Ihre Antwort ein",
		"noQuestionnaireTitle":"Fragebogen wurde nicht gefunden",
		"subTitleCheckIn":"",
		"loadingQuestionnaire":"Fragebogen wird geladen",
		"inputPlaceholderTime":"Bitte Datum eingeben",
		"sessionTimeout":"Your user could not re recognized",
		"reloadingQuestionnaire":"Fragebogen wird erneut geladen",
		/*TODO*/"welcomeTitleFirstTime":"[welcomeTitleFirstTime: Titel bei erstmaligem Login]",
		"surveryTitleFirstTime":"Ihr erster Fragebogen",
		/*TODO*/"welcomeTextFirstTimeUser2":"\n[welcomeTextFirstTimeUser2: (Optional) Weiterer Text, angezeigt für Nutzer nach erstmaliger Nutzung.]",
		"noUserText":"Your ID could not be verified. Please try again.",
		"noNewQuestionnaireAvailableYetTitle":"Kein Fragebogen verfügbar.",
		"sendFinishedMessage":"Wollen Sie den Fragebogen wirklich abschicken?",
		"sendUnfinishedMessageDenied":"Der aktuelle Fragebogen ist noch nicht vollständig ausgefüllt. Bitte beantworten Sie alle erforderlichen Fragen.",
		"nextOne":"Der nächste Fragebogen ist zum folgenden Datum verfügbar: ",
		"noQuestionnaireText":"Es gab einen Fehler beim Abrufen des Fragebogens. Bitte versuchen Sie es erneut.",
		"noNewQuestionnaireAvailableYet":"Zurzeit ist noch kein neuer Fragebogen zur Beantwortung verfügbar.",
		"nextOneNew":"Der nächste Fragebogen ist zum folgenden Datum verfügbar: ",
		/*TODO*/"furtherInfo":"[furtherInfo: Im \"Über\"-Bereich finden Sie ihre Probanden-ID. Bitte notieren Sie sich diese, damit Sie sich erneut anmelden können, sollten sie ausgeloggt werden.]",
		/*TODO*/"welcomeTextUser":"[welcomeTextUser: Willkommenstext bei weiterer Nutzung; Hinweis auf die Frist des aktuellen Fragebogens]",
		/*TODO*/"welcomeTextFirstTimeUser1":"[welcomeTextFirstTimeUser1: Text, der Nutzern bei erstmaliger Nutzung angezeigt wird; Hinweis zur Frist:]\n",
	},

	/** strings for the special-report-flow */
	"reporting":{
		"symptoms_no":"NO",
		"symptoms_yes":"YES",
		"symptoms_success_ok":"Success-Confirmation",
		"symptoms_success_header":"Success-Message-Header",
		"symptoms_header":"Button: Send out Special Report",
		"symptoms_success_message":"Success-Message-Content",
		"symptoms_question":"Insert confirmation question here",
	},

	/** each entry in this array will generate a new listItem on the about-screen. When clicked on such an item, a webView will open that
	 * can display any website. "iconType" is the name of a free Webfont and the title is the name of the particular icon. .
	 * as this app is using react-native-elements, the list of compatible fonts can be found in its documentation:
	 * https://reactnativeelements.com/docs/icon
	 */
	"webViews": [
		{
			"title":"A WebView",
			"subTitle": "This is a listItem Element.\n\nIf clicked on, this ListItem will open the WebView-screen, which in turn will render a website right in the app.",
			"screenSubTitle": "Subtitle of this screen",
			"uri": 'https://github.blog/',
			"iconTitle": "light-bulb",
			"iconType": "entypo"
		},
		{
			"title":"Another WebView",
	   		"subTitle": "For each item you add to the 'webView' property of textConfig.js another entry in this list is generated. That way you can add more content by just hosting a website and add it to textConfig.js",
			"screenSubTitle": "Subtitle of this screen",
			"uri": 'https://dmw.hih-2025.de/livestream/',
			"iconTitle": "light-bulb",
			"iconType": "entypo"
		}
	],

	/** each entry in this array will generate a new listItem on the about-screen. When clicked on such an item, a modal will open
	 * that informs the user that he/she is being redirected to their local browser. "iconType" is the name of a free Webfont and the title is the name of the particular icon. .
	 * as this app is using react-native-elements, the list of compatible fonts can be found in its documentation:
	 * https://reactnativeelements.com/docs/icon
	 */
	"modalLinks": [
		{
			"title":"First Link",
			"subTitle": "This is a regular link. It will open a modal before redirecting the user to his/her own browser."	,
			"text": "your are now being redirected.",
			"uri": 'https://github.blog/',
			"iconTitle": "link",
			"iconType": "entypo"
		},
		{
			"title":"Second Link",
	   		"subTitle": "For each item you add to the 'modalLinks' property of textConfig.js another entry in this list is generated.",
			"text": "your are now being redirected.",
			"uri": 'https://ibm.com/',
			"iconTitle": "link",
			"iconType": "entypo"
		}
	]
}