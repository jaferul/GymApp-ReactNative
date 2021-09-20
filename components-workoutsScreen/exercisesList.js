import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SectionList } from 'react-native';

export default function ExercisesList(){
    return(
        <View>
            <SectionList 
                sections = {[
                    {title: 'Back', data: ['Deadlift', 'Row']},
                    {title: 'Chest', data: ['Bench', 'Flies']},
                    {title: 'Shoulder', data: ['Press', 'Flies']},
                    {title: 'Legs', data: ['Squat', 'Press']},
                    {title: 'Biceps', data: ['Curls', 'Hammer-Curls']},
                    {title: 'Triceps', data: ['Skullcrusher', 'Cable pulldown']}
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
})