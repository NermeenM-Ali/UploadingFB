import React,{Component} from 'react';
import {
     View,ActivityIndicator,ScrollView,Keyboard,Text, Dimensions, StyleSheet, Image,StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Card,Button} from 'native-base';
import Animation from 'lottie-react-native';




export default class ContactUs extends Component {
  
    componentDidMount(){
        this.animation.play();
    }

    render(){

        return(
            <View style={{flex:1}}>    
             <StatusBar hidden/>
             <Card style={{ marginBottom:0, height:250, justifyContent:'space-around'}}>
                     <View style={{ alignItems:'center',flexDirection:'row',marginTop:5,marginHorizontal:5}}>
                        <Icon size={25} color="rgba(231,76,60,1)" name='phone' />
                        <Text style={{fontWeight:'600', fontSize:16}}> : </Text>
                        <Text style={{fontWeight:'400', fontSize:20}}> 01009028282 - 0224950783 </Text>
                     </View>

                     <View style={{alignItems:'center',flexDirection:'row',marginTop:5,marginHorizontal:5}}>
                        <Icon size={25} color="rgba(231,76,60,1)" name='envelope' />
                        <Text style={{fontWeight:'600', fontSize:16}}> : </Text>
                        <Text style={{fontWeight:'400', fontSize:20}}> info@medical.com </Text>
                        
                     </View>

                     <View style={{alignItems:'center',flexDirection:'row',marginVertical:5,marginHorizontal:5}}>
                        <Icon size={20} color="rgba(231,76,60,1)" name='map-marker-alt' />
                        <Text style={{fontWeight:'600', fontSize:16}}> : </Text>
                        <Text style={{fontWeight:'400', fontSize:20}}> 01009028282 - 0224950783 </Text>
                     </View>
                 </Card>  

                
                    
                <View style={{flex:1}}>
                    <Animation
                        
                        ref={animation => {
                        this.animation = animation;
                        }}
                        style={{
                          
                        width: 200,
                        height: 200,
                        marginLeft:50,
                        marginTop:50
                        }}
                        loop={true}
                        source={require('../animations/preloader.json')}
                    />
                    <Text style={{color:"rgba(231,76,60,1)", fontSize:20, textAlign:'center', marginTop:20}}>Contact Us any Time..</Text>
                </View>
                                    
                </View>
     
        )
    }
}

const styles =StyleSheet.create({
    logo: {
        width:150,
        height:200,
        marginBottom:10, 
        borderRadius:50
    },
    logoContainer: {

        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    }
})
