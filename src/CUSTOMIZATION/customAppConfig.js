
// (C) Copyright IBM Deutschland GmbH 2020.  All rights reserved.

// the object provided by this file will be merged with the return-object of the module "appConfig.js".
// should you want to update a value from that file (for example a rest-endpoint),
// than copy the content of 'src/config/appConfig.js' below the marked comment at the end of this file.
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
import { Dimensions } from "react-native";

/***********************************************************************************************
constants
***********************************************************************************************/

// current device width
const { width } = Dimensions.get("window");

// production-base-backend-uri
// TODO: add uri for production
const baseUriProductive = "https://mobile-backend-test-egepan.umopenshift03-27c74fb079246a1ac53f0d02625326eb-0000.eu-de.containers.appdomain.cloud/api/";

// development-base-backend-uri
const baseUriDevelopment = "http://localhost:8080/api/";

/***********************************************************************************************
configuration
***********************************************************************************************/

/**
 * this object contains the configuration for the application. some options are only valid in
 * developemt environment.
 */
const conf = {
  // DEVELOPMENT OPTIONS
  /*-----------------------------------------------------------------------------------*/

  // these options are meant for development only.

  /** dev-option:
   * skips the QR login after 500ms */
  automateQrLogin: __DEV__ && false,

  /** dev-option:
   * user-id for automated login */
  automateQrLoginUserId:
    '{"AppName":"COMPASS","AppID":"7bfc3b07-a97d-4e11-8ac6-b970c1745476"}',

  /** dev-option:
   * shows a button to erase all data (in the about-menu) - dev-only */
  showEraseAll: __DEV__ && true,

  /** dev-option:
   * shows a button to log out the user (in the about-menu) - dev-only */
  showLogout: __DEV__ && true,

  /** dev-option:
   * logs out the response-json parsed as an object in the developer console
   * */
  logPureResponse: __DEV__ && false,

  /** dev-option:
   * logs out the response-json in the developer console
   * */
  logPureResponseJSON: __DEV__ && false,

  /** dev-option:
   * logs out the encrypted response-json in the developer console
   * */
  logEncryptedResponse: __DEV__ && false,

  /** dev-option:
   * used the locally available questionnaire.js instead of the procured one from the backend */
  useLocalQuestionnaireInsteadOftheReceivedOne: __DEV__ && false,

  /** dev-option:
   * skips the id-comparison */
  skipIncomingQuestionnaireCheck: false,

  // login
  /*-----------------------------------------------------------------------------------*/

  // the login qr-code is formed like the following example.
  // {
  // 	"AppName":  "COMPASS",
  // 	"AppID":	"userId"
  // }
  // the attribute-names necessary to check the appIdentifer and to extract the userId

  /** login-option:
   * the name of the attribute in the qr-code holding the app-identifier*/
  qrCodeAttributeHoldingTheAppIdentifier: "AppName",

  /** login-option:
   * the app-identifier */
  appIdentifier: "COMPASS",

  /** login-option:
   * the name of the attribute in the qr-code holding the user-id*/
  qrCodeAttributeHoldingTheUserName: "AppID",

  // local storage identifiers
  /*-----------------------------------------------------------------------------------*/

  // these are identifiers for the items created in AsyncStorage. AsyncStorage will persist
  // those data points until it is manually deleted, updated or the app was removed by the user.
  // ATTENTION: These are not encrypted!

  /** local storage identifier:
   * persist the questionnaireItemMap */
  localStorageMap: "@EGEPAN_STORE:persisted_survey",

  /** local storage identifier:
   * persists the questionnaireItemMap */
  localStorageList: "@EGEPAN__STORE:persisted_survey_list",

  /** local storage identifier:
   * the user id of the user last logged in */
  lastUserId: "@EGEPAN__STORE:last_active_user",

  /** local storage identifier:
   * the id of the last active questionnaire of the last active user */
  lastQuestionnaireId: "@EGEPAN__STORE:last_questionnaire_id",

  /** local storage identifier:
   * persists all relevant information about the notification-service */
  notificationState: "@EGEPAN__STORE:notification_state",

  // rest endpoints
  /*-----------------------------------------------------------------------------------*/

  // these are the various endpoints the app communicates with.
  // the base-uri is dependent on the current environment (dev || prod)

  endpoints: {
    /** rest:
     * endpoint to log the user in and retrieve the accessToken */
    login: (__DEV__ ? baseUriDevelopment : baseUriProductive) + "participant/",

    /** rest:
     * endpoint to get the user-profile */
    getUser: (__DEV__ ? baseUriDevelopment : baseUriProductive) + "participant/",

    /** rest:
     * endpoint for a special report */
    report: (__DEV__ ? baseUriDevelopment : baseUriProductive) + "queue/",

    /** rest:
     * endpoint to post the questionnaire to */
    sendQuestionnare:
      (__DEV__ ? baseUriDevelopment : baseUriProductive) + "queue/",

    /** rest:
     * endpoint to receive the questionnaire */
    getQuestionnaire:
      (__DEV__ ? baseUriDevelopment : baseUriProductive) + "questionnaire/",
  },

  // ui
  /*-----------------------------------------------------------------------------------*/

  /** ui:
   * adds another LinkList to the About-Screen, which navigates to LegalInformationScreen.
   * the content of that screen can be configured through the textConfiguration
   */
  allowAccessToLegalInformationScreen: true,

  /**
   * the font-scaling function:
   * this function is meant to provide an additional means of scaling the fonts of the
   * application. it is used sporadically throughout the application.
   * @param  {number} size base font size
   */
  scaleFontsFkt: (size) => {
    // scales the fontsize dynamically down for smaller devices
    let scaleFonts = true;

    // the base parameter for the font-scaling
    // (devicewidth / guidelineBaseWidthFontScaling * fontsize)
    let guidelineBaseWidthFontScaling = 400;

    // returns the new size
    return scaleFonts ? (width / guidelineBaseWidthFontScaling) * size : size;
  },

  /**
   * the ui-scaling function:
   * this function is meant to provide an additional means of scaling ui-elements of the
   * application. it is used sporadically throughout the application.
   * @param  {number} size base ui size
   * @param  {number} [rescaleValue] value used as an additional scale
   */
  scaleUiFkt: (size, rescaleValue) => {
    // normalization
    rescaleValue = rescaleValue || 1;

    // scales certain ui parts dynamically down for smaller devices
    let scaleUi = true;

    // the base parameter for the ui-scaling
    // (devicewidth / guidelineBaseWidthUiScaling * size)
    let guidelineBaseWidthUiScaling = 430 / rescaleValue;

    // returns the new size
    return scaleUi ? (width / guidelineBaseWidthUiScaling) * size : size;
  },

  // rules
  /*-----------------------------------------------------------------------------------*/

  /** default values, should there be no ruleset coming from the server with the user-update.
   * each entry contains definitions of questions (from the questionnaire)
   * and their corresponding answers that would trigger that particular rule.
   * of the return object of the function createResponseJSON() located in src/services/export
   */

  /** the name of the attribute used to signal a special report */
  defaultReportAttribute: "basicTrigger",

  // encryption
  /*-----------------------------------------------------------------------------------*/

  // should the user-response not hold a public certificate (for encrypting data sent
  // to the backend) a provisional on will be used:

  /** encryption config:
   * the default recipient key (in case nothing comes from the server) */
  defaultRecipientCertificatePemString: __DEV__
    ? // the dev-certificate
      `-----BEGIN CERTIFICATE-----
		  MIIDQTCCAimgAwIBAgIUCsfj6fazVbkvRfb9JwJbxGR1QjowDQYJKoZIhvcNAQEL
		  BQAwMDELMAkGA1UEBhMCREUxEzARBgNVBAgMClNvbWUtU3RhdGUxDDAKBgNVBAoM
		  A0lCTTAeFw0yMTAxMjAxMTI5MzBaFw0yMTAyMTkxMTI5MzBaMDAxCzAJBgNVBAYT
		  AkRFMRMwEQYDVQQIDApTb21lLVN0YXRlMQwwCgYDVQQKDANJQk0wggEiMA0GCSqG
		  SIb3DQEBAQUAA4IBDwAwggEKAoIBAQDo81M2aGCcQRgck1uuFtBNbFfk3NV8JnWh
		  nwpp/tNd18KGudYm9bNGdkFPchqeyKcglBviPBcsyad9iz5u7SSlWRiVBHXVvAKw
		  6K+YVJ+wfQn+GU40vX+3hcv52sJMnpQky4pY99qjg9mIa4/H3YnZfoanw0vWrwCt
		  sKLcBhhslsAFDw0AppTp0hiG5rAWz48Xq6ynzByLglWOdijYihJHaEKaOLZf8vls
		  T5lQ6t6rflL9PzHLmubRit5YiKdg4utj+fmp6/mdJk8/MQ/WbiIQCF0mYqSt7oiq
		  C8zmtWKiW6Cs+b4KNJvJNS8lPK6CZnFoWoTiUY4KQHjaMW37ND1tAgMBAAGjUzBR
		  MB0GA1UdDgQWBBS58Dxb/i+8QQaGHSfv7FnTxL8DGzAfBgNVHSMEGDAWgBS58Dxb
		  /i+8QQaGHSfv7FnTxL8DGzAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUA
		  A4IBAQBkCCnHHMIE+qUQLeOnD3aIMmllIndWTbLNf0MaTdn9jQOXsICNzkACIkx8
		  PyCqSE+L6uq1bR3hs6SJFpawjk8OsEXhniZIWbymVGZ2djbtAVBUWj4gJ0/KgO8v
		  m6IvwRLXCPdxuLsM6XdH9NI72DY1gBIIJ5NQaq9wZt4yBzBHMGFZoRDg04xCe0eU
		  /dKKBsJfDbgXOwk7XNw1ncRCeJ0o5wpDD/T1SJduku2g6BxoZp1+bcd00ckefpQh
		  20ClX5Ccxcn4BVa3x1U+fVOZ7Fm/ACR2++fmpFWlCeghtRr4QNoMzqNY/3mK4SLr
		  hqHSzFGp8HN2Ui5QWVSu7DgLIvkW
		  -----END CERTIFICATE-----`
    : // the prod-certificate
      `...`,
};

/***********************************************************************************************
export
***********************************************************************************************/

export default conf;
