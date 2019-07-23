import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  );
}

export default HelloWorld;
