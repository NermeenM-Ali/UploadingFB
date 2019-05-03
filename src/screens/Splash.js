import React, {Component} from 'react'
import {Text, View, StyleSheet,Image,StatusBar} from 'react-native'
import * as Progress from 'react-native-progress';
import Login from './Login'
import { Button } from 'native-base';
import { Switch } from 'react-native-gesture-handler';

export default class Splash extends Component {
    Switch =()=> {
        setTimeout(()=>{
            this.props.navigation.navigate('Login')
       }, 3000);
    } 
    render() {
        return(
            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.logoContainer}>
                    <Image style={StyleSheet.logo} source={require('../Images/logo.jpg')}/>
                    <Progress.Bar progress={0.3} width={400} animated borderWidth={2} indeterminate={true} borderColor='gray' color='#C0392B' size={70}  style={{marginTop:30}}  >
                    {this.Switch()}
                    </Progress.Bar>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'rgb(32, 57, 70)',
        

    },
    logoContainer: {
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         marginBottom:100
    },
    logo: {
        width:150,
        height:200,
        marginBottom:10
    },
    title: {
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
        color:'#CD6155',
        marginTop: 10,
        opacity:0.9,
        
    },
})  
