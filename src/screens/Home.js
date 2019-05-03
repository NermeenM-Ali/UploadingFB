import React, {Component} from 'react'
import {Text, View, StyleSheet,Image,StatusBar} from 'react-native'
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base';
import ActionButton from 'react-native-action-button';
import Upload from './Upload'
import CameraScreen from './CameraScreen'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
export default class Home extends Component {

  constructor(props) {
      super(props)
  }


    render() {
      //const {navigate}= this.props.navigation;
        return(
            <View style={styles.container} >
               <StatusBar hidden/>
                    <View style={styles.logoContainer}>
                    <Image source={require('../Images/med.png')} style={styles.logo}/>
                    </View>
                    <Container>
                      <Content>
                      <Button rounded style={{backgroundColor:'transparent', borderColor:'gray', borderRadius:30, borderWidth:2, width:400, margin:30}}
                              onPress={()=> {this.props.navigation.navigate('CameraScreen')} }
                      >
                       <Icon active name="md-camera" style={{color:'black'}} />
                       <Text style={styles.title}>Capture</Text>
                        </Button>
                        <Button rounded style={{backgroundColor:'transparent', borderColor:'gray', borderRadius:30, borderWidth:2, width:400, margin:30, opacity:0.9}}
                                onPress={()=> {this.props.navigation.navigate('Upload')}}
                        >
                            <Icon active name="ios-arrow-dropup" style={{color:'black'}} />
                            <Text style={styles.title}>Upload</Text>
                        </Button>
                      
                        
                      </Content>
                  </Container> 
                  <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#3498db' title="Contact-Us" onPress={() => {this.props.navigation.navigate('ContactUs')}}>
                      <Icon name="md-call" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="AboutUs" onPress={()=> {this.props.navigation.navigate('AboutUs')} }>
                      <Icon name="ios-book" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                  </ActionButton>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
       
        
        

    },
    logo: {
        width:150,
        height:200,
        marginBottom:10
    },
    title: {
        fontSize: 24,
        fontWeight:'100',
        textAlign:'center',
        color:'black',
        marginTop: 2,
        marginLeft:90,
        opacity:0.9,
        
    },
    logoContainer: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:50
   },
   preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },  

})  


