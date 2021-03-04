import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, Image, TextInput, TouchableWithoutFeedback, View , SafeAreaView, TouchableOpacity, Alert, Platform, Dimensions, PixelRatio} from 'react-native';
import DefaultInput from './defaultInput';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
export default function App() {
  
const {
width: SCREEN_WIDTH,
height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale= SCREEN_WIDTH/320;

const radie=normalize(10);

function normalize(size) {
  const newSize =size*scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) -2
  }
}
  
    
    return (

      <SafeAreaView style={styles.container}>
      <View style={ {
        
        backgroundColor: 'hsla(240, 13%, 15%,1)',
        height: '95%',
        width: '98%',
        borderRadius: radie,
        zIndex: 0,
        position: 'absolute'

      }}>

        

{/* <View  style={ {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Button 
        color="green"
  title="måndag 1/3"
  
/>

<Button
  title="tisdag 1/3"
/>
</View>

<View>
        <Button style={styles.buttonsar}
  title="måndag 2/3"
/>

<Button
  title="onsdag 2/3"
/>
</View> */}
      </View>
    

      <View style={ {
        
        backgroundColor: 'hsla(240, 14%, 11%,1)',
        height: '10%',
        width: '100%',
        borderRadius: radie*2,
        zIndex: 1,
        position: 'absolute',
        bottom: '0%',
        flexDirection: "row",
        justifyContent: 'space-around',
        padding: normalize(6),
        

      }}>

<Button style={{
           
           // position: 'relative'
         }}
 
         color="pink"
         
        title="///"
   
 />
        <Button style={{
           fontSize: normalize(10)
           
          // position: 'relative'
        }}
        color="pink"
        
       title="+"
       onPress={() => Alert.alert('vore ju kul om det fungerade')}
  
/>
<Button style={{
           
          // position: 'relative'
        }}

        color="pink"
        
       title="///"
  
/>

         </View>
         


      <View style={ {
        
        backgroundColor: 'hsla(240, 13%, 0%,0.5)',
        height: '20%',
        width: '96%',
        borderRadius: radie,
        zIndex: 1,
        position: 'absolute',
        top: '4%'

      }}>
        <Text style={{
          fontSize: normalize(35),
          color: 'hsla(342, 78%, 72%,1)',
          zIndex:2,
          position: 'relative',
          textAlign:'center',
          
          
          
        
        }}>
          operationGunde
        </Text>

        
</View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    
      backgroundColor: 'hsla(240, 14%, 11%,1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    buttonsar: {
      //display: 'flex',
      height: 50,
      borderRadius: 5,
     // justifyContent: 'center',
     // alignItems: 'center',

      backgroundColor: 'black',
     // shadowColor: '#2AC062',
     // shadowOpacity: 0.4,
     // shadowOffset: { height: 10, width: 0 },
     // shadowRadius: 20,
  },


  });
  //let info = 'historik';
  //console.log("Application running!");


  
  //return (
   // <SafeAreaView style={styles.container}>

    
    
 //   </SafeAreaView>
  //);
//}



// mina popups fungerar inte? Alert

//utmaxat från view
// <DefaultInput>Placeholder</DefaultInput>
//<Text>Netinfo: {info}</Text>
//<StatusBar style="auto" />

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: 'hsla(200, 50%, 50%,1)',
    //alignItems: 'center',
  //  justifyContent: 'center',
    //flex: 1,
    // flexDirection: "row",
   // backgroundColor: 'hsla(264, 16%, 47%,1)',
    //'hsla(285, 50%, 50%,1)'
   // alignItems: 'center',
    //justifyContent: 'center' ,
    //alignItems: "center" ,//secondary axis
   // paddingTop: Platform.OS == "ios"? 20 :30,
 // },




//});
