// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

/***********************************************************************************************
imports
***********************************************************************************************/

import React from "react";
import { fireEvent, waitFor } from "@testing-library/react-native";
import { renderWithRedux } from "../__utils__/render";

import App from "../App";
import LoginScreen from "../src/screens/login/loginScreen";
import LandingScreen from "../src/screens/login/landingScreen";
import createAppNavigator from "../src/navigation/appNavigator";
import CheckInScreen from "../src/screens/checkIn/checkInScreen";
import LoginContainer from "../src/screens/login/loginContainer";

/***********************************************************************************************
tests
***********************************************************************************************/

describe("LOGIN RENDERING:", () => {
  // renders the LoginContainer and matches it to its snapshot
  it("<LoginContainer /> can be rendered", () => {
    // just a fake navigation object
    const fakeNavigation = {
      navigate: jest.fn(),
      state: { routeName: "Login" },
    };

    // renders the LoginContainer
    const tree = renderWithRedux(
      <LoginContainer navigation={fakeNavigation} />
    );

    expect(tree).toMatchSnapshot();
  });

  // checks if the LandingScreen can be rendered and matches it to its snapshot
  it(`<LandingScreen /> can be rendered`, () => {
    // renders the landing page
    const tree = renderWithRedux(
      <LandingScreen actions={{ setId: jest.fn() }} />
    );

    // checks if the screen matches the snapshot
    expect(tree).toMatchSnapshot();
  });

  // checks if there is a button on the LandingScreen that can be used to navigate to the LoginScreen.
  // only uses fake navigation to check if the event was triggered
  it(`<LandingScreen /> can be used to navigate to LoginScreen`, async () => {
    // navigation dummy - used to check if the navigate event occurs
    const fakeNavigation = { navigate: jest.fn() };

    // renders the landing page
    const tree = renderWithRedux(
      <LandingScreen
        navigation={fakeNavigation}
        actions={{
          requestCredentials: () =>
            tree.container.props.store.dispatch({
              type: "REQUEST_CREDENTIALS_SUCCESS",
              subjectId: "1234567",
            }),
        }}
      />
    );

    // hits the button "Navigate to Login Screen"
    fireEvent.press(tree.getByTestId("tosButton"));
    expect(
      tree.container.props.store.getState().Login.loggedIn
    ).not.toBeTruthy();
    fireEvent.press(tree.getByTestId("registerButton"));

    await waitFor(() =>
      expect(tree.container.props.store.getState().Login.loggedIn).toBeTruthy()
    );
  });

  // tests if the LoginScreen can be rendered - again, with a false navigation object
  it(`<LoginScreen /> can be rendered`, () => {
    // navigation dummy - used to check if the navigate event occurs
    const fakeNavigation = { navigate: jest.fn() };

    // renders the landing page
    const tree = renderWithRedux(
      <LoginScreen
        navigation={fakeNavigation}
        actions={{ setId: () => jest.fn() }}
      />
    );

    // checks if the screen matches the snapshot
    expect(tree).toMatchSnapshot();
  });
});

describe("LOGIN Handling:", () => {
  // tests if the flow from the landing screen to the checkin screen can be executed.
  // the test can use the login-automation defined in "config.appConfig.automateQrLogin".
  // if that is not possible the function "scanSuccess" will be executed directly.
  it(`User can load the app, login and then trigger the automatic questionnaire download`, async () => {
    // creates an actual navigator
    const Navigator = createAppNavigator();
    // renders the app
    // eslint-disable-next-line camelcase
    const { getByTestId, store, UNSAFE_getByType } = renderWithRedux(
      <Navigator>
        <App />
      </Navigator>
    );

    // as we start with an empty state, the app will navigate the user to the LandingScreen...
    const { instance } = UNSAFE_getByType(LandingScreen);

    // ...which should be noted in the navigation-object:
    expect(
      instance.props.navigation.state.routeName === "Landing"
    ).toBeTruthy();
    // accept terms of service to be able to register
    fireEvent.press(getByTestId("tosButton"));
    // click register
    fireEvent.press(getByTestId("registerButton"));
    // user should the be logged in
    await waitFor(() =>
      expect(store.getState().Login.loggedIn).toBeTruthy()
    ).then(async () => {
      // user should be redirected to the checkIn-screen
      expect(UNSAFE_getByType(CheckInScreen)).toBeTruthy();
      // the categories should be loaded
      await waitFor(() =>
        expect(store.getState().CheckIn.categoriesLoaded).toBeTruthy()
      );
    });
  });
});
