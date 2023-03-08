import { StyleSheet, Text, Pressable, View } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={s.container}>
      <View style={s.titleContainer}>
        <Text style={s.title}>What Number</Text>
        <Text style={s.titleBread}>
          Play against your mobile. You choose a number between 0 and 100 and
          your phone gets ten attempts to guess correctly.
        </Text>
      </View>
      <Pressable
        style={s.primaryBtn}
        onPress={() => navigation.navigate('NewGame')}
      >
        <Text style={s.primaryBtnText}>Start Game</Text>
      </Pressable>
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
  titleContainer: {
    position: 'absolute',
    width: '100%',
    top: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 500,
  },
  titleBread: {
    position: 'relative',
    top: 15,
    maxWidth: 300,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 23,
    fontWeight: 300,
  },
  primaryBtn: {
    backgroundColor: '#333',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 6,
  },
  primaryBtnText: {
    color: '#fafafa',
    fontSize: 19,
  },
})
