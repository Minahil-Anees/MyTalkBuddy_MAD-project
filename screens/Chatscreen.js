// import React, { useState } from 'react';
// import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';


// const ChatScreen = () => {
//   const [inputText, setInputText] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const handleMicPress = async () => {
//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//           model: 'gpt-3.5-turbo',
//           messages: [{ role: 'user', content: 'what is the capital of pakistan ?' }],
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer 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',
//           },
//         }
//       );
  
//       const modelResponse = response.data.choices[0].message.content;
//       console.log('Model response:', modelResponse);
  
//       // Use the model response in your application (e.g., update state, display in UI, etc.)
//     } catch (error) {
//       console.error('Error making API request:', error.message);
//     }
//   };

//   const UpperHalf = () => {
//     return (
//       <View style={styles.topHalf}>
//         {/* You can replace the image source with the desired image for the upper half */}
//         <Image
//           source={require('../assets/HomeScreen/HomeScreenUpper.png')}
//           style={styles.buddyPic}
//           resizeMode="cover"
//         />
//       </View>
//     );
//   };
  
//   const BottomHalf = ({ onPress }) => {
//     return (
//       <View style={styles.bottomHalf}>
//         <View style={styles.bottomHalfColor}>
//           {/* Replace the TouchableOpacity with an Image component for the mic button */}
//           <TouchableOpacity style={styles.micButton} onPress={() => onPress()}>
//             <Image source={require('../assets/ChatScreen/micIcon.png')} style={styles.micIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
  
  

//   const handleMenuPress = () => {
//     navigation.navigate('Menu');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Add the menu button with a custom image */}
//       <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//         <Image source={require('../assets/menu.png')} style={styles.menuIcon} />
//       </TouchableOpacity>

//       <UpperHalf />
//       <BottomHalf onPress={handleMicPress} />

//     </View>
//   );
// };

// // ... (remaining code)


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topHalf: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//   },
//   buddyPic: {
//     width: '100%',
//     height: '100%',
//   },
//   bottomHalf: {
//     flex: 0.6, // Adjusted to be less than 1
//   },
//   bottomHalfColor: {
//     flex: 1,
//     backgroundColor: '#EDBF21',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   micButton: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 50, // Increased the border radius for a circular button
//   },
//   micIcon: {
//     width: 50,
//     height: 50,
//   },
//   // Menu button styles
//   menuButton: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     zIndex: 1,
//   },
//   menuIcon: {
//     width: 30,
//     height: 30,
//   },
// });

// export default ChatScreen;
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [showSystemMessage, setShowSystemMessage] = useState(true);

  useEffect(() => {
    if (showSystemMessage) {
      // Display the system message for the first time
      setChatHistory([{ role: 'system', content: 'Hi! You are my buddy.' }]);
      setShowSystemMessage(false); // Hide it for subsequent renders
    }
  }, []); // Use an empty dependency array to ensure this effect runs only once

  const handleMicPress = async () => {
    try {
      let messagesToSend = [];

      // Check if it's the first user input, and don't send the system message
      if (!inputText && !showSystemMessage) {
        messagesToSend = [...chatHistory, { role: 'assistant', content: 'You are a kind assistant.' }];
      } else {
        messagesToSend = [...chatHistory, { role: 'user', content: inputText }];
      }

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: messagesToSend,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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',
          },
        }
      );

      const modelResponse = response.data.choices[0].message.content;

      // Update state with user and assistant messages
      setChatHistory((prevChat) => [...messagesToSend, { role: 'assistant', content: modelResponse }]);

      // Clear inputText after processing
      setInputText('');
    } catch (error) {
      console.error('Error making API request:', error.message);
    }
  };
  const navigation = useNavigation();
  const handleMenuPress = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
       <Image source={require('../assets/menu.png')} style={styles.menuIcon} />
     </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.chatHistoryContainer}>
        {chatHistory.map((message, index) => (
          <View
            key={index}
            style={message.role === 'user' ? styles.userMessageContainer : styles.assistantMessageContainer}
          >
            <Text style={message.role === 'user' ? styles.userMessage : styles.assistantMessage}>
              {message.content}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleMicPress}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDBF21', // Yellow background color
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  chatHistoryContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  userMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF', // User message background color
    borderRadius: 10,
    margin: 5,
    padding: 10,
    maxWidth: '80%',
  },
  assistantMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084FF', // Assistant message background color
    borderRadius: 10,
    margin: 5,
    padding: 10,
    maxWidth: '80%',
  },
  userMessage: {
    color: 'black',
  },
  assistantMessage: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Input field background color
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#0084FF', // Send button background color
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
  },
});

export default ChatScreen;
