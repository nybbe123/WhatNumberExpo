import { useEffect, useState } from 'react'
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
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
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [winner, setWinner] = useState('')

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < playerNumber) ||
      (direction === 'higher' && currentGuess > playerNumber)
    ) {
      Alert.alert('Dont lie!', 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
    } else if (direction === 'lower') {
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
    if (tries >= 7) {
      setWinner('PLAYER')
      setModalIsOpen(true)
    } else if (currentGuess == playerNumber) {
      setWinner('PHONE')
      setModalIsOpen(true)
    } else {
      setModalIsOpen(false)
    }
  }, [tries, currentGuess])

  function handleGameOver() {
    minBoundary = 1
    maxBoundary = 100
    setTries(1)
    setWinner('')
    setModalIsOpen(false)
    navigation.navigate('Home')
  }

  return (
    <View style={s.container}>
      <View style={s.titleContainer}>
        <Text style={s.titleText}>Opponent's Guess</Text>
        <Text style={s.currentGuessText}>{currentGuess}</Text>
      </View>
      <View style={s.chooseContainer}>
        <Text style={s.chooseText}>Higher or Lower?</Text>
        <View style={s.btnContainer}>
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
      <Modal visible={modalIsOpen}>
        <View style={s.modal}>
          {winner === 'PLAYER' ? (
            <Text style={s.gameOverText}>You win!</Text>
          ) : (
            <Text style={s.gameOverText}>Phone win!</Text>
          )}
          <PrimaryBtn title="Back home" onPress={handleGameOver} />
        </View>
      </Modal>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 19,
  },
  currentGuessText: {
    fontSize: 32,
  },
  chooseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseText: {
    marginBottom: 15,
    fontSize: 19,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverText: {
    position: 'absolute',
    top: 100,
    fontSize: 32,
  },
})
