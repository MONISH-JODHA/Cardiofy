/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './component/Flatcards';
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.card, styles.card1]}>
            <Text>App</Text>
          </View>

          <View style={[styles.card, styles.card2]}>
            <Text>App</Text>
          </View>

          <View style={[styles.card, styles.card3]}>
            <Text>App</Text>
          </View>
        </View>
      </ScrollView >

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 10,
  },
  card1: {
    backgroundColor: 'red'
  },
  card2: {
    backgroundColor: 'green'
  },
  card3: {
    backgroundColor: 'blue'
  },
})