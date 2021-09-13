// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

// this file provides methods concerning the communication with the backend before the user
// is logged in.

/***********************************************************************************************
imports
***********************************************************************************************/

import axios from "axios";
import config from "../../config/configProvider";

/***********************************************************************************************
client
***********************************************************************************************/

/**
 * @param  {string} subjectId the id used to identify the user
 */
const login = async (subjectId) =>
  axios.get(config.appConfig.endpoints.login + subjectId);

/**
 * request userId (and session data) from api
 */
export const requestCredentials = async => {
	return axios.get(
		config.appConfig.endpoints.login
	)
}

/***********************************************************************************************
export
***********************************************************************************************/

export default { login, requestCredentials }
