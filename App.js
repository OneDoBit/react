import React from 'react';
import {Easing, Animated, TextInput, Platform, NativeModules, Vibration, Button, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Adobe from './adobe'

// Note that in order to get this to work on Android you need to set the following flags via UIManager:
const { UIManager } = NativeModules;
if (Platform.OS === 'android') 
{
    if (UIManager.setLayoutAnimationEnabledExperimental) 
    {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default class App extends React.Component {

    text1 = new Animated.Value(0)
    secondary = new Animated.Value(0)
    third = new Animated.Value(0)
    scale = new Animated.Value(0)


    componentDidMount() {

        Animated.timing(this.text1,{
            toValue: 1,
            duration: 1000,
            easing: Easing.bounce
        }).start()

        Animated.timing(this.secondary,{
            toValue: 1,
            duration: 1000,
            easing: Easing.bezier(0.645, 0.045, 0.355, 1)
         }).start();

         Animated.timing(this.third,{
            toValue: 1,
            duration: 1000,
            delay: 500,
            easing: Easing.cubic
         }).start();
    }

    render(){
        const adobes = [
            {
                "upperPart" : "yellow",
                "lowerPart" : "yellow",
                "smallThing" : "orange",
                "letters" : "green"
            },
            {
                "upperPart" : "orange",
                "lowerPart" : "orange",
                "smallThing" : "yellow",
                "letters" : "blue"
            },
            {
                "upperPart" : "gray",
                "lowerPart" : "gray",
                "smallThing" : "purple",
                "letters" : "green"
            }
        ]
        
      return (
        <View style={styles.container}>
          {
          
              adobes.map(( adobe, index) =>
                <Animated.View key={index} style={{...styles.h1, opacity: this.text1,
                    transform: [{
                        scaleX: this.text1.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,1]
                        })
                    },{
                        scaleY: this.text1.interpolate({
                            inputRange:[0,1],
                            outputRange: [0,1]
                        })
                    }]
                }}>
                    <Adobe 
                    key={index}
                    lowerPart={adobe.lowerPart}
                    upperPart={adobe.upperPart}
                    smallThing={adobe.smallThing}
                    letters={adobe.letters}
                    >
                    </Adobe>
                </Animated.View>
                )
            }
          
        <Animated.Text style={{...styles.title, opacity:this.secondary}}>Your passion</Animated.Text>
        <Animated.Text style={{...styles.secondary, opacity:this.third}}>is our passion</Animated.Text>
            <Animated.View style={{
            transform: [{
                translateY: this.secondary.interpolate({
                    inputRange:[0,1],
                    outputRange:[250,0]
                })
            }]
        }}>
                <Button color="orange" onPress={() => 
                {
                    alert('You downloaded illustrator');
                }}
                    title="Download Illustartor now"
                />
            </Animated.View>
            
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderWidth: 20,
    borderColor: 'rgba(255, 255, 100, 0.7)',
  },
    title: 
    {
        color: '#ff3',
        fontSize: 30
    },
    secondary: 
    {
        color: '#ff3',
        fontSize: 15,
        paddingBottom: 20
    }
});
