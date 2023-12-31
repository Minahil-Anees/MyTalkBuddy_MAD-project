import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const AboutUsScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Feather name="arrow-left" size={24} color="black" />
        <Text style={styles.backtext}>Back</Text>
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>About Us</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            The purpose of our MyTalkBuddy is to help children interact with their virtual buddies so that they know how to interact with strangers. It boosts their confidence as well.
          </Text>
        </View>
        <Text style={styles.version}>MyTalkBuddy</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDBF21',
    padding: 20,
  },
  backButton: {
    backgroundColor: '#EDBF21',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backArrow: {
    color: 'black',
    fontSize: 24,
    marginRight: 10,
  },
  backtext: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black', // Yellow color
  },

  textContainer: {
    backgroundColor: 'white', 
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%', // Take full width of the screen
  },
  text: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  version: {
    fontStyle: 'italic',
    marginTop: 10, // Reduced margin
    color: 'black',
    lineHeight: 20, // Adjusted line height
  },
});

export default AboutUsScreen;
