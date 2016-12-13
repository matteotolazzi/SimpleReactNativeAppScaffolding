import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Menu extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<View style={styles.main}>
				<Text>
					Side Menu
				</Text>
			</View>
		)
	}
}

export default Menu

const styles = StyleSheet.create({
	main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
	}
})
