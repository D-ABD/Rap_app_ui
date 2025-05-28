import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

type NotificationButtonProps = {
  onPress?: () => void
  showBadge?: boolean
}

export default function NotificationButton({
  onPress,
  showBadge = true,
}: NotificationButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
      <View style={styles.iconWrapper}>
        <FontAwesome5 name="bell" size={20} color="#6C63FF" />
      </View>

      {showBadge && <View style={styles.badge} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 100,
  },
  iconWrapper: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#fff',
  },
})
