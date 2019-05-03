import React, {Component} from 'react'
import {
         StyleSheet, View,
         Text, Image, StatusBar,
         TouchableWithoutFeedback,
         SafeAreaView, Keyboaed,
         TouchableOpacity,
         KeyboardAvoidingView} from 'react-native'

import { Container, Header, Content, Item, Input, Icon ,Button } from 'native-base';
import SignUp from './SignUp'
import firebase from 'react-native-firebase'
import Home from './Home'




export default class App extends Component {
    constructor(props) {
        super(props);
        this.state =({
           email: '',
           password: ''
        });
    }
    
   
    
    loginUser = (email, password) => {
      try {
         firebase.auth().signInWithEmailAndPassword(email, password)
         .then(function(user) {
              console.log(JSON.stringify(user));
         });
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
                      <Image style={styles.logo} source={require('../Images/LogoSplash.png')}/>
                      <Text style={styles.title}>Account Information</Text>
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
                                 onPress={()=> this.loginUser(this.state.email, this.state.password)}
                             >
                             <Text style={{color:'white', fontSize:18,textAlign:'center'}}>LogIn</Text>
                         </Button>
                         <View style={{flexDirection:'row', justifyContent:'center', marginTop:20}}>
                            <Text style={{color:'rgb(32, 53, 70)', fontSize:18,textAlign:'center'}}>Don't have account?</Text>
                            <Text style={{color:'tomato', fontSize:18,textAlign:'center', marginLeft:5, fontWeight:'bold'}}
                                  onPress={()=> this.props.navigation.navigate('SignUp')}
                            >SignUp</Text>
                         </View>
                            

                 
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
      marginBottom:100
 },
 logo: {
     width:150,
     height:150
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
     backgroundColor:'rgba(32, 57, 70,1)',
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


