import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Trincano</Text>
      <Text style={styles.titulo}> Delivery de Bebidas !</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',

  },
  titulo: {
    fontSize: 30,
    color: '#fff'

  }
})