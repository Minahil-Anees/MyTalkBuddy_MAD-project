
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menuscreen = () => {
  const navigation = useNavigation();
  const handleProfilePress = () => {
    console.log('Navigating to Profile screen');
    navigation.navigate('Profile');
  };

  // const handleSettingsPress = () => {
  //   // Add navigation logic for the Settings screen
  //   navigation.navigate('Setting');
  // };

  const handleNotificationPress = () => {
    // Add navigation logic for the Notification screen
    navigation.navigate('NotificationScreen');
  };

  const handleFeedbackPress = () => {
    // Add navigation logic for the Feedback screen
    navigation.navigate('Feedbackscreen');
  };

  const handlePrivacyPress = () => {
    
    navigation.navigate('PrivacyPolicy');
  };

  const handleSecurityPress = () => {
    // Add navigation logic for the Security screen
  };

  const handleAboutPress = () => {
    navigation.navigate('About');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.menuButton} onPress={handleBackPress}>
        <Text style={styles.backArrow}>{'\u2190'}</Text>
        <Text style={styles.menuText}>Back</Text>
      </TouchableOpacity>

      {/* Menu Buttons */}
      <TouchableOpacity style={styles.menuButton} onPress={handleProfilePress}>
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.menuButton} onPress={handleSettingsPress}>
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.menuButton} onPress={handleNotificationPress}>
        <Text style={styles.menuText}>Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton} onPress={handleFeedbackPress}>
        <Text style={styles.menuText}>Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton} onPress={handlePrivacyPress}>
        <Text style={styles.menuText}>Privacy</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.menuButton} onPress={handleSecurityPress}>
        <Text style={styles.menuText}>Security</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.menuButton} onPress={handleAboutPress}>
        <Text style={styles.menuText}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDBF21', // Yellow background color
    padding: 20,
  },
  menuButton: {
    backgroundColor: '#EDBF21', // Yellow background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backArrow: {
    color: 'black', // Adjusted arrow color
    fontSize: 24,
    marginRight: 10, // Added margin for better spacing
  },
  menuText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Menuscreen;
