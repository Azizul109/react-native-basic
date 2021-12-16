import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const PracticeScreen = () => {

    const myName = 'Arif';

    return (
        <View>
            <Text style={styles.textStyle1}>Getting started with React Native</Text>
            <Text style={styles.textStyle2}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    textStyle1: {
        fontSize: 45,
        backgroundColor: 'red',
        textAlign: 'center'
    },

    textStyle2: {
        fontSize: 20,

    }

});

export default PracticeScreen;