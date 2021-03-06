import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Body(){
    const navigation = useNavigation();

    return(
        <View style = {styles.buttons}>   

            <TouchableOpacity onPress={() => navigation.navigate('Workouts')}>
                <View  style = {styles.item}>
                    <MaterialIcons name = 'fitness-center' size = {20} />
                    <Text>Workouts</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Music')}>
                <View  style = {styles.item}>
                    <MaterialIcons name = 'music-note' size = {20} />
                    <Text>Music</Text>    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Progress')}>
                <View  style = {styles.item}>
                    <MaterialIcons name = 'add-to-photos' size = {20} />
                    <Text>Progress</Text>          
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Food')}>
                <View  style = {styles.item}>
                    <MaterialIcons name = 'food-bank' size = {20}/>
                    <Text>Food</Text>
                </View>      
            </TouchableOpacity>
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