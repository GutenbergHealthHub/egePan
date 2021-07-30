
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
const baseUriProductive = "https://mobile-backend-test-egepan-prod.umopenshift03-27c74fb079246a1ac53f0d02625326eb-0000.eu-de.containers.appdomain.cloud/api/";

// development-base-backend-uri
const baseUriDevelopment = "http://localhost:8080/api/";

/***********************************************************************************************
configuration
***********************************************************************************************/

/**
 * this object contains the configuration for the application. some options are only valid in
 * development environment.
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
	FCMToken: '@COMPASS_STORE:fcm_token',

	// push notification
	/*-----------------------------------------------------------------------------------*/

	/** push:
	 * if set to true the app tries to connect to a FCM instance that in turn will be able 
	 * to send out push notifications reminding the participants to open the app. 
	 * 
	 * To establish the connections three other files must be updated:
	 * - AppDelegate.m // comment-in line 25
	 * - google-services.json // replace with your FCM credentials
	 * - GoogleService-Info.plist replace with your FCM credentials
	 * 
	 * WARNING: The app will NOT build if those files are not updated accordingly.
	 * */
	connectToFCM: true,

	// updates the locally generated device token with the backend on each user update
	reconnectOnEachUserUpdate: false,

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
    sendQuestionnaire:
      (__DEV__ ? baseUriDevelopment : baseUriProductive) + "queue/",

    /** rest:
     * endpoint to receive the questionnaire */
    getQuestionnaire:
      (__DEV__ ? baseUriDevelopment : baseUriProductive) + "questionnaire/",

    /** rest:
		 * endpoint to receive the questionnaire */
		updateToken: (__DEV__ ? baseUriDevelopment : baseUriProductive) + 'participant/update-device-token/',
  },

  // ui
  /*-----------------------------------------------------------------------------------*/

  /** ui:
   * adds another LinkList to the About-Screen, which navigates to LegalInformationScreen.
   * the content of that screen can be configured through the textConfiguration
   */
  allowAccessToLegalInformationScreen: true,

	/** ui:
	* adds a progressbar to the bottom of the questionnaireModal
	*/
	useProgressBar: true,

	/** ui:
	* when true: calculates the exact position of the progress in relation to the given answers.
	* when false: uses absolute values to calculate the position.
	*/
	useStrictModeProgressBar: true,

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
    // (device width / guidelineBaseWidthFontScaling * fontsize)
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
    // (device width / guidelineBaseWidthUiScaling * size)
    let guidelineBaseWidthUiScaling = 430 / rescaleValue;

    // returns the new size
    return scaleUi ? (width / guidelineBaseWidthUiScaling) * size : size;
  },

  // rules
  /*-----------------------------------------------------------------------------------*/

  /** default values, should there be no rule-set coming from the server with the user-update.
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
      `-----BEGIN CERTIFICATE-----
      MIIGDDCCA/QCCQCZiGco81PYezANBgkqhkiG9w0BAQsFADCBxzELMAkGA1UEBhMC
      REUxGDAWBgNVBAgMD1JoZWlubGFuZC1QZmFsejEOMAwGA1UEBwwFTWFpbnoxJTAj
      BgNVBAoMHFVuaXZlcnNpdMODwqR0c21lZGl6aW4gTWFpbnoxHTAbBgNVBAsMFEd1
      dGVuYmVyZyBIZWFsdGggSHViMSAwHgYDVQQDDBdnaGgudW5pbWVkaXppbi1tYWlu
      ei5kZTEmMCQGCSqGSIb3DQEJARYXZ2hoQHVuaW1lZGl6aW4tbWFpbnouZGUwHhcN
      MjEwNTMxMDgzMzQ1WhcNMjQwNTMwMDgzMzQ1WjCBxzELMAkGA1UEBhMCREUxGDAW
      BgNVBAgMD1JoZWlubGFuZC1QZmFsejEOMAwGA1UEBwwFTWFpbnoxJTAjBgNVBAoM
      HFVuaXZlcnNpdMODwqR0c21lZGl6aW4gTWFpbnoxHTAbBgNVBAsMFEd1dGVuYmVy
      ZyBIZWFsdGggSHViMSAwHgYDVQQDDBdnaGgudW5pbWVkaXppbi1tYWluei5kZTEm
      MCQGCSqGSIb3DQEJARYXZ2hoQHVuaW1lZGl6aW4tbWFpbnouZGUwggIiMA0GCSqG
      SIb3DQEBAQUAA4ICDwAwggIKAoICAQDEi+rGrGLJlYngoZN6E1FqsMfvp+Pw5CQJ
      yNo4aONyLlfBFPMbF84oFiCba0JSJuphiD2p3sGYfZ0r+YfUe0Qf+ctfRvvuWpxo
      5PH4wd4w/UZHfBk+D9drybxA2/ztfUBgq0QGz+dvJAk2XScD8qGTt0KTR6GvTnvv
      85zVQSoEEbdRccMwOIfmdmdbHBsny4QvpEq+eR9h81bYUorcjhC+ybZCnR1i3yJn
      n1tNeuExPSLhhA7zU12W/0l1dCcwJu6RnLOjpbAgst7CHpxySs+9y/CM0mp6K16e
      29VhqQeP6IrpOAUlJMW9BCHo8q+M7TgFnlRdY7ZIDM05zZQApFzpQri5kcCBaZmE
      UjwX4F8WCqFitRMbi5dOB+jmnUQ6Jq6QjZ3HAwCFLRdkpIIR1FcN5Yrj9IF/kM0d
      KqJbY+YJSBQJV3t+Y4g/chZC0qDQ8wE+QEW2H6XSG8Rcw2LFGtHAn2C/gOPa7RPH
      8GljIahP+Yr6yccAwUHEdbmmlczzBvmyYRwCkPr0A4khPanqadaDPjYp1ABqnQT8
      2nhLk/7eyZzgk+K7eOr+5N7Qo8dQO3YqH72Gyu6T88KINki8nshuzptrqrcCFBO5
      tMq2Mj7PcQodieF7SFP8Hgfwii7d0PssmpaN9AedMb79bu1KG72uWFjlKnfB/yeE
      NFmeNkbffQIDAQABMA0GCSqGSIb3DQEBCwUAA4ICAQCLB2qC2CGNe2XRiwbA0keW
      msyyteJ9vWPU405Ey7C+mGFDiugUIoINFQOIRGsFY5E7jL/+55C464ZfHAD/8Vc+
      QKWnDSRLFO8u2uMihdDG+4wKshrlemEJn+Q0r7xBdCJHLT+w2ZnI7hFmO6ABi8Gt
      J9FVf65/DX4x7ztmWx6U2d3hKf0IZvIW9wZQJsRTB6gELIvHPoFxBGdEMlUqo9AA
      QtTmiBPw2fxsX51GU61JUWxgu0O9ZI48dib7GCtxtqBI/B8hS4QumxCHGR2lET7p
      9SpJTHdBzvtqvBWdtuEwwCT5YmvkT2O0W3pEVkMCaJp3Ih7c8j+DxS2h1fkS1Qoy
      iZCBV1H+rfbCNUj8fDczv6Ftaoe4N4chpqHZqTrAVvK3qseQuuDqaUbWuCf/SyyI
      Zg5IGYKzg4M2L7ah4KoJKIX5miVhoo6UwxXjrHn6g9oCB9T6SwpTc307I3nZC6+T
      yfth6vGW1BickkL9z4CBC/VSJPdbRvMtaZWZg7iMzzKlkYqcA9IxOgZlISCpI86r
      FHKVyyllvg6ocKFY2r2fYFG6JX3kYa72Y7k0AZX6HpHL2q4O+DpSR+HpI6v3O8PB
      u3s22UYNDvm1inusoVZgjawEHN5pD9Er4iJ1gimtPNK8eDhWyF22cN00kdM1MRs6
      fFIBLXm3S8hNxAYRPO0aYg==
      -----END CERTIFICATE-----`,
};

/***********************************************************************************************
export
***********************************************************************************************/

export default conf;
