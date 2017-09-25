import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Restaurant Roulette
            </Text>
          </View>

          <View>
            <Button bordered info
              style={styles.getStartedButton}
              onPress={() =>
                console.log('hi')
              }>
              <Text>Click Me!</Text>
            </Button>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
  },
  getStartedText: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  getStartedButton: {
    marginTop: 20,
    marginLeft: 140,
  },
})
