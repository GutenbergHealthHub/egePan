
// (C) Copyright IBM Deutschland GmbH 2020.  All rights reserved.

// this file provides methods concerning the communication with the backend before the user
// is logged in.

/***********************************************************************************************
imports
***********************************************************************************************/

import axios from 'axios'
import config from '../../config/configProvider'

/***********************************************************************************************
client
***********************************************************************************************/

/**
 * @param  {string} userId the id used to identify the user
 */
export const login = async userId => {
	return axios.get(
		config.appConfig.endpoints.login + userId,
	)
}

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

/**
 * @module greeter
 */
export default { login, requestCredentials }
