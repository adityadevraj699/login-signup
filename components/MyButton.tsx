import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const MyButton = ({ title = "Continue", onPress }: { title?: string; onPress?: () => void }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.button,
        isPressed && styles.buttonPressed // Apply pressed effect
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff7f50',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10, // Android shadow
  },
  buttonPressed: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 4,
    transform: [{ translateY: 2 }], // Pressed down effect
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'rgba(0,0,0,0.25)', // subtle 3D text shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

export default MyButton;
