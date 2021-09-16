import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components-homeScreen/header';
import Body from '../components-homeScreen/body';

export default function Home(){
    return(
        <View style = {styles.container}>
            <Header />
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

    content: {
      flex: 1,
      padding: 40,
    },
  });