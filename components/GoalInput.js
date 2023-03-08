import { StyleSheet, View, TextInput, Button } from 'react-native'
import { useState } from 'react'

function GoalInput(props) {
  const [inputValue, setInputValue] = useState('')

  return (
    <View style={s.inputContainer}>
      <TextInput
        style={s.textInput}
        placeholder="CouseGoal"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <Button
        title="Add Goal"
        onPress={() => {
          props.inputCallback(inputValue)
          setInputValue('')
        }}
      />
    </View>
  )
}

export default GoalInput

const s = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 25,
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
})
