import React, {Component} from 'react'
import {TouchableHighlight, View, Text} from 'react-native'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <View style={this.props.style.body}>
        <Text>
          Body
        </Text>
      </View>
    )
  }
}

export default Home
