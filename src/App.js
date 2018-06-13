import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Button } from 'react-native'
import { Header } from './components/common'
import { config } from '../firebaseConfig'
import LoginForm from './components/LoginForm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
    }

    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true,
        })
      } else {
        this.setState({
          loggedIn: false,
        })
      }
    })
  }

  renderContent() {
    if (this.state.loggedIn) {
      return <Button title="Log out" />
    }

    return <LoginForm />
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
