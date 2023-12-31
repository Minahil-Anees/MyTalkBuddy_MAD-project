import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 

const FeedbackScreen = () => {
  const navigation = useNavigation();
  const [feedback, setFeedback] = useState('');

  const handleSendFeedback = () => {
    // Check if feedback is not empty
    if (feedback.trim() !== '') {
      // Handle sending feedback logic here
      console.log('Feedback sent:', feedback);
      // You can implement logic to send feedback to your server or perform other actions.

      // Show feedback sent message
      Alert.alert('Feedback Sent', 'Thank you for your feedback!');
      
      // Clear the feedback input
      setFeedback('');
    } else {
      // Show an alert if feedback is empty
      Alert.alert('Error', 'Please enter your feedback before sending.');
    }
  };

  const handleBackPress = () => {
    // Navigate to the menu screen
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Feather name="arrow-left" size={24} color="black" />
        <Text style={styles.backtext}>Back</Text>
      </TouchableOpacity>

      {/* Feedback Input */}
      <View style={styles.feedbackContainer}>
        <TextInput
          style={styles.feedbackInput}
          multiline
          placeholder="Enter your feedback here..."
          value={feedback}
          onChangeText={(text) => setFeedback(text)}
          textAlignVertical="top" // Add this line to move the placeholder to the top
        />
      </View>

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSendFeedback}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
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
  backtext: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 0,
  },
  feedbackContainer: {
    flex: 1,
    justifyContent: 'center', // Center items vertically
    marginBottom: 20, // Add margin at the bottom
  
  },
  feedbackInput: {
    width: '100%',
    height: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  sendButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
   // position: 'absolute',
    bottom: 170, 
  },
  sendButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FeedbackScreen;
