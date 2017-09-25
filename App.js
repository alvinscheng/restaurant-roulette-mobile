import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'native-base'

export default class App extends React.Component {
  state = {
    restaurant: {
      name: 'restaurant_name'
    }
  }

  getRestaurant() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      fetch('https://restaurant-roulette-api.herokuapp.com/restaurant?latitude=' + latitude + '&longitude=' + longitude, { method: 'GET' })
        .then(response => response.json())
        .then(restaurant => {
          this.setState({ restaurant })
        })
    })
  }

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
              onPress={ this.getRestaurant.bind(this) }>
              <Text>Click Me!</Text>
            </Button>
          </View>

          <View>
            <Text>
              { this.state.restaurant.name }
            </Text>
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
