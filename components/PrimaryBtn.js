import React from 'react'
import Colors from '../utilities/Colors'
import { Pressable, Text, StyleSheet } from 'react-native'

export default function PrimaryBtn({ onPress, title, isDisabled }) {
  return (
    <Pressable
      style={[s.primaryBtn, isDisabled === true ? s.disabled : '']}
      onPress={onPress}
      disabled={isDisabled ? true : false}
    >
      <Text style={s.primaryBtnText}>{title}</Text>
    </Pressable>
  )
}

const s = StyleSheet.create({
  primaryBtn: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 6,
  },
  primaryBtnText: {
    color: '#fafafa',
    fontSize: 19,
  },
  disabled: {
    opacity: 0.3,
  },
})
