import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class ControlPanel extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<View style={styles.main}>
				<Text>
					Control Panel
				</Text>
			</View>
		)
	}
}

export default ControlPanel

const styles = StyleSheet.create({
	main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
	}
})
