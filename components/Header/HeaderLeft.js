import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

const HeaderLeft = (props) => {
  return (
    <View style={props.style}>
      <TouchableHighlight onPress={() => props.openSideMenu()}>
        <Text>
          Click me to open/close Side Menu
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default HeaderLeft
