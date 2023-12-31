// HomeScreen.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UpperHalf = () => {
  return (
    <View style={styles.topHalf}>
      <Image
        source={require('../assets/HomeScreen/HomeScreenUpper.png')}
        style={styles.buddyPic}
        resizeMode="cover" // or "contain" based on your preference
      />
    </View>
  );
};

const BottomHalf = ({ onPress }) => {
  return (
    <View style={styles.bottomHalf}>
      <View style={styles.bottomHalfColor}>
        <TouchableOpacity style={styles.chatButton} onPress={onPress}>
          <Text style={styles.buttonText}>Let's Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleChatPress = () => {
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      <UpperHalf />
      <BottomHalf onPress={handleChatPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buddyPic: {
    width: '100%',
    height: '100%',
  },
  bottomHalf: {
    flex: 0.6,
  },
  bottomHalfColor: {
    flex: 1,
    backgroundColor: '#EDBF21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButton: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 110,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
