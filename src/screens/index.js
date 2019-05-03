import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Splash from './Splash'
import Login from './Login'
import SignUp from './SignUp'
import CameraScreen from './CameraScreen'
import Home from './Home'
import Upload from './Upload'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions : {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions : {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions : {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions : {
      header: null
    }
  },
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions : {
      header: null
    }
  },
  Upload: {
    screen: Upload,
    navigationOptions : {
      header: null
    }
  }, 
    AboutUs: {
      screen: AboutUs,
      navigationOptions : {
        header: null
      }
    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions : {
        header: null
      }
    }

    })  


  

export default createAppContainer(AppNavigator)