import React from 'react';
import { Vibration, Button, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Adobe from './adobe'

export default class App extends React.Component {
    
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
                <Adobe 
                key={index}
                lowerPart={adobe.lowerPart}
                upperPart={adobe.upperPart}
                smallThing={adobe.smallThing}
                letters={adobe.letters}>
                </Adobe>
                )
          
          }
          
          <Text style={styles.title}>Your passion</Text>
          <Text style={styles.secondary}>is our passion</Text>

            <Button color="orange" onPress={() => 
            {
                alert('You downloaded illustrator');
            }}
                title="Download Illustartor now"
            />
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
