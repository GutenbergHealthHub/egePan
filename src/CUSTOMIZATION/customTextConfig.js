// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

// the object provided by this file will be merged with the return-object of the module "textConfig.js".
// should you want to update a value from that file (for example the primary color of the theme),
// than copy the content of 'src/config/textConfig.js' below the marked comment at the end of this file.
// this ensures that you do not need to touch the rest of the source code and because of that, you won't loose
// the ability to merge updated from the repository.

//   /$$           /$$         /$$
//  |__/          | $$        | $$
//   /$$ /$$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$  /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$  /$$$$$$
//  | $$| $$__  $$ /$$_____/ /$$__  $$ /$$__  $$|_  $$_/     /$$_____/ /$$__  $$ /$$__  $$ /$$__  $$
//  | $$| $$  \ $$|  $$$$$$ | $$$$$$$$| $$  \__/  | $$  | $$  | $$  \ $$| $$  | $$| $$$$$$$$
//  | $$| $$  | $$ \____  $$| $$_____/| $$    | $$ /$$  | $$  | $$  | $$| $$  | $$| $$_____/
//  | $$| $$  | $$ /$$$$$$$/|  $$$$$$$| $$    |  $$$$/  |  $$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$
//  |__/|__/  |__/|_______/  \_______/|__/     \___/     \_______/ \______/  \_______/ \_______/
//
//   /$$     /$$
//  | $$    | $$
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
  accessibility: {
    types: {
      button: "button",
      header: "header",
    },

    refresh: "refresh",
    refreshHint:
      "Lädt den Fragebogen sowie dessen Status erneut. Die Seite wird neu geladen",

    back: "zurück",
    backHint: "Gehe zurück zur vorherigen Seite",

    close: "schließen",
    closeHint: "Schließt die aktuelle Seite oder Eingabebereich",

    accept: "Annehmen",
    cancel: "Abbrechen",
    acceptHint: "Zum Standardbrowser wechseln, um die Seite zu öffnen",

    menu: "Zusätzliche Informationen",
    menuHint: "Öffnet eine neue Seite mit zusätzlichen Informationen und Links",

    logoutHint: "Startet den Logout-Prozess und leitet zurück zur Login-Seite",
    loginHint: "Startet den Login-Prozess",
    loginManuallyHint:
      "Bitte geben Sie Ihre Probanden-ID ein, sofern sie bereits registriert sind",
    submitHint: "Abschicken",

    questionnaire: {
      middleButtonFinished:
        "Frage wurde beantwortet. Weiter zur nächsten Frage",
      middleButtonUnfinished:
        "Frage wurde noch nicht beantwortet. Trotzdem weiter zur nächsten Frage.",
      middleButtonHint:
        "Geht zur nächsten Frage oder schließe den Eingabebereich, wenn dies die letzte Frage ist",

      rightButtonHint: "Schließt den Eingabebereich",
      leftButtonHint: "Geht zur vorherigen Frage",
      alertButtonHint: "Schließt das Hinweisfenster",

      questionnaireCellHint:
        "Öffnet eine neue Seite, um die Kategorien des Fragebogens anzuzeigen",
      categoryCellHint:
        "Öffnet den Eingabebereich, um die Kategorie des Fragebogens zu beantworten",
      category: "Diese Kategorie ",
      questionnaire: "Dieser Fragebogen",
      notStarted: "wurde noch nicht angefangen",
      notFinished: "wurde angefangen, aber noch nicht abgeschlossen",
      finished: "ist abgeschlossen",

      sendHint: "Schickt den Fragebogen zur Auswertung ab",

      multipleChoice: "Mehrfachauswahl - Mehr als eine Antwort möglich",
      singleChoice: "Einfachauswahl - Nur eine Antwort möglich",
      textFieldHint: "Bitte geben Sie die gefragten Informationen hier ein",
      dateFieldHint: "Öffnet ein Fenster zur Auswahl eines Datums",
      sliderFieldEquals: " entspricht ",
      sliderFieldAnd: ", und ",

      triggerHint:
        "Wenn diese Antwort ausgewählt wird erscheint eine weitere Frage. Bitte beantworten sie diese zusätzliche Frage ebenfalls ",
    },
  },

  /** contains all string rendered on the login-screen, as well as the ones for the landing-screen */
  login: {
    title: "Login",
    subTitle: "",
    submit: "Login",
    user: "Probanden-ID",
    pass: "Passwort",
    waiting: "Sie werden eingeloggt...",
    errorPass: "Please try again.",
    noSubjectId: "no valid subjectId found",
    errorUserUnauthorized: "Ungültige Nutzerdaten",
    qrInfo: "Bitte richten Sie die Kamera auf den QR-Code.",
    errorUserGeneric: "Beim Login ist ein Fehler aufgetreten.",
    permissionDialog: "Bitte erlauben Sie der App, auf die Kamera zuzugreifen.",
    studyIdHint: "Probanden-ID eingeben",

    /** contains all strings of the landing-screen */
    landing: {
      buttonText: "Registrieren",
      title: "",
      subTitle: "",
      welcomeTitle: "Willkommen in der S.A.M.-Studien-App",
      text: 'Klicken Sie auf den "Registrieren"-Button, um sich neu zu registrieren.\n\n Falls sie bereits registriert sind, geben Sie bitte Ihre Probanden-ID ein, um sich wieder anzumelden.',
      autoLoginErrorTitle: "Auto Login Failed",
      autoLoginError:
        "An Error occurred while trying to automatically login. Please check your network and try again",
      retry: "retry",
    },
  },

  /** strings with generic purpose that can be used throughout the application */
  generic: {
    ok: "OK",
    error: "Fehler",
    abort: "Abbrechen",
    warning: "Warnung",
    info: "Information",
    errorTitle: "Fehler",
    successTitle: "Erfolg",
    delete: "Ja, Daten löschen",
    goBack: "Yes, please logout",
    logoutWarning: "Logout Warning",
    sendSuccess: "Ihre Daten wurden erfolgreich versendet.",
    sendError:
      "Beim Übermitteln der Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    eraseAllWarning: "This will delete all local data. Do you want to precede?",
    eraseLocalDataAtEndOfStudyText:
      "Möchten sie wirklich alle lokalen Daten löschen und sich ausloggen? Dies kann nicht rückgängig gemacht werden!",
    eraseLocalDataAtEndOfStudyTitle: "Daten löschen und ausloggen",
    updateError:
      "Beim Abfragen der Daten ist ein Fehler aufgetreten. Bitte versuchen sie es erneut.",
    infoRemoval:
      "Der aktuell gespeicherte Fragebogen ist veraltet und wird nun gelöscht.",
    reportWhileInIteratedMode:
      "Dialog to tell the user that he already sent in a special report and that he is right now on a special interval.",
    reportWhileQuestionnaire:
      "Dialog to tell the user that currently a questionnaire is available and that he might use that one to report about his condition.",
  },

  /** strings of the about-screen */
  about: {
    title: "Über",
    subTitle: "Informationen & Links",
    logout: "Logout (just on DEV)",
    delete: "Delete all & logout (just on DEV)",
    userIdTitle: "Ihre Probanden-ID: ",

    /** contains the strings for the optional LegalInformation Screen */
    legal: {
      title: "Rechtliche Informationen",
      subTitle: "Nutzungsbedingungen und Lizenzen",
      iconType: "entypo",
      iconTitle: "archive",
    },
    licenses: {
      title: "Lizenzen",
      subTitle: "Lizenzen der genutzten Dritt-Software",
      iconType: "entypo",
      iconTitle: "archive",
    },
  },

  /** contains the strings for the legal information screen */
  legalInformation: {
    title: "Rechtliche Informationen",
    subTitle: "Rechtliches, Datenschutzhinweise und Lizenzen",
    headline: "",

    content: `DEFINITIONS In this license apply to the interfaces of, the Work is not the case where Apple is the primary copyright notice of copyright, i.e., "Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006 Python Software Foundation; either version 1.3 or later is part of a file documenting the additions, changes or deletions from the Work. If this search is successful, then enquire whether the Work by You alone, not by any Contributor under this Agreement shall terminate as of the following: a) Accompany it with a work which combines Covered Code may contain in whole or in any resulting litigation. Definitions. 1.0.1. "Commercial Use" means distribution or otherwise redistribute the Licensed Product, or for any liability incurred by or claims asserted against, such Contributor as a consequence you may do only in order to apply it to your customers.
					You cannot charge for the Work is distributed to all recipients of Covered Code and executable versions of the Modified Version, and of promoting the sharing and reuse of software distributed under this License. Code" means the original Licensed Product. If you wish while maintaining the availability, integrity, and reliability of that Derived Work under any applicable law.		
					Interpreter' referring to the credit given on this website, or c) through a medium customarily used for display of the Package (7) You may distribute the Source form of the <ORGANIZATION> nor the names of the Source Code. You must duplicate the notice in Exhibit A shall not of themselves be deemed a waiver of future enforcement of that Package while still keeping the Package constitutes direct or contributory patent infringement, then any Derivative Works that You meet the following conditions are met: Redistributions of source code from the Original Code, and keep intact the notices that do not apply to any part thereof, and wants to make the terms applicable to Covered Code. All sublicenses to the work (an example is provided in accordance with the program. It is safest to attach them to the program. It is not confusingly similar phrase do not forfeit any of its terms and conditions of this License, provided that the Program originate from and are distributed by the Licensed Product.		
					This License To use this License which applies to any technical questions or inquiries, or provide any other system and a notice and this permission notice shall be subject to the user community. They therefore concern themselves with the appropriate bodies (for example the POSIX committees). Definitions: "Package" refers to such a notice. If You create or to ask you to surrender the rights.		
					These restrictions translate to certain responsibilities for you to comply with any of the Work that has been certified as open source. It has also been designated as GPL compatible by the Work to which you contribute may be distributed and modified, as well as in related documentation and collateral materials stating that the Program in object code form. This patent license to reproduce, prepare Derivative Works from it. Works" is defined in Article 3 (Restriction) The license granted by this license; they are first used, and the following restrictions: 1.		
					If a component of this License, provided that the Source Code or portions thereof with code not governed by the Contributor, such addition of the Program in a commercial product offering, such Distributor ("Commercial Distributor") hereby agrees to cease use and Distribution of Compiled Forms of the Package, if it fails to comply with the wishes of the software, Licensee agrees to defend claims against the other Contributors related to Product X, those performance claims and warranties, and if a Contributor which are reasonably necessary to make it enforceable. This License complies with the United States and the code itself as a special exception, the source code. And you must rename your license so that distribution is permitted only in or as it is not allowed.		
					You can re-use content from Wikimedia projects freely, with the Licensed Program from such Contributor, if any, must include such Notice in a manner that reasonably allows subsequent Recipients to identify the originator of its Contribution, if any, must include a copy of this License. Artistic License as published by the acts or omissions of such breach; (b) immediately in the copyright notice appear in the name of products derived from the rights conveyed by this License. Provisions which, by their nature, must remain in effect beyond the termination of this License and the following conditions are met: Redistributions of source code as you received as to the Free Software Foundation ("PSF"), and the following disclaimers.		
					Redistributions in source code and object code form. The patent license is also available under the new version. However, only the Licensor or any Contributor, and only if the Program in a commercial product offering, Product X. That Contributor is then produced by applying some process to that Work or a CC-BY-SA-compatible license is granted: 1) for code that you propose to make sure that everyone has such rights, we need to make reasonable conjectures as to name you as the conditions listed in Clause 6 above, in regard to the terms of this Agreement and any Modifications made by someone other than You; and/or (b) to use it for any purpose, but the Licensor or such Contributor (or portions thereof) either on an equitable basis. Nothing herein is intended to facilitate the commercial use of the License published by the parties or the like.`,
    licenses: {
      title: "Lizenzen",
      subtitle: "Lizenzen der genutzten Dritt-Software",
      apacheDescription:
        "Das/die folgende(n) Paket(e) sind lizenziert unter der Apache-2.0-Lizenz:",
      ApacheLicense:
        'Apache License\n\nVersion 2.0, January 2004\n\nhttp://www.apache.org/licenses/\r\n\r\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\r\n\r\n1. Definitions.\r\n\r\n"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.\r\n\r\n"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.\r\n\r\n"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.\r\n\r\n"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.\r\n\r\n"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.\r\n\r\n"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.\r\n\r\n"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).\r\n\r\n"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.\r\n\r\n"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."\r\n"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.\r\n 2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.\r\n 3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.\r\n 4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:\r\n (a) You must give any other recipients of the Work or Derivative Works a copy of this License; and\r\n (b) You must cause any modified files to carry prominent notices stating that You changed the files; and\r\n (c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and\r\n (d) If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.\r\n You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.\r\n 5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.\r\n 6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.\r\n 7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.\r\n 8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.\r\n 9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.\r\n END OF TERMS AND CONDITIONS',
      MITLicense:
        'MIT License\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
      BSD3License:
        'New BSD License (3-clause)\nAll rights reserved.\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: \n * Redistributions of source code must retain the above copyrightnotice, this list of conditions and the following disclaimer.\n* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n* Neither the name of Digital Bazaar, Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIEDWARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AREDISCLAIMED. IN NO EVENT SHALL DIGITAL BAZAAR BE LIABLE FOR ANYDIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED ANDON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THISSOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.',
    },
  },

  /** strings of the survey-screen */
  survey: {
    logout: "Ausloggen",
    title: "Fragebogen",
    isLoading: "Wird geladen...",
    yourAnswer: "Ihre Antwort",
    titleCheckIn: "Check-In",
    welcomeTitle: "Willkommen zurück in der S.A.M.-App",
    noUserTitle: "User not found",
    sendFinished: "Fragebogen abschicken",
    send: "Fragebogen abschicken",
    subTitle: "",
    surveySubTitle: "Bitte Füllen sie den aktuellen Fragebogen aus bis: ",
    surveyTitle: "Ihr aktueller Fragebogen",
    inputPlaceholder: "Bitte geben sie Ihre Antwort ein",
    endedStudyTitle: "Ende der Studie",
    noQuestionnaireTitle: "Fragebogen wurde nicht gefunden",
    subTitleCheckIn: "",
    loadingQuestionnaire: "Fragebogen wird geladen",
    inputPlaceholderTime: "Bitte Datum eingeben",
    sessionTimeout: "Your user could not re recognized",
    reloadingQuestionnaire: "Fragebogen wird erneut geladen",
    welcomeTitleFirstTime: "Willkommen in der S.A.M.-App",
    surveyTitleFirstTime: "Ihr erster Fragebogen",
    welcomeTextFirstTimeUser2: "",
    noUserText:
      "Ihre ID konnte nicht verifiziert werden, Bitte versuche Sie es erneut.",
    noNewQuestionnaireAvailableYetTitle: "Kein Fragebogen verfügbar.",
    sendFinishedMessage: "Wollen Sie den Fragebogen wirklich abschicken?",
    sendUnfinishedMessageDenied:
      "Der aktuelle Fragebogen ist noch nicht vollständig ausgefüllt. Bitte beantworten Sie alle erforderlichen Fragen.",
    endedStudyText:
      "Die Studie ist für Sie nun beendet. Vielen herzlichen Dank für Ihre Teilnahme.\n\n Sie können sich nun ausloggen, alle Daten löschen un die App deinstallieren.",
    nextOne:
      "Der nächste Fragebogen kann ab dem folgenden Datum beantwortet werden: ",
    noQuestionnaireText:
      "Es gab einen Fehler beim Abrufen des Fragebogens. Bitte versuchen Sie es erneut.",
    noNewQuestionnaireAvailableYet:
      "Zurzeit ist noch kein neuer Fragebogen zur Beantwortung verfügbar.",
    nextOneNew: "Der nächste Fragebogen ist zum folgenden Datum verfügbar: ",
    furtherInfo:
      'Im Bereich "Über die S.A.M.-App" finden Sie Ihre Probanden-ID. Bitte notieren Sie sich diese, damit Sie sich erneut anmelden können, sollten Sie ausgeloggt werden. ',
    welcomeTextUser:
      "Es liegt ein Fragebogen zu Beantwortung vor. Bitte bis zum folgenden Datum ausfüllen und abschicken: ",
    welcomeTextFirstTimeUser1:
      "Wir laden Sie herzlich ein, Ihren ersten Fragebogen bis zum folgenden Datum auszufüllen: ",
  },

  /** strings for the special-report-flow */
  reporting: {
    symptoms_no: "NO",
    symptoms_yes: "YES",
    symptoms_success_ok: "Success-Confirmation",
    symptoms_success_header: "Success-Message-Header",
    symptoms_header: "Button: Send out Special Report",
    symptoms_success_message: "Success-Message-Content",
    symptoms_question: "Insert confirmation question here",
  },

  /** each entry in this array will generate a new listItem on the about-screen. When clicked on such an item, a webView will open that
   * can display any website. "iconType" is the name of a free Webfont and the title is the name of the particular icon. .
   * as this app is using react-native-elements, the list of compatible fonts can be found in its documentation:
   * https://reactnativeelements.com/docs/icon
   */
  webViews: [],

  /** each entry in this array will generate a new listItem on the about-screen. When clicked on such an item, a modal will open
   * that informs the user that he/she is being redirected to their local browser. "iconType" is the name of a free Webfont and the title is the name of the particular icon. .
   * as this app is using react-native-elements, the list of compatible fonts can be found in its documentation:
   * https://reactnativeelements.com/docs/icon
   */
  modalLinks: [
    {
      title: "PREPARED (NUM)",
      subTitle: "Homepage des PREPARED (NUM)-Projekts",
      text: "Sie werden nun weitergeleitet",
      uri: "https://www.num-prepared.de",
      iconTitle: "link",
      iconType: "entypo",
    },
  ],
};
