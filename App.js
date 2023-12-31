
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen';
import ChatScreen from './screens/Chatscreen';
import Menuscreen from './screens/Menuscreen'; 
import ProfileScreen from './screens/Profilescreen';
import AboutUsScreen from './screens/Aboutusscreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyscreen';
import SettingsScreen from './screens/Settingscreen';
import Settingscreen from './screens/Settingscreen';
import NotificationScreen from './screens/Notificationscreen';
import Feedbackscreen from './screens/Feedbackscreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Menu" component={Menuscreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="About" component={AboutUsScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Setting" component={Settingscreen} />
        <Stack.Screen name="Feedbackscreen" component={Feedbackscreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
       

     


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;