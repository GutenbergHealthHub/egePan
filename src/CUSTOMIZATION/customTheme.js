// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

// the object provided by this file will be merged with the return-object of the module "theme.js".
// should you want to update a value from that file (for example the primary color of the theme),
// than copy the content of 'src/theme/theme.js' (as described in that file) below the marked comment
// at the end of this file. this ensures that you do not need to touch the rest of the source code and
// because of that, you won't loose the ability to merge updated from the repository.

// necessary imports
import customAppConfig from "./customAppConfig";
import originalAppConfig from "../config/appConfig";

// this adds a needed function to your customAppConfig.js should you not have added it.
if (!customAppConfig.scaleFontsFkt || !customAppConfig.scaleUiFkt) {
  customAppConfig.scaleFontsFkt = originalAppConfig.scaleFontsFkt;
  customAppConfig.scaleUiFkt = originalAppConfig.scaleUiFkt;
}

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
const defaultUiSettings = {
  /** set to TRUE if you want ot use your own logo in the banner-component. for this to
   * work, you need to place a new logo.png file into 'src/CUSTOMIZATION/images'
   */
  useCustomLogo: true,

  /** set to TRUE if the banner component should use a full-width background, that is rendered
   * behind the app-logo. if set to false, the banner will display its own background color instead.
   * the colors for the banner can be changed through the theme
   */
  useBannerBackground: false,

  /** set to TRUE if you want ot use your own logo in the banner-component. for this to
   * work, you need to place a new defaultLogoBackground.png file into 'src/CUSTOMIZATION/images'
   */
  useCustomLogoBackground: false,

  /** ui-option
	 * allows the use of an scroll wrapper that permanently shows the scroll indicator
	(this is only used on the screens, not in the modals) */
  allowScrollIndicators: true,
};

// default colors
/*-----------------------------------------------------------------------------------*/

const defaultColors = {
  /** the primary color of the scheme. most buttons are of this color by default, as is the top banner */
  primary: "#376991",

  /** highlighting for a not fully completed questionnaire (yellow-ish by default) */
  startedButNotFinished: "#FFC107",
  secondary: "#a5353e",

  /** highlighting for completed questionnaires, as well as some icons (green-ish by default) */
  success: "#006864",

  /** mostly used for "abort"-buttons and error messages (red-ish by default) */
  alert: "#EB576A",

  /** the color primarily used for disabled elements */
  accent1: "#919191",

  /** a more subtle grey which is used for borders, backgrounds and icons */
  accent2: "#DADADA",

  /** a even more subtle grey - also used for borders and backgrounds */
  accent3: "#F8F9FA",

  /** a relatively dark grey, used for most texts instead of black (more eye-friendly) */
  accent4: "#1F2532",

  /** just plain white */
  white: "#FFFFFF",
};

// fonts
/*-----------------------------------------------------------------------------------*/

// The following object contains all font-related information the application is currently
// using. The font-names referenced here come from the imported fonts.
// They are located at '../../assets/fonts. The directory of the fonts can be updated by changing
// the file 'react-native.config.js' in the root directory.

// The numeric parameters are altered by the "scaleFontsFkt" function  located in 'appConfig.js'
// The reason for this is to have an additional method to dynamically alter font- & layout-sizes.
// The function call can be removed here, if there is no necessity for it - alternatively the function
// itself can be altered in 'appConfig.js'.

// default values
/*-----------------------------------------------------------------------------------*/

// the following values represent different default values that are used throughout the application.

/** default values for various properties used throughout the application */
const defaultValues = {
  // background color
  defaultBackgroundColor: defaultColors.white,
  defaultParagraphTextColor: defaultColors.accent4,
  defaultTitleTextColor: defaultColors.accent4,

  // banner
  defaultBannerBackgroundColor: defaultColors.white,
  defaultBannerButtonColor: defaultColors.secondary,
  defaultBannerTitleColor: defaultColors.accent4,
  defaultBannerSubTitleColor: defaultColors.accent4,
  defaultStatusBarStyleIos: "dark-content",
  defaultStatusBarStyleAndroid: "dark-content",
  defaultStatusBarAndroidBackgroundColor: "#EFEFEF",

  // loading-spinner
  defaultSpinnerBackgroundColor: defaultColors.primary,
  defaultSpinnerColor: defaultColors.secondary,

  // buttons
  defaultButtonAlignSelf: "center",
  defaultButtonBorderRadius: 50,
  defaultButtonBorderWidth: 0,
  defaultButtonPadding: 15,
  defaultButtonWidth: "100%",

  // survey-screen
  defaultSurveyItemBackgroundColor: defaultColors.white,
  defaultSurveyItemTitleColor: defaultColors.accent4,
  defaultSurveyIconUntouchedColor: defaultColors.secondary,
  defaultSurveyIconTouchedColor: defaultColors.startedButNotFinished,
  defaultSurveyIconCompletedColor: defaultColors.success,

  // checkIn-screen
  defaultCheckInListViewTitleColor: defaultColors.white,
  defaultCheckInListViewSubTitleColor: defaultColors.accent3,
  defaultContainerUntouchedBackgroundColor: defaultColors.secondary,
  defaultContainerTouchedBackgroundColor: defaultColors.startedButNotFinished,
  defaultContainerCompletedBackgroundColor: defaultColors.success,
  defaultContainerUntouchedBorderColor: defaultColors.secondary,
  defaultContainerTouchedBorderColor: defaultColors.startedButNotFinished,
  defaultContainerCompletedBorderColor: defaultColors.success,
  defaultTimeSuccessColor: defaultColors.success,
  defaultActiveTile: defaultColors.primary,
  defaultDisabledTile: defaultColors.accent2,
  defaultSendQuestionnaireButtonBackgroundColor: defaultColors.success,

  // list-item (about screen)
  defaultListItemIconColor: defaultColors.success,
  defaultListItemBackgroundColor: defaultColors.white,

  // list-link (about screen)
  defaultListLinkIconColor: defaultColors.secondary,
  legalListLinkIconColor: defaultColors.primary,
  defaultListLinkBackgroundColor: defaultColors.white,

  // modal
  defaultModalContentBackgroundColor: defaultColors.white,
  defaultModalTitleColor: defaultColors.accent4,
  defaultModalContentTextColor: defaultColors.accent4,
  defaultModalBottomBarBackgroundColor: defaultColors.white,
  defaultModalSeparatorBackgroundColor: defaultColors.accent2,
  defaultModalBorderColor: defaultColors.white,
  defaultSeparatorColor: defaultColors.accent2,
  defaultModalBorderRadius: 10,

  // scrollIndicator
  defaultScrollIndicatorBackgroundColor: defaultColors.secondary,
  defaultScrollIndicatorIconColor: defaultColors.white,
};

// stylesheet-objects
/*-----------------------------------------------------------------------------------*/

// the following are default stylesheet-objects that are used throughout the application.
// individual changes to it (depended on the component thats using it) can be found in
// the local styleSheet variable.

//  buttons

const button = {
  borderRadius: defaultValues.defaultButtonBorderRadius,
  borderWidth: defaultValues.defaultButtonBorderWidth,
  padding: defaultValues.defaultButtonPadding,
  alignSelf: defaultValues.defaultButtonAlignSelf,
  width: defaultValues.defaultButtonWidth,
};

const buttonPrimary = {
  ...button,
  backgroundColor: defaultColors.primary,
  borderColor: defaultColors.primary,
};

const buttonAlert = {
  ...button,
  backgroundColor: defaultColors.alert,
  borderColor: defaultColors.alert,
};

const buttonLabel = {
  color: defaultColors.white,
  alignSelf: "center",
  textAlign: "center",
};

/***********************************************************************************************
export
***********************************************************************************************/

export default {
  /** the colors used in the theme */
  colors: defaultColors,

  /** default ui-settings */
  ui: defaultUiSettings,

  /** default values for various properties used throughout the application */
  values: defaultValues,

  /** default stylesheet-objects used throughout the application */
  classes: {
    button,
    buttonAlert,
    buttonPrimary,
    buttonLabel,
  },
};
