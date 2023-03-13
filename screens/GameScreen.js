import { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import PrimaryBtn from '../components/PrimaryBtn'

function generateRandomNum(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min

  if (randomNum === exclude) {
    return generateRandomNum(min, max, exclude)
  } else {
    return randomNum
  }
}

let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({ navigation, route }) {
  const playerNumber = route.params.number
  const initialGuess = generateRandomNum(1, 100, playerNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [tries, setTries] = useState(1)

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < playerNumber) ||
      (direction === 'higher' && currentGuess > playerNumber)
    ) {
      Alert.alert('Dont lie!', 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRandomNum = generateRandomNum(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRandomNum)
    setTries(tries + 1)
  }

  useEffect(() => {
    if (tries >= 10) {
      console.log('YOU WIN')
    } else if (currentGuess == playerNumber) {
      console.log('PHONE WINS')
    } else return
  }, [tries, currentGuess])

  return (
    <View style={s.container}>
      <Text>Opponent's Guess</Text>
      <Text>{currentGuess}</Text>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryBtn
            title="+"
            onPress={nextGuessHandler.bind(this, 'higher')}
          />
          <PrimaryBtn
            title="-"
            onPress={nextGuessHandler.bind(this, 'lower')}
          />
        </View>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
