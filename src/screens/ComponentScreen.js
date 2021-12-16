import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {

    const greeting = 'Hi there you fucking moron!!'

    return (
        <View>
            <Text style={styles.textStyle}>
                This is the component screen!!!
            </Text>
            <Text>{greeting}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;

// different primitive element

// * Text, View, Image, Button