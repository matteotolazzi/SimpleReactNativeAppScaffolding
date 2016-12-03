import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'
import Drawer from 'react-native-drawer'
import MainComponent from './MainComponent'
import ControlPanel from './ControlPanel'

export default class SimpleSideMenu extends Component {
  render() {
    return (
      <Drawer
        type='static'
        content={<ControlPanel />}
        openDrawerOffset={0.5}
        ref={(ref) => this._drawer = ref}
        styles={drawerStyle}
        tapToClose={true}
        >
        <StatusBar hidden={true}/>
        <MainComponent openSideMenu={() => this._drawer.open()}/>
      </Drawer>
    )
  }
}

AppRegistry.registerComponent('SimpleSideMenu', () => SimpleSideMenu)

const drawerStyle = {
  main: {
    backgroundColor: 'red'
  }
}
