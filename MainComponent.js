import React, { Component} from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

class MainComponent extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.openSideMenu()}
        style={styles.main}
        >
        <Text>
          Click me to open/close Side Menu
        </Text>
      </TouchableHighlight>
    )
  }
}

export default MainComponent


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
