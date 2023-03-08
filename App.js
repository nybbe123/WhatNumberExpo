import { useEffect, useState } from 'react'
import {
  StyleSheet, // For CSS
  Text, // For headings and bread text
  TextInput, // For inputfields
  View, // Like an Div
  Button, // non modable button
  ScrollView, // To put lots of items that you can scroll through (not good for large amount of items - speed)
  FlatList, // like ScrollView but doesnt render all items at once - only the nearest your current view
  Pressable,
  StatusBar,
} from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [goals, setGoals] = useState([])

  function handleInputCallback(inputValue) {
    const randomString = Math.random().toString()

    setGoals((prevValue) => [
      ...prevValue,
      { text: inputValue, key: randomString },
    ])

    setIsVisible(false)
  }

  function handleInputItemCallback(id) {
    setGoals((filteredGoals) => filteredGoals.filter((goal) => goal.key !== id))
  }

  function onHandleVisible(value) {
    setIsVisible(value)
  }

  return (
    <View style={s.container}>
      <StatusBar backgroundColor="#7404FA" />
      <GoalInput
        inputCallback={handleInputCallback}
        visible={isVisible}
        handleIsVisible={onHandleVisible}
      />
      <View style={s.goalContainer}>
        <Text style={s.goalTitle}>Goals:</Text>
        <FlatList
          data={goals} // Instead of mapping the goals array we can use Data = all array items
          renderItem={(goalData) => {
            // and then use the render callback function
            return (
              <GoalItem
                text={goalData.item.text}
                id={goalData.item.key}
                inputItemCallback={handleInputItemCallback}
              />
            )
          }}
        />
      </View>
      <View style={s.primaryBtn}>
        <Pressable onPress={() => setIsVisible(true)}>
          <Text style={s.primaryBtnText}>Add New Goal</Text>
        </Pressable>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#7404FA',
  },
  goalContainer: {
    width: '100%',
    flex: 5,
    marginTop: 25,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  goalTitle: {
    fontSize: 21,
    marginLeft: 12,
    marginBottom: 8,
    color: '#fafafa',
  },
  primaryBtn: {
    width: '100%',
    backgroundColor: '#4E04A6',
    padding: 21,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  primaryBtnText: {
    color: '#fafafa',
    fontSize: 19,
  },
})
