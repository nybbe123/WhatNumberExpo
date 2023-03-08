import { useEffect, useState } from 'react'
import {
  StyleSheet, // For CSS
  Text, // For headings and bread text
  TextInput, // For inputfields
  View, // Like an Div
  Button, // non modable button
  ScrollView, // To put lots of items that you can scroll through (not good for large amount of items - speed)
  FlatList, // like ScrollView but doesnt render all items at once - only the nearest your current view
} from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [goals, setGoals] = useState([])

  function handleInputCallback(inputValue) {
    const randomString = Math.random().toString()

    setGoals((prevValue) => [
      ...prevValue,
      { text: inputValue, key: randomString },
    ])
  }

  function handleInputItemCallback(id) {
    setGoals((filteredGoals) => filteredGoals.filter((goal) => goal.key !== id))
  }

  return (
    <View style={s.container}>
      <GoalInput inputCallback={handleInputCallback} />
      <View style={s.goalContainer}>
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
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalContainer: {
    flex: 5,
    marginTop: 25,
  },
})
