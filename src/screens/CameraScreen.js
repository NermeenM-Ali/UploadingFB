import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View , CameraRoll, StatusBar} from 'react-native';
import { RNCamera } from 'react-native-camera';
import {Icon} from 'native-base'

export default class App extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <StatusBar hidden/>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          
         
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} >
          <Text style={styles.capture} >
             <Icon active  name = 'ios-camera' style={{textAlign:'center'}}/>
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

 takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      return CameraRoll.saveToCameraRoll(data.uri, "photo")
    }
  };


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    paddingTop: 20,
    marginBottom: 30,
    width:80,
    height:80,
    borderRadius:50,
    opacity:0.9,
    borderColor:'gray',
    borderWidth:2,
    textAlign:'center'
  }
});
