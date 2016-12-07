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
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: 'gray'
  },
  headerLeft: {
    flex: 1/5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerCenter: {
    flex: 3/5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerRight: {
    flex: 1/5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
