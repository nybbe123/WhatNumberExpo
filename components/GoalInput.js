import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Modal,
  Image,
  Dimensions,
  Pressable,
} from 'react-native'
import { useState } from 'react'

function GoalInput(props) {
  const [inputValue, setInputValue] = useState('')

  const { height } = Dimensions.get('window')

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={s.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={s.image} />
        <Text style={s.goalTitle}>New Goal</Text>
        <TextInput
          style={s.textInput}
          placeholder="Enter new goal"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <View style={s.buttonContainer}>
          <View style={s.primaryBtn}>
            <Pressable
              onPress={() => {
                props.inputCallback(inputValue)
                setInputValue('')
              }}
            >
              <Text style={s.primaryBtnText}>Save Goal</Text>
            </Pressable>
          </View>
          <View style={s.secondaryBtn}>
            <Pressable
              title="Cancel"
              onPress={() => props.handleIsVisible(false)}
            >
              <Text style={s.secondaryBtnText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const s = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#7404FA',
  },
  textInput: {
    backgroundColor: '#fafafa',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    fontSize: 19,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  primaryBtn: {
    width: '100%',
    backgroundColor: '#4E04A6',
    padding: 21,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtnText: {
    color: '#fafafa',
    fontSize: 19,
  },
  secondaryBtn: {
    position: 'relative',
    top: 25,
  },
  secondaryBtnText: {
    color: '#fafafa',
    fontSize: 19,
  },
  image: {
    position: 'absolute',
    top: 50,
    left: '52%',
    width: 50,
    height: 50,
  },
  goalTitle: {
    position: 'absolute',
    top: 110,
    left: '44%',
    fontSize: 32,
    fontWeight: 500,
    color: '#fafafa',
  },
})
