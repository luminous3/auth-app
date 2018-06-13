import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Button } from 'react-native'
import { Header, Spinner } from './components/common'
import { config } from '../firebaseConfig'
import LoginForm from './components/LoginForm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null,
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
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()} title="Log out" />
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
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
