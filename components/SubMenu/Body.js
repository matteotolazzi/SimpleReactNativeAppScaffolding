import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Body extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text>
          Body
        </Text>
      </View>
    )
  }
}

export default Body
