import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Header } from './components/common'

class App extends Component {
  constructor(props) {
    super(props)

    firebase.initializeApp({
      apiKey: 'AIzaSyB29XsL5Obi-iDckCdQlPFihpjbtlRcUGw',
      authDomain: 'auth-42754.firebaseapp.com',
      databaseURL: 'https://auth-42754.firebaseio.com',
      projectId: 'auth-42754',
      storageBucket: 'auth-42754.appspot.com',
      messagingSenderId: '651977891614',
    })
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
