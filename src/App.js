import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import Router from './router'

function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

export default App
