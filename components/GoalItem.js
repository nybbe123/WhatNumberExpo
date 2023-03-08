import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
  return (
    <View style={s.goalItem}>
      <Pressable // För att kunna göra view komponenten tryckbar
        android_ripple={{
          // För att skapa visuell respons vid tryck på android
          color: '#dddddd',
        }}
        style={({ pressed }) => pressed && s.pressedItem}
        onPress={() => props.inputItemCallback(props.id)}
      >
        <Text style={s.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const s = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    backgroundColor: 'black',
    borderRadius: 8,
  },
  goalItemText: {
    color: '#fafafa',
    padding: 8,
  },
})
