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
    borderWidth: 1.5,
    borderColor: '#fafafa',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: '#fafafa',
    padding: 16,
    fontSize: 17,
  },
})
