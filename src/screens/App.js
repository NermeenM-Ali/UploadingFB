import React, {Component} from 'react'
import {View} from 'react-native'
import Splash from './Splash'
import Login from './Login'
import AppNavigator from './index'

export default class App extends Component {
  
    render() {
        return (<AppNavigator/>)
    }
}

