import React, {Component} from 'react'
import {
         StyleSheet, View,
         Text, Image, StatusBar,
         TouchableWithoutFeedback,
         SafeAreaView, Keyboaed,
         TouchableOpacity,
         KeyboardAvoidingView} from 'react-native'
 
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base';
import Home from './Home'
import firebase from 'react-native-firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBg3OUvR6hUvnr3s54SGl76W_pyxUc2Di8",
    authDomain: "rnmedical-fbd6c.firebaseapp.com",
    databaseURL: "https://rnmedical-fbd6c.firebaseio.com",
    projectId: "rnmedical-fbd6c",
    storageBucket: "rnmedical-fbd6c.appspot.com",
    messagingSenderId: "228480766381"
  };
  firebase.initializeApp(config);


  export default class SignUp extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',

        }
       
    }
 

    signUpUser = (email, password) => {
        try {
            
            if(this.state.password.length < 6) {
                alert("Please enter at least 6 characters");
            }
            
            firebase.auth().createUserWithEmailAndPassword(email, password);
            this.props.navigation.navigate('Home')
            
        } catch(error) {
            alert(error.toString());
        }
    };

   render() {
       return(
           <SafeAreaView style={styles.container}  >
                <StatusBar hidden />
                <View style = {styles.container}>
                   <View style={styles.logoContainer}>
                         <Image style={styles.logo} source={require('../Images/picS.png')}/>
                         
                   </View>
                   <View style={styles.infoContainer}>
                   <Container >
                        <Content> 
                            <Item rounded style={{marginBottom:5, borderColor:'rgb(32, 57, 70)'}}>
                                <Icon active name='ios-mail-unread' />
                                <Input placeholder='Please Enter Email' 
                                        keyboardType='email-address'
                                        keyboardAppearance='dark'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        returnKeyType='next'
                                        onSubmit={() => {
                                            Keyboard.dismiss()
                                        }}
                                        onChangeText = {(email)=> this.setState({email})}
                                />
                            </Item>
                            <Item rounded style={{borderColor:'rgb(32, 57, 70)'}}>
                                <Icon active name='md-pulse' />
                                <Input placeholder='Please Enter Password' 
                                       keyboardType='default'
                                       keyboardAppearance='dark'
                                       autoCapitalize='none'
                                       autoCorrect={false}
                                       secureTextEntry
                                       returnKeyType='done'
                                       onSubmit={() => {
                                        Keyboard.dismiss()

                                    }}
                                    onChangeText = {(password)=> this.setState({password})}
                                    
                                />
                            </Item>
                            <Button rounded style={styles.buttonContainer1}  
                                    onPress={()=>{
                                        this.signUpUser(this.state.email, this.state.password)
                                     }}
                                       
                                >
                                <Text style={{color:'white', fontSize:18,textAlign:'center'}}>SignUP</Text>
                            </Button>
                            
                        </Content>
                    </Container>
                     
                   
                   </View>
                   
                   </View>
           </SafeAreaView>
              
       )
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'white',
        

    },
    logoContainer: {
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         marginBottom:150
    },
    logo: {
        width:250,
        height:250
    },
    title: {
        fontSize: 18,
        textAlign:'center',
        color:'rgb(32, 53, 70)',
        marginTop: 5,
        opacity:0.9
    },
    infoContainer: {
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:300,
        padding:20,
        
        
    },
    buttonContainer1: {
        backgroundColor:"rgba(231,76,60,1)",
        marginTop:5,
        justifyContent:'center',
        alignItems:'center',
        height:55,
        width:435
    },
    buttonContainer2: {
        backgroundColor:'white',
        marginTop:5,
        justifyContent:'center',
        alignItems:'center',
        height:55,
        width:435
    },

})
