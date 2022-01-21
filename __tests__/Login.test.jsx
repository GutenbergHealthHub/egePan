// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

/***********************************************************************************************
imports
***********************************************************************************************/

import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { renderWithRedux } from "../__utils__/render";

import LoginScreen from "../src/screens/login/loginScreen";
import LandingScreen from "../src/screens/login/landingScreen";
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
    // eslint-disable-next-line camelcase
    const { UNSAFE_getByType, container, getByTestId } = renderWithRedux(
      <LandingScreen
        navigation={fakeNavigation}
        actions={{
          requestCredentials: () =>
            container.props.store.dispatch({
              type: "REQUEST_CREDENTIALS_SUCCESS",
              subjectId: "1234567",
            }),
        }}
      />
    );

    // hits the button "Navigate to Login Screen"
    expect(container.props.store.getState().Login.loggedIn).not.toBeTruthy();
    const instance = UNSAFE_getByType(LandingScreen);
    fireEvent.press(getByTestId("registerButton"));

    expect(instance.props.navigation.navigate).toHaveBeenCalled();
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
