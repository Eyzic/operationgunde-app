import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, Image, TextInput, TouchableWithoutFeedback, View , SafeAreaView, TouchableOpacity, Alert, Platform, Dimensions, PixelRatio, ScrollView, Input} from 'react-native';
import DefaultInput from './defaultInput';
//import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
//import LinearGradient from 'react-native-linear-gradient';
export default function App() {
  
const {
width: SCREEN_WIDTH,
height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale= SCREEN_WIDTH/320;

const radie=normalize(10);
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

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
      <ScrollView style={{
        width:'100%',
        
      }}>
      <View style={ {
        
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        height: normalize(115),
        width: '100%',
        flexDirection: "column",
        marginBottom:normalize(10),
      // paddingTop:normalize(20),
       paddingLeft:normalize(20),
       paddingRight:normalize(100),
        

      }}>
        <Text style={{ fontSize: normalize(30) }}>Din {"\n"}
        Historik
        </Text>
        
<View
style={{
borderBottomColor: 'black',
borderBottomWidth: normalize(1.5),

}}>
  
</View>

<View style={{
flexDirection: "row",
justifyContent: "space-around"

}}>
        <Button 
          title="Feed"
          color='hsla(324, 53%, 50%,1)'
          
          //onPress={() => Alert.alert('Left button pressed')}
        />
  <Button
  onPress={() => Alert.alert('till översikt')}
   title="Översikt"
   color="black"
  />
        

</View>
      </View>
      <TouchableWithoutFeedback onPress={() => Alert.alert('till passets sida')}>
      <View style={ {
        
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        height: normalize(80),
        width: '100%',
        marginBottom:normalize(10),
        flexDirection: "column",
        justifyContent: "space-between",
        
      }}>

<View style={ {
        height: '40%',
        width: '75%',
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: normalize(5),
        justifyContent: 'space-between'

      }}>
<Text style={{ fontSize: normalize(20),
             // marginRight: normalize(5),
               }}>Måndag löpning
        </Text>

        <Text style={{ fontSize: normalize(13),
                      right: normalize(0),
                      }}> 23 feb 2020
        </Text>
</View>

<View style={ {
        height: '40%',
        width: '20%',
        alignItems: 'center',
        paddingLeft: normalize(0),
        position:'absolute',
        right: 0,
        top: '35%'
        

      }}>
<Text style={{ fontSize: normalize(15) }}>08:00
        </Text>

</View>


<View style={ {
        
        backgroundColor: 'hsla(324, 53%, 66%,0.65)',
        height: '50%',
        width: '75%',
        flexDirection: "row",
        borderTopRightRadius: normalize(5),
        bottom:0,
        //justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: normalize(10),
        
      }}>
<View style={ {
        flexDirection: "column",
        alignContent: 'center',
        paddingLeft: normalize(5),
         }}>
<Text style={{ fontSize: normalize(13),

                color: 'white'  ,
                paddingRight:normalize(10),
  }}>avg hr
</Text>

<Text style={{ fontSize: normalize(17),
color: 'white'
 }}>150
</Text>
</View>

<View style={ {
        flexDirection: "column",
        paddingLeft: normalize(5),
        
         }}>
<Text style={{ fontSize: normalize(13),
color: 'white',
 }}>min/km
</Text>

<Text style={{ fontSize: normalize(17),
color: 'white',
 }}>4:25
</Text>
</View>

</View>
       
         
      </View>

      </TouchableWithoutFeedback>
      <View style={ {
        
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        height: normalize(80),
        width: '100%',
        marginBottom:normalize(10),
        flexDirection: "row",

      }}>
        
      </View>
   
      <View style={ {
        
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        height: normalize(80),
        width: '100%',
        marginBottom:normalize(10),

        flexDirection: "row",


      }}>
        
      </View>
      <View style={ {
        
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        height: normalize(80),
        width: '100%',
        marginBottom:normalize(10),
        flexDirection: "row",

      }}>
        
      </View>
      <View style={ {
        
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        height: normalize(80),
        width: '100%',
        marginBottom:normalize(10),
        flexDirection: "row",
        

      }}>
        
      </View>

      <View style={ {
        
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        height: normalize(80),
        width: '100%',
        marginBottom:normalize(10),
        flexDirection: "row",
        

      }}>
        
      </View>     
       <View style={ {
        
        backgroundColor: 'hsla(268, 100%, 96%,0.63)',
        height: normalize(80),
        width: '100%',
        marginBottom:normalize(10),
        flexDirection: "row",
        

      }}>
        
      </View>

 

    </ScrollView>

    <View style={ {
        
        backgroundColor: 'hsla(0, 100%, 100%,1)',
        height: normalize(50),
        width: '100%',
        //marginBottom:normalize(10),
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-around'

      }}>
        <TouchableWithoutFeedback onPress={() => Alert.alert('till gruppsida')}>
         <Image source={require('./grupp2.png')}
          style={{
            width: normalize(40), 
            height: normalize(40)
          }}
          />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => Alert.alert('till profil')}>
                  <Image source={require('./profil2.png')}
          style={{width: normalize(40), height: normalize(40)}}
          />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => Alert.alert('till dashboard')}>
                  <Image source={require('./hus1.png')}
          style={{width: normalize(41), height: normalize(38)}}
          />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('till starta pass')}>
                  <Image source={require('./timer1.png')}
          style={{width: normalize(34), height: normalize(40)}}
          />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => Alert.alert('till historik')}>
                  <Image source={require('./historik2.png')}
          style={{width: normalize(30), height: normalize(40)}}
          />
          </TouchableWithoutFeedback>
        
      </View>
    
    </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     
      backgroundColor: 'hsla(268, 41%, 68%,1)',
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