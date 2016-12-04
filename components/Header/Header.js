import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import HeaderRight from './HeaderRight.js'
import HeaderLeft from './HeaderLeft.js'
import HeaderCenter from './HeaderCenter.js'

class Header extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <View style={[this.props.style, styles.main]}>
        <HeaderLeft style={styles.headerLeft} openSideMenu={this.props.openSideMenu}/>
        <HeaderCenter style={styles.headerCenter}/>
        <HeaderRight style={styles.headerRight}/>
      </View>
    )
  }
}

export default Header

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row'
  },
  headerLeft: {
    flex: 1/3,
    backgroundColor: 'green'
  },
  headerCenter: {
    flex: 1/3,
    backgroundColor: 'yellow'
  },
  headerRight: {
    flex: 1/3,
    backgroundColor: 'brown'
  }
})
