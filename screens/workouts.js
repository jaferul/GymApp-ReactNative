import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components-workoutsScreen/header';
import ExercisesList from '../components-workoutsScreen/exercisesList';

 export default function Workouts(){
    return(
        <View style = {styles.container}>
            <Header />
            <View style = {styles.list}>
                <ExercisesList />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    list: {
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