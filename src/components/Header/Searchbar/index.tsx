import React, { useState, useRef } from 'react';
import { View, TextInput, Animated } from 'react-native';
import { styles } from './style';

type Props = {
  onChange: (text: string) => void;
  scrollY: Animated.Value; // Pass scrollY from parent (Home)
};

export default function Searchbar({ onChange, scrollY }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const focusAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(focusAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(focusAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: focusAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -10], // Moves up when focused
              }),
            },
            {
              scale: scrollY.interpolate({
                inputRange: [0, 100],
                outputRange: [1, 0.85], // Shrinks when scrolling
                extrapolate: 'clamp',
              }),
            },
          ],
          opacity: isFocused
            ? 1
            : scrollY.interpolate({
                inputRange: [0, 100],
                outputRange: [1, 0.6], // Fades out when scrolling
                extrapolate: 'clamp',
              }),
        },
      ]}
    >
      <TextInput
        style={[styles.searchBar__unclicked, styles.input]}
        placeholder="Cari"
        onChangeText={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Animated.View>
  );
}
