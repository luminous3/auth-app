import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Header } from './components/common'
import { config } from '../firebaseConfig'

class App extends Component {
  constructor(props) {
    super(props)

    firebase.initializeApp(config)
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>My App</Text>
      </View>
    )
  }
}

export default App
