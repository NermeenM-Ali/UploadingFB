/*import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import FBSDK,{ LoginButton, AccessToken,ShareDialog ,LoginManager, ShareApi } from 'react-native-fbsdk';
import { Button } from 'native-base';
import firebase from 'react-native-firebase';

/*
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
*/

/*
const shareLinkContent = {
  contentType: 'link',
  contentUrl: "",
  contentDescription: 'Wow, check out this great site!',
};*/
//export default class App extends Component {


  //sharing=()=> {
    
// Build up a shareable link.
/*const shareLinkContent = {
  contentType: 'link',
  contentUrl: "https://facebook.com",
  contentDescription: 'Wow, check out this great site!',
};

// ...

// Share using the share API.
    ShareApi.canShare(this.shareLinkContent).then(
     
      function(canShare) {
        if (canShare) {
          return ShareApi.share(this.shareLinkContent, '/me', 'Some message.');
        }
      }
    ).then(
      function(result) {
        console.log('Share with ShareApi success.');
      },
      function(error) {
        console.log('Share with ShareApi failed with error: ' + error);
      }
    );
  }

/*
  postPhoto = ()=> {
    ShareApi.canShare(this.state.shareLinkContent).then(
      function(canShare) {
        if (canShare) {
          return ShareApi.share(this.state.shareLinkContent, '/me', 'Some message.');
        }
      }
    ).then(
      function(result) {
        console.log('Share with ShareApi success.');
      },
      function(error) {
        console.log('Share with ShareApi failed with error: ' + error);
      }
    );
  }


  fbAuth=()=> {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success : '
            +result.grantedPermissions.toString());
            ShareApi.canShare(this.state.shareLinkContent).then(
              function(canShare) {
                if (canShare) {
                  return ShareApi.share(this.state.shareLinkContent, '/me', 'Some message.');
                }
              }
            ).then(
              function(result) {
                console.log('Share with ShareApi success.');
              },
              function(error) {
                console.log('Share with ShareApi failed with error: ' + error);
              }
            );
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }*/
  /*render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Button full rounded success onPress={()=>{this.sharing()}}>
          <Text>Login With Facebook</Text>
        </Button>
      </View>
    );
  }
}*/



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import FBSDK from 'react-native-fbsdk'
const {
  LoginButton,
  ShareDialog,
} = FBSDK;

export default class App extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
    };

    this.state = {
      shareLinkContent: shareLinkContent,
    };
  }

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent).then(
      function(canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      }
    ).then(
      function(result) {
        if (result.isCancelled) {
          alert('Share cancelled');
        } else {
          alert('Share success');
        }
      },
      function(error) {
        alert('Share fail with error: ' + error);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginButton />
        <TouchableHighlight style={styles.share}
          onPress={this.shareLinkWithShareDialog.bind(this)}>
          <Text style={styles.shareText}>Share link with ShareDialog</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  shareText: {
    fontSize: 20,
    margin: 10,
  },
});

         /* const shareLinkContent = {
            contentType: 'link',
            contentUrl: url,
            contentDescription: 'Wow, check out this great site!',
          };      
          ShareApi.canShare(this.state.shareLinkContent).then(
            function(canShare) {
              if (canShare) {
                return ShareApi.share(this.shareLinkContent, 'https://www.facebook.com/nermeen.mohamed.522/timeline?lst=100005996498153%3A100005996498153%3A1556751145', this.shareLinkContent.contentDescription);
              }
            }
          ).then(
            function(result) {
              alert('Share with ShareApi success.');
            },
            function(error) {
              alert('Share with ShareApi failed with error: ' + error);
            }
          );*/




             
    /*
const sharePhotoContent = {
  contentType: 'photo',
  photos: [
    {
      imageUrl:  `https://www.facebook.com/images/${this.state.uploadURL}`,
     
    }
  ]
};

ShareDialog.canShow(sharePhotoContent).then(
  function(canShow) {
    if (canShow) {
      return ShareDialog.show(sharePhotoContent);
    }
  }
).then(
  function(result) {
    if (result.isCancelled) {
      alert('Share cancelled');
    } else {
      alert('Share success with postId: ' + result.postId);
    }
  },
  function(error) {
    alert('Share fail with error: ' + error);
  }
);*/
   
    /* Share.share({ 
      message: `Firebase storage photo  in React Quiz: ${url}`
  }, {
      dialogTitle: 'Share my score'
  });
  
    /*const photoUri = url
    const sharePhotoContent = {
      contentType : 'photo',
      photos: [{ imageUrl: photoUri }],
    }
    

    ShareDialog.canShow(sharePhotoContent)
    .then((canShow) => {
      if (canShow) {
        return ShareDialog.show(sharePhotoContent);
      }
    })
    .then((result) => {

      if(!result.isCancelled){
        setTimeout(() => alert("Success!"), 100)
      }
    })
    .catch(error => {
      console.log(error)
      setTimeout(() => alert('Share fail with error: ' + error), 100)
      }
    )
*/
   

  //  const photoUri = 'file://' + '/path/of/photo.png'
     /* const sharePhotoContent = {
        contentType : 'photo',
        photos: [this.state.uploadURL],
      }

     return ShareDialog.show(sharePhotoContent);*/




     
/*
  ShareImage=(url)=> {
    Share.share({
      message: url,
    })
    .then(result => alert('Your mphoto shared successfuly'))
    .catch(errorMsg => alert(errorMsg));
  }*/
  
  /*fbAuth=()=> {
    const shareLinkContent = {
      contentType: 'photo',
      contentUrl: this.state.uploadURL,
      contentDescription: 'Wow, check out this great site!',
    };
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success : '
            +result.grantedPermissions.toString());
           /* ShareApi.canShare(this.state.shareLinkContent).then(
              function(canShare) {
                if (canShare) {
                  return ShareApi.share(this.state.shareLinkContent, '/me/feeds', 'Some message.');
                }
              }
            ).then(
              function(result) {
                alert('Share with ShareApi success.');
              },
              function(error) {
                alert('Share with ShareApi failed with error: ' + error);
              }
            );*/


            /*const photoUri = this.state.uploadURL
            const sharePhotoContent = {
              contentType : 'photo',
              photos: [{ imageUrl: photoUri }],
            }
            
            // ...
            
            ShareDialog.show(tmp.state.sharePhotoContent);*/
     /*   }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }*/


/*
  sharePhotoOnFacebook = () => {

    shareOnFacebook({
      'text':'Global democratized marketplace for art',
      'link':'https://artboost.com/',
      'imagelink':'https://artboost.com/apple-touch-icon-144x144.png',
      //or use image
      'image': 'artboost-icon',
    },
    (results) => {
      console.log(results);
    }
  );

  }*/


