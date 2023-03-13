import { StyleSheet, Text, Pressable, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PrimaryBtn from '../components/PrimaryBtn'

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient style={s.container} colors={['#fff', '#fff']}>
      <View style={s.titleContainer}>
        <Text style={s.title}>What Number</Text>
        <Text style={s.titleBread}>
          Play against your mobile. You choose a number between 0 and 100 and
          your phone gets ten attempts to guess correctly.
        </Text>
      </View>
      <PrimaryBtn
        title="New Game"
        onPress={() => navigation.navigate('NewGame')}
      />
    </LinearGradient>
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
})
