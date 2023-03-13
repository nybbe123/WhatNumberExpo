import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import PrimaryBtn from '../components/PrimaryBtn'

export default function NewGameScreen({ navigation }) {
  const [inputValue, setInputValue] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (inputValue !== '') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [inputValue])

  function handleSubmit() {
    navigation.navigate('Game', { number: inputValue })
  }

  return (
    <View style={s.container}>
      <View style={s.textContainer}>
        <Text style={s.textTitle}>Enter a number between 0 and 100</Text>
      </View>
      <View style={s.inputContainer}>
        <TextInput
          style={s.input}
          keyboardType="number-pad"
          value={inputValue.toString()}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
          onChangeText={(text) => {
            setInputValue(text.replace(/[^0-9]/g, ''))
          }}
        />
      </View>
      <View style={s.btnContainer}>
        <PrimaryBtn
          title="Start Game"
          onPress={handleSubmit}
          isDisabled={isDisabled}
        />
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 58,
    borderColor: '#333',
    width: 100,
    textAlign: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: 150,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    maxWidth: 150,
    textAlign: 'center',
    fontSize: 21,
    lineHeight: 25,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 100,
  },
})
