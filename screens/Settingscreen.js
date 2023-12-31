import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// Conditionally import PermissionsAndroid based on the platform
let PermissionsAndroidModule = null;
if (Platform.OS === 'android') {
  PermissionsAndroidModule = require('react-native').PermissionsAndroid;
}

const Settingscreen = () => {
  const navigation = useNavigation(); // Use useNavigation hook

  const [contactsPermission, setContactsPermission] = useState(false);
  const [imagesPermission, setImagesPermission] = useState(false);

  const handleContactsToggle = async () => {
    if (Platform.OS === 'android' && PermissionsAndroidModule) {
      try {
        const granted = await PermissionsAndroidModule.request(
          PermissionsAndroidModule.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts Permission',
            message: 'MyTalkBuddy needs access to your contacts.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroidModule.RESULTS.GRANTED) {
          setContactsPermission(true);
        } else {
          setContactsPermission(false);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const handleImagesToggle = async () => {
    if (Platform.OS === 'android' && PermissionsAndroidModule) {
      try {
        const granted = await PermissionsAndroidModule.request(
          PermissionsAndroidModule.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Images Permission',
            message: 'MyTalkBuddy needs access to your images.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroidModule.RESULTS.GRANTED) {
          setImagesPermission(true);
        } else {
          setImagesPermission(false);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backArrow}>{'\u2190'}</Text>
        <Text style={styles.backtext}>Back</Text>
      </TouchableOpacity>

      {/* Settings Options */}
      <View style={styles.settingOption}>
        <Text style={styles.settingText}>Contacts Permission</Text>
        <Switch value={contactsPermission} onValueChange={handleContactsToggle} />
      </View>

      <View style={styles.settingOption}>
        <Text style={styles.settingText}>Images Permission</Text>
        <Switch value={imagesPermission} onValueChange={handleImagesToggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white', // Light mode background color
  },
  backButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 30,
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
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 16,
  },
});

export default Settingscreen;
