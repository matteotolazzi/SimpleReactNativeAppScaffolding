import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class SubMenu extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text>
          SubMenu
        </Text>
      </View>
    )
  }
}

export default SubMenu
