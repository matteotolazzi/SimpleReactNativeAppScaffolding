import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Navigator
} from 'react-native'
import Drawer from 'react-native-drawer'
import Home from './components/Home/Home.js'
import Menu from './components/Menu/Menu.js'
import Header from './components/Header/Header.js'

export default class AugMenu extends Component {
  render() {
    return (
      <Drawer
        type='static'
        content={<Menu />}
        openDrawerOffset={0.5}
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        >
        <StatusBar hidden={true}/>
        <Header openSideMenu={() => this._drawer.open()} style={styles.header}/>
        {/* <Home style={{...styles}}/> */}
        <Navigator
          initialRoute={{
            id: 'Home',
            title: 'Home',
            index: 0,
            style: styles
          }}
          renderScene={(route, navigator) => {
            return <Home style={{...styles}}/>
          }}
        />
      </Drawer>
    )
  }
}

AppRegistry.registerComponent('AugMenu', () => AugMenu)

const styles = StyleSheet.create({
  header: {
    flex: 1/10
  },
  body: {
    flex: 9/10,
    borderWidth: 1,
    borderColor: 'gray',
    // the next is needed to cover side panel content
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
