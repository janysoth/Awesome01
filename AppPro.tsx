import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const AppPro = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'red', // Light blue background
    padding: 10,
    borderRadius: 5, // Optional: rounded corners
  },
  buttonText: {
    color: '#FFFFFF', // White text
  },
  darkBackground: {
    backgroundColor: '#000000', // Dark background for dark mode
  },
  lightBackground: {
    backgroundColor: '#FFFFFF', // Light background for light mode
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
