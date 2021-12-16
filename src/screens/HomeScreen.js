import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (

    <View>
      {/* <Text style={styles.text}>Hi there!!</Text> */}
      <Button
        onPress={() => props.navigation.navigate('Component')}
        title='Go to components Demo'>
      </Button>

      {/* <TouchableOpacity onPress={() => console.log('List button pressed')}>
        <Text>Go to List demo</Text>
      </TouchableOpacity> */}

      <Button
        onPress={() => props.navigation.navigate('List')}
        title="Go to list Demo">
      </Button>

      <Button
        onPress={() => props.navigation.navigate('Image')}
        title="Go to Image Demo">
      </Button>
    </View>

  )

};

const styles = StyleSheet.create({

});

export default HomeScreen;
