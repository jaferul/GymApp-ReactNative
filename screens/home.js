import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components-homeScreen/header';
import Body from '../components-homeScreen/body';
import Slider from '../components-homeScreen/slider';

export default function Home(){
    return(
        <View style = {styles.container}>
            <Header />
            <View style = {styles.slider}>
              <Slider />
            </View>
            <View style = {styles.content}>
              <Body />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    slider: {
      flex: 1,
     // paddingTop: 20,
    },

    content: {
      flex: 2,
      //paddingTop: 160,
      justifyContent: 'center',
      //alignItems: 'center',
    },
  });