import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const HeaderRight = (props) => {
  return (
    <View style={props.style}>
      <Icon style={styles.info} name='info-circle' size={25}/>
    </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({
  info: {}
})
