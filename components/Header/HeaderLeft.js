import React from 'react'
import {View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const HeaderLeft = (props) => {
  return (
    <View style={props.style}>
      <TouchableHighlight onPress={() => props.openSideMenu()}>
        <Icon style={styles.navicon} name='navicon' size={40}/>
      </TouchableHighlight>
    </View>
  )
}

export default HeaderLeft


const styles = StyleSheet.create({
  navicon: {}
})
