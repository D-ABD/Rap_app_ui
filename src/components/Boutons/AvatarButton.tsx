import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

type AvatarButtonProps = {
  onPress?: () => void
  iconColor?: string
  size?: number
}

export default function AvatarButton({
  onPress,
  iconColor = '#6C63FF',
  size = 20,
}: AvatarButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
      <View style={styles.iconWrapper}>
        <FontAwesome5 name="user" size={size} color={iconColor} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
  },
  iconWrapper: {
    padding: 8,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
