import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, DatePickerAndroid, StyleSheet, Text, View } from 'react-native';
import {vibrate} from './utils'
import  Constants  from "expo-constants";
import Cronometro from "./components/CronometroPomodoro"
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
