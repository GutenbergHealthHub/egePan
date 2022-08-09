/* eslint-disable react/destructuring-assignment */
// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

/***********************************************************************************************
initial state
***********************************************************************************************/

const initialState = {
  subjectId: null,
  session: null,
  loading: false,
  loggedIn: false,
  loginError: null,
  loginUnauthorized: false,
  manualId: null,
};

/***********************************************************************************************
action handlers
***********************************************************************************************/

const actionHandlers = {
  /**
   * set the temporary id for the manual login process
   * also reset error
   *
   * @param {object} state
   * @param {object} values
   */
  SET_ID: (state, values) => ({
    ...state,
    manualId: values.id,
    loginError: null,
  }),

  /**
   * start requesting credentials
   * @param {object} state
   * @param {object} values
   * @returns
   */
  REQUEST_CREDENTIALS_START: (state) => ({
    ...state,
    loading: true,
    loggedIn: false,
  }),

  /**
   * update user and session data if request was successful
   * @param {object} state
   * @param {object} values
   * @returns
   */
  REQUEST_CREDENTIALS_SUCCESS: (state, values) => ({
    ...state,
    loading: false,
    loggedIn: true,
    subjectId: values.subjectId,
    session: {
      ...state.session,
      ...values.session,
    },
  }),
  REQUEST_CREDENTIALS_FAIL: (state, values) => ({
    ...state,
    loading: false,
    loggedIn: false,
    loggedInError: values.error,
  }),

  /**
   * start of the login
   * @param  {object}	state redux state
   */
  SEND_CREDENTIALS_START: (state) => ({
    ...state,
    loading: true,
    loggedIn: false,
  }),

  /**
   * login success
   * @param  {object} state
   * @param  {object} values
   */
  SEND_CREDENTIALS_SUCCESS: (state, values) => ({
    ...state,
    subjectId: values.subject_Id,
    session: {
      ...state.session,
      ...values.session,
    },
    loggedIn: true,
    loading: false,
  }),

  /**
   * login error
   * @param  {object} state redux state
   * @param  {object} values values to be set
   */
  SEND_CREDENTIALS_FAIL: (state, values) => ({
    ...state,
    loginError: values.error.loginError,
    loginUnauthorized: values.error.loginUnauthorized,
    subjectId: null,
    loading: false,
  }),

  /**
   * just updates the subjectId
   * @param  {object} state redux state
   * @param  {object} values values to be set
   */
  UPDATE_SUBJECT_ID: (state, values) => ({
    ...state,
    subjectId: values.subjectId,
  }),

  /**
   * sets the session values from an earlier login
   * @param  {object} state redux state
   * @param  {object} values values to be set
   */
  LOADING_USER_FROM_CACHE: (state, values) => ({
    ...state,
    subjectId: values.lastSubjectId,
    session: {
      ...state.session,
      ...values.session,
    },
    loggedIn: true,
    loading: false,
  }),

  /**
   * logout
   * @param   {object} state redux state
   */
  LOGOUT: (state) => ({
    ...state,
    subjectId: null,
    session: null,
    loginError: null,
    loggedIn: false,
    loginUnauthorized: false,
  }),
};

/***********************************************************************************************
export
***********************************************************************************************/

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  if (actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action);
  }
  return state;
};
