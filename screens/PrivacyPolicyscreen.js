import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Feather name="arrow-left" size={24} color="black" />
        <Text style={styles.backtext}>Back</Text>
      </TouchableOpacity>

      {/* Privacy Policy Header */}
      <Text style={styles.privacyHeader}>Privacy Policy</Text>

      {/* Privacy Policy Text */}
      <View style={styles.privacyTextContainer}>
        {/* <Text style={styles.bullet}>•</Text> */}
        <Text style={styles.privacyText}>
          •Welcome to MyTalkBuddy! We are committed to protecting your privacy and ensuring the security of your personal information. {'\n\n'}
          •We may collect device-specific information, including your device's model, operating system version, and unique identifiers. {'\n\n'}
          •We collect data about how you interact with the app, such as the features you use, the content you view, and your interactions with our animated character.
        </Text>
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
  privacyHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  privacyTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white', // Yellow background color
    padding: 15,
    borderRadius: 8,
  },
  bullet: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
  },
  privacyText: {
    fontSize: 16,
    color: 'black',
  },
});

export default PrivacyPolicyScreen;
