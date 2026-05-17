import { View, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'

export default function CustomToggle() {
  const [enabled, setEnabled] = useState(false)

  const translateX = useRef(new Animated.Value(2)).current
  const mounted = useRef(true)

  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  const toggleSwitch = () => {
    Animated.timing(translateX, {
      toValue: enabled ? 2 : 26,
      duration: 200,
      useNativeDriver: true,
    }).start()

    if (mounted.current) {
      setEnabled((prev) => !prev)
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleSwitch}
      className={`w-[56px] h-[28px] rounded-full px-[2px] justify-center ${
        enabled ? 'bg-[#0066FF]' : 'bg-[#B9B9BF]'
      }`}
    >
      <Animated.View
        style={{
          transform: [{ translateX }],
        }}
        className='w-[28px] h-[24px] rounded-full bg-white'
      />
    </TouchableOpacity>
  )
}   