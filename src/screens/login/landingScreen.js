
// (C) Copyright IBM Deutschland GmbH 2021.  All rights reserved.

/***********************************************************************************************
imports
***********************************************************************************************/

import React, { Component } from 'react'
import { Text, Button, Input, CheckBox} from 'react-native-elements'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import config from '../../config/configProvider'
import Banner from '../../components/banner/banner'
import Spinner from '../../components/spinner/spinner'
import ScrollIndicatorWrapper from '../../components/scrollIndicatorWrapper/scrollIndicatorWrapper'
import theme from '../../theme/theme'

/***********************************************************************************************
component:
renders the landing-screen
***********************************************************************************************/

class LandingScreen extends Component {

	/**
	* @constructor
	* @param  {object}    props
	* @param  {object}    props.navigation the navigation object provided by 'react-navigation'
	*/
	constructor(props) {
		super(props)
		this.state = {checked: false}
		this.handleCheck = this.handleCheck.bind(this)
	}

	handleCheck() {
		this.setState(prevState => ({...prevState, checked: !prevState.checked}))
	}

	render() {
		return (
			<View style={localStyle.wrapper}>
				
				{/* loading spinner */}
				<Spinner visible={this.props.loading} />

				{/* banner */}
				<Banner 
					nav={this.props.navigation} 
					title={config.text.login.landing.title}
					subTitle={config.text.login.landing.subTitle}
					noWayBack
					noMenu
				/>

				{/* scrollIndicator */}
				<View style={{ ...localStyle.flexi, ...localStyle.wrapper }}>
					<ScrollIndicatorWrapper
						contentData={
							<View style={localStyle.wrapper}>
								
								{/* top elements title & text */}
								<View style={localStyle.top}>
									<Text style={localStyle.titleText}>{config.text.login.landing.welcomeTitle}</Text>
									<Text style={localStyle.infoText}>{config.text.login.landing.text}</Text>
								</View>

								{/* bottom login button */}
								<View style={localStyle.bottom}>
									<CheckBox
										title="Datenschutzbestimmungen akzeptieren"
										checked={this.state.checked}
										onPress={this.handleCheck}
										containerStyle={localStyle.checkBoxContainer}
									/>
									<TouchableOpacity
										activeOpacity={this.state.checked ? 0.2 : 1}
										style={this.state.checked ? localStyle.button : [localStyle.button, {backgroundColor: theme.colors.accent1}] }
										onPress={() => {
											if (this.state.checked) this.props.actions.requestCredentials();	
										}}
										accessibilityLabel={config.text.login.landing.buttonText}
										accessibilityRole={config.text.accessibility.types.button}
										accessibilityHint={config.text.accessibility.loginHint}
									>
										<Text style={localStyle.buttonLabel}>
											{config.text.login.landing.buttonText}
										</Text>
									</TouchableOpacity>
									{/* Input to manually log in */}
									<View style={localStyle.inputWrapper}>
										<Input
											containerStyle={localStyle.input}
											inputContainerStyle={localStyle.inputContainer}
											inputStyle={localStyle.textInput}
											renderErrorMessage={false}
											placeholder={config.text.login.studyIdHint}
											value={this.props.manualId}
											onChangeText={this.props.actions.setId}
											errorMessage={this.props.loginError ? config.text.login.errorUserGeneric : null}
											accessibilityLabel={config.text.login.studyIdHint}
											accessibilityHint={config.text.accessibility.loginManuallyHint}
											/>
										<Button
											type="clear"
											title={config.text.login.submit}
											titleStyle={localStyle.loginButton}
											onPress={() => this.props.actions.sendCredentials(this.props.manualId)}
											accessibilityLabel={config.text.login.submit}
											accessibilityRole={config.text.accessibility.types.button}
											accessibilityHint={config.text.accessibility.submitHint}
											/>
									</View>
								</View>
							</View>
						}
					/>
				</View>
			</View>
		)
	}
}

/***********************************************************************************************
localStyle
***********************************************************************************************/

const localStyle = StyleSheet.create({
	wrapper: {
		height: '100%',
		flexDirection: 'column',
		backgroundColor: config.theme.values.defaultBackgroundColor
	},

	flexi: {
		flex: 1,
	},

	top: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: config.appConfig.scaleUiFkt(35),
		marginBottom: config.appConfig.scaleUiFkt(35),
	},

	bottom: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 36,
		height: '100%',
		marginTop: 20,
	},

	infoText: {
		marginTop: config.appConfig.scaleUiFkt(20),
		marginBottom: config.appConfig.scaleUiFkt(20),
		marginLeft: config.appConfig.scaleUiFkt(40),
		marginRight: config.appConfig.scaleUiFkt(40),
		textAlign: 'center',
		alignSelf: 'center',
		color: config.theme.colors.accent4,
		...config.theme.fonts.body,
	},

	titleText: {
		width: '80%',
		textAlign: 'center',
		alignSelf: 'center',
		...config.theme.fonts.header2,
	},

	checkBoxContainer: {
		width: '80%',
		alignSelf: 'center',
		borderRadius: 50,
		marginBottom: 10,
		backgroundColor: 'white',
		borderColor: config.theme.colors.primary
	},

	button: {
		...config.theme.classes.buttonPrimary,
		bottom: 0,
		paddingTop: config.appConfig.scaleUiFkt(15),
		paddingBottom: config.appConfig.scaleUiFkt(15),
		paddingLeft: config.appConfig.scaleUiFkt(15),
		paddingRight: config.appConfig.scaleUiFkt(15),
		width: '80%',
	},

	buttonLabel: {
		...config.theme.classes.buttonLabel
	},
	inputWrapper: {
		flexDirection: 'row',
		width: '80%',
		alignSelf: 'center',
		alignItems: 'center',
		borderColor: config.theme.colors.secondary,
		borderRadius: 50,
		borderWidth: 1,
		marginTop: 10,
		paddingHorizontal: 10,
	},
	input: {
		width:'80%',
	},
	textInput: {
		fontSize: config.theme.classes.button.fontSize
	},
	inputContainer: {
		borderBottomWidth: 0
	},
	loginButton: {
		fontSize: config.theme.classes.button.fontSize
	}

})

/***********************************************************************************************
export
***********************************************************************************************/

export default LandingScreen
