import React, {Component} from 'react'
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native'
import Header from '../../components/Header/Header.js'
import Body from '../../components/SubMenu/Body.js'

class Main extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <View style={styles.main}>
        <Header openSideMenu={this.props.openSideMenu} style={styles.header}/>
        <Body style={styles.submenu}/>
      </View>
    )
  }
}

export default Main


const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1/10,
    backgroundColor: 'yellow'
  },
  submenu: {
    flex: 9/10,
    backgroundColor: 'blue'
  }
})
