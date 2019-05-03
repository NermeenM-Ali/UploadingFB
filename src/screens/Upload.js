
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  ActivityIndicator,Dimensions, Share,StatusBar
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob'
import firebase from 'react-native-firebase';
import {Button, Icon} from 'native-base'
import Animation from 'lottie-react-native';
import axios from 'axios';
import { LoginButton, AccessToken,ShareApi, LoginManager, ShareDialog  } from 'react-native-fbsdk'
import {
  shareOnFacebook,
  shareOnTwitter,
} from 'react-native-social-share';


// Initialize Firebasess
var config = {
    apiKey: "AIzaSyBg3OUvR6hUvnr3s54SGl76W_pyxUc2Di8",
    authDomain: "rnmedical-fbd6c.firebaseapp.com",
    databaseURL: "https://rnmedical-fbd6c.firebaseio.com",
    projectId: "rnmedical-fbd6c",
    storageBucket: "rnmedical-fbd6c.appspot.com",
    messagingSenderId: "228480766381"
  };
  firebase.initializeApp(config);

const storage = firebase.storage()


const uploadImage = (uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const imagePath = uri;

    const imageRef = firebase
      .storage()
      .ref('images')
      .child('dp.jpg');
    let mime = 'image/jpg';

    imageRef
      .put(imagePath, { contentType: mime })
      .then(() => {
        return imageRef.getDownloadURL();
      })
      .then(resolve)
      .catch(reject);
  });
};

export default class Upload extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    
  }

 

  shareLinkWithShareDialog=()=> {
  
    

    let shareLinkContent = {
    
    contentType: 'link',
    
    contentUrl: this.state.uploadURL,
    
      }
    
     ShareDialog.canShow(shareLinkContent).then((canShow) => {
    
    if (canShow) return ShareDialog.show(shareLinkContent);;
    
     }
    
    ).then((result) => {
    
     if (result.isCancelled) {
    
      alert('Share cancelled');
    
     } else {
    
       alert('Share success with postId: ' + result.postId);
    
       }
    
      },
    
      function(error) {
    
      alert('Share fail with error: ' + error);
          }
    );
      }

  _pickImage() {
    this.setState({ uploadURL: '' })

    ImagePicker.launchImageLibrary({}, response  => {
      uploadImage(response.uri)
        .then(url =>{ 
          this.setState({ uploadURL: url })

       })
        .catch(error => alert(error))
      
    })
  }

 
  
  render() {
    return (
      <View style={ styles.container }>
       <StatusBar hidden/>
        {
          (() => {
            switch (this.state.uploadURL) {
              case null:
                return null
              case '':
                return ( <ActivityIndicator large color='rgba(47,162,152,1)'/>)
              default:
                return (
                  
                  <View style={{backgroundColor:'transparent'}}>
                    <Image
                      source={{ uri: this.state.uploadURL }}
                      style={ styles.image }
                    />
                     
                      <Text style={{textAlign:'center'}}>{this.state.uploadURL}</Text>
                     
                    
                    </View>
               
                )
            }
          })()
        }
        <View style={{flexDirection:'row', }}>
              <Button rounded 
                        onPress={()=> this._pickImage()}
                        style={{width:210,justifyContent:'center', backgroundColor:"rgb(231,76,60)", opacity:0.7, marginLeft:12, marginTop:70, marginBottom:70}}
                >
                  <Icon name='ios-arrow-dropup'/>
                  <Text style={{textAlign:'center',color:'white', fontWeight:'bold'}}>Choose Picture</Text>
              </Button>
              <Button rounded 
                        onPress={()=> this.shareLinkWithShareDialog()}
                        style={{width:220,justifyContent:'center', backgroundColor:'rgb(32, 57, 70)', opacity:0.7, marginRight:15,marginLeft:5 ,marginTop:70, marginBottom:70}}
                >
                  <Icon name='logo-facebook'/>
                  <Text style={{textAlign:'center', color:'white',fontWeight:'bold'}}>share On Facebook</Text>
              </Button>
            </View>   
         </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  image: {
    height: 527,
    width:500,
  },
  upload: {
    textAlign: 'center',
    color: '#333333',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor:'tomato'
  },
})
