import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Body(){
    return(
        <View style = {styles.buttons}>        
            <View  style = {styles.item}>
                <MaterialIcons name = 'fitness-center' size = {20} />
                <Text>Workouts</Text>
            </View>

            <View  style = {styles.item}>
                <MaterialIcons name = 'music-note' size = {20} />
                <Text>Music</Text>          
            </View>

            <View  style = {styles.item}>
                <MaterialIcons name = 'add-to-photos' size = {20} />
                <Text>Progress</Text>          
            </View>

            <View  style = {styles.item}>
                <MaterialIcons name = 'food-bank' size = {20}/>
                <Text>Food</Text>
            </View>      
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'grey',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
});