
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CronometroPomodoro from './components/CronometroPomodoro';


export default function App() {

  return (
    <View style={styles.container}>
      
      <Text>Cronometro Pomodoro</Text>
      <CronometroPomodoro />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
