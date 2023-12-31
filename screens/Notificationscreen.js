import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [hasNotification, setHasNotification] = useState(true);
  const [appUpdatedNotification, setAppUpdatedNotification] = useState(true);

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backArrow}>{'\u2190'}</Text>
        <Text style={styles.backtext}>Back</Text>
      </TouchableOpacity>
 
      
      <Text style={styles.header}>Notifications</Text>
       {/* Black Bell Icon */}
      <Icon
            name="bell"
            type="material-community"
            color="black"
            size={60}
            style={styles.bellIcon}
    />
      {/* Notification Content */}
      {hasNotification ? (
        <View style={styles.notificationContainer}>
          {appUpdatedNotification ? (
            <Text style={styles.notificationText}>Your app is updated!</Text>
          ) : (
            <Text style={styles.notificationText}>You have a new notification!</Text>
          )}
        </View>
      ) : (
        <View style={styles.noNotificationContainer}>
          <Text style={styles.noNotificationText}>No Notifications yet.</Text>
        </View>
      )}

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EDBF21', // Yellow background color
  },
  backButton: {
    backgroundColor: 'EDBF2',
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  notificationText: {
    alignItems: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  noNotificationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noNotificationText: {
    fontSize: 18,
    color: 'gray',
    alignItems: 'center',
  },
  bellIcon: {
    alignSelf: 'center', // Align to the center of the container
    marginTop: 20,
  },
});

export default NotificationScreen;
