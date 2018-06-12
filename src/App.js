import React, { Component } from 'react'
import firebase from 'firebase'
import { View } from 'react-native'
import { Header } from './components/common'
import { config } from '../firebaseConfig'
import LoginForm from './components/LoginForm'

class App extends Component {
  constructor(props) {
    super(props)

    firebase.initializeApp(config)
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
