import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        // { name: 'Friend 1', key: '1' },
        // { name: 'Friend 2', key: '2' },
        // { name: 'Friend 3', key: '3' },
        // { name: 'Friend 4', key: '4' },
        // { name: 'Friend 5', key: '5' },
        // { name: 'Friend 6', key: '6' },
        // { name: 'Friend 7', key: '7' },
        // { name: 'Friend 8', key: '8' }

        // { name: 'Friend 1' },
        // { name: 'Friend 2' },
        // { name: 'Friend 3' },
        // { name: 'Friend 4' },
        // { name: 'Friend 5' },
        // { name: 'Friend 6' },
        // { name: 'Friend 7' },
        // { name: 'Friend 8' }

        { name: 'Friend 1', age: 20 },
        { name: 'Friend 2', age: 30 },
        { name: 'Friend 3', age: 24 },
        { name: 'Friend 4', age: 23 },
        { name: 'Friend 5', age: 25 },
        { name: 'Friend 6', age: 26 },
        { name: 'Friend 7', age: 27 }
    ];

    return (
        // <FlatList
        //     // horizontal
        //     // showsHorizontalScrollIndicator={false}
        //     keyExtractor={friend => friend.name}
        //     data={friends} renderItem={({ item }) => {

        //         return <Text style={styles.textStyle}>{item.name}</Text>
        //     }}
        // >

        // </FlatList>

        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} and - Age {item.age}</Text>
            }}>

        </FlatList>
    );
};

const styles = StyleSheet.create({

    textStyle: {
        marginVertical: 30
    }

});

export default ListScreen;