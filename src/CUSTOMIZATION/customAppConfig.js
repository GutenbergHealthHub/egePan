// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

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
const baseUriProductive = "https://egepan.izks-mainz.de/api/";

// development-base-backend-uri
// const baseUriDevelopment = "https://egepan-dev.izks-mainz.de/api/";
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
  FCMToken: "@COMPASS_STORE:fcm_token",

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
    login: `${__DEV__ ? baseUriDevelopment : baseUriProductive}participant/`,

    /** rest:
     * endpoint to get the user-profile */
    getUser: `${__DEV__ ? baseUriDevelopment : baseUriProductive}participant/`,

    /** rest:
     * endpoint for a special report */
    report: `${__DEV__ ? baseUriDevelopment : baseUriProductive}queue/`,

    /** rest:
     * endpoint to post the questionnaire to */
    sendQuestionnaire: `${
      __DEV__ ? baseUriDevelopment : baseUriProductive
    }queue/`,

    /** rest:
     * endpoint to receive the questionnaire */
    getQuestionnaire: `${
      __DEV__ ? baseUriDevelopment : baseUriProductive
    }questionnaire/`,

    /** rest:
     * endpoint to receive the questionnaire */
    updateToken: `${
      __DEV__ ? baseUriDevelopment : baseUriProductive
    }participant/update-device-token/`,
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
    const scaleFonts = true;

    // the base parameter for the font-scaling
    // (device width / guidelineBaseWidthFontScaling * fontsize)
    const guidelineBaseWidthFontScaling = 400;

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
  scaleUiFkt: (size, rescaleValue = 1) => {
    // scales certain ui parts dynamically down for smaller devices
    const scaleUi = true;

    // the base parameter for the ui-scaling
    // (device width / guidelineBaseWidthUiScaling * size)
    const guidelineBaseWidthUiScaling = 430 / rescaleValue;

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
      MIIGSTCCBDGgAwIBAgIJALS94tmbCBH3MA0GCSqGSIb3DQEBCwUAMIG6MQswCQYD
      VQQGEwJERTEYMBYGA1UECAwPUmhlaW5sYW5kLVBmYWx6MQ4wDAYDVQQHDAVNYWlu
      ejElMCMGA1UECgwcVW5pdmVyc2l0w4PCpHRzbWVkaXppbiBNYWluejEdMBsGA1UE
      CwwUR3V0ZW5iZXJnIEhlYWx0aCBIdWIxEzARBgNVBAMMCmRlLnVtbS5naGgxJjAk
      BgkqhkiG9w0BCQEWF2doaEB1bmltZWRpemluLW1haW56LmRlMB4XDTIxMTEwMjE0
      NDQ1NloXDTIyMTEwMjE0NDQ1NlowgboxCzAJBgNVBAYTAkRFMRgwFgYDVQQIDA9S
      aGVpbmxhbmQtUGZhbHoxDjAMBgNVBAcMBU1haW56MSUwIwYDVQQKDBxVbml2ZXJz
      aXTDg8KkdHNtZWRpemluIE1haW56MR0wGwYDVQQLDBRHdXRlbmJlcmcgSGVhbHRo
      IEh1YjETMBEGA1UEAwwKZGUudW1tLmdoaDEmMCQGCSqGSIb3DQEJARYXZ2hoQHVu
      aW1lZGl6aW4tbWFpbnouZGUwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoIC
      AQCqG7EjTJxmzX95TBGsDunj68ieC/NOAR2tCa6gVUtMnldsOKcYqJmz7NzDNFaY
      QE0XtyNqaM8MYzqKxct6kGYMbHlicrg1hsuj0LN2lsMa8r5DddcLd9mmUzK9BRzb
      Gia31KtYNrmVLxTr6HqiWB1heclHl2YOY34Qk8Z4RK7vGOZ9LTtJC/cz0p1wOEPx
      jjg23Fa6a/x1QH140wTHqNDZQUiTkzjCSuNgyzTsGkV8mggCe0pDyHKIeZp0JYqn
      /Yd9Rl/BVIuwq3gFAjPcHHhCV6/PRlfEsW7XVeYYGvQoPKFDBygV5KDDemL12FB/
      3eH4befqW1X7ny9jBJpE0vPdKyPBRg9Y+RRH83UV6b5O4J9z7UKt71Qv3/vhOuMC
      2kNjLCHxSLb++6ObZtYf5Yr8PNs/HTSrDXkAuYMQ61LSmpamewoRBxk+SLkOEoqj
      A4mAyQGuO9HbAqPgHrbEL4bGoC9jJ5qw+YsOdP+ayI9I4vE2Y2RBQrcYax4I9I4k
      UO3WF42u6/I740+zHcqectZvJsYJSbVqOmjeuMWrJxb1Rf/9K2KCqp89rn/NnWXh
      OcaERUWYqYc0zItJ/5/UgM8vq87IOTIu1frdgb6rU+SsYhNXZUtCw/WSIelYHS/p
      BXamH5OOIsRZMO8qOoKDpYkSM45qr6bmP8U1RhsIuvq4KwIDAQABo1AwTjAdBgNV
      HQ4EFgQU5+B8aEh7GnwUg0YBY+EAL1xbLc0wHwYDVR0jBBgwFoAU5+B8aEh7GnwU
      g0YBY+EAL1xbLc0wDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEApOna
      PrPKvGX+k6D4Kw1Pen3U5P3a1k4RqP+W1WIQWy/fNlllT5B+EPgmNyPNxzs4QmiQ
      PhrTNSy++ZQ/k2M7Ckvo1JO3HU9XH01nzss3dKNYzZro41VerUMArm60s13lB7Yx
      JTFE4MetNGdwmhndMhG+xDCheYAJ6auDVJfoib0yeXURvIevMLULSFk4CY2UKZaE
      OBNww8W8g8E+JXhY3Nmj2dRiks/wF/02HAxyi4wsW/Abk0MHGBA864Xzx00atvwN
      Zl/0DouLdeJF8Qe5FiCiMEOMXXpLTlRy8mMfzocUQ3fxANmkD6PnUG/loxevx8ZT
      cMtzvYd29fLS81OPleR0+3ZNx3luDZFrRxpztTU/GNGpAAYnzk0lDg01Z1i12QXX
      MeeZQDpnh3KJQLt+goZDNDxe3LexZuTZkJZoAqVIoOWDcr0GkKuKD/+5S4aA7OQQ
      A2DRw+DVeHF7lZ/w8PTPtQb8s1Vwlbhi3WTxfgQkFIOdhuW/qEcN3xoYCf91dh+6
      YU38E4IkxWRcIjux2UJBZiTnkWfpYjh3ZLDL7jyrKEcxsJl1aW4sHLH8Nh2QsL1y
      XS+GP11zJce5q/Wp4iPt4pXjUaZCs0lEXEcATdP3k/5aCnRgw2g8wWfOCpNN8Lgl
      1Q4NWU5cjE+b8FhEmxC6SZQriQcXLQR5+ybtM3Y=
      -----END CERTIFICATE-----`,
};

/***********************************************************************************************
export
***********************************************************************************************/

export default conf;
