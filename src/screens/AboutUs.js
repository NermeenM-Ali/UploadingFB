import React,{Component} from 'react';
import {
     View,Image, Text,Dimensions, StatusBar
} from 'react-native';



export default class AboutUs extends Component {

    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar hidden/>
                <Image style={{alignSelf:'center',marginTop:35, width:300,height:300, borderRadius:400, borderColor:'gray', borderWidth:2}} source={require('../Images/AboutUs.png')} />
                
                <View style={{alignSelf:'center',marginTop:5}}>
                    <Text style={{fontSize:20,color:'gray',fontWeight:'bold'}}>Version 0.1</Text>
                </View>
               
                <View style={{marginHorizontal:4, alignSelf:'center', marginTop:20}}>
                    <View style={{alignSelf:'center'}}>
                        <Text style={{fontWeight:'normal',fontSize:35, color:"rgba(190,35,23,1)"}}>Medical App</Text>
                    </View>
                        
                </View>
                
                <View style={{backgroundColor:'#f2efef',width:Dimensions.get('screen').width,height:160,marginTop:70}}>
                <View style={{marginHorizontal:4,  flexDirection:'row',alignItems:'center' }}>  
                    <Text style={{color:'black', fontSize:20, textAlign:'center', marginTop:20}}>
                    This app designed to facilitate the process of asking and searching for medicines and it's details ,we promise to give you the desired answers about what you are looking for
                    
                    </Text>
                
                </View>
                </View>
            
            </View>
        )
    }
}

