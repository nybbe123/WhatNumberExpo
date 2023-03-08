import { useState } from 'react'
import {
  StyleSheet, // For CSS
  Text, // For headings and bread text
  TextInput, // For inputfields
  View, // Like an Div
  Button, // non modable button
  ScrollView, // To put lots of items that you can scroll through (not good for large amount of items - speed)
  FlatList, // like ScrollView but doesnt render all items at once - only the nearest your current view
} from 'react-native'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [goals, setGoals] = useState([])

  function handleSubmit() {
    setGoals((prevValue) => [
      ...prevValue,
      { text: inputValue, key: Math.random().toString },
    ])
    setInputValue('')
  }

  return (
    <View style={s.container}>
      <View style={s.inputContainer}>
        <TextInput
          style={s.textInput}
          placeholder="CouseGoal"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <Button title="Add Goal" onPress={handleSubmit} />
      </View>
      <View style={s.goalContainer}>
        {/* <ScrollView> */}
        <FlatList
          data={goals}
          renderItem={(goalData) => {
            return (
              <View style={s.goalItem}>
                <Text style={s.goalItemText}>{goalData.item.text}</Text>
              </View>
            )
          }}
        />
        {/* </ScrollView> */}
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 8,
  },
  goalContainer: {
    flex: 5,
    marginTop: 25,
  },
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  goalItemText: {
    color: '#fafafa',
  },
})
