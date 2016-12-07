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
        <Body style={styles.body}/>
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
