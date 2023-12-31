
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons'; // Import Feather icon from Expo vector icons

const ProfileScreen = ({ navigation }) => {
    const [editableFields, setEditableFields] = useState({
        firstName: false,
        lastName: false,
        petName: false,
    });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [petName, setPetName] = useState('');
    const [showSavedMessage, setShowSavedMessage] = useState(false);

    useEffect(() => {
        // Load user details from local storage when the component mounts
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        try {
            // Retrieve user details from local storage
            const storedFirstName = await AsyncStorage.getItem('firstName');
            const storedLastName = await AsyncStorage.getItem('lastName');
            const storedPetName = await AsyncStorage.getItem('petName');

            // Set the state with retrieved values
            setFirstName(storedFirstName || '');
            setLastName(storedLastName || '');
            setPetName(storedPetName || '');
        } catch (error) {
            console.error('Error loading user details:', error);
        }
    };

    const saveUserDetails = async () => {
        try {
            // Save user details to local storage
            await AsyncStorage.setItem('firstName', firstName);
            await AsyncStorage.setItem('lastName', lastName);
            await AsyncStorage.setItem('petName', petName);

            // Show the saved message
            setShowSavedMessage(true);

            // Hide the saved message after 2 seconds
            setTimeout(() => {
                setShowSavedMessage(false);
            }, 2000);
        } catch (error) {
            console.error('Error saving user details:', error);
        }
    };

    const handleEdit = (field) => {
        setEditableFields((prev) => ({ ...prev, [field]: true }));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={24} color="black" />
                <Text style={styles.backtext}>Back</Text>
            </TouchableOpacity>
            {showSavedMessage && <Text style={styles.savedMessage}>Details saved Successfully!</Text>}
            <Text style={styles.heading}>Personal Details</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>First Name:</Text>
                <View style={styles.inputWrapper}>
                    {editableFields.firstName ? (
                        <TextInput
                            style={styles.input}
                            value={firstName}
                            onChangeText={setFirstName}
                            onBlur={() => setEditableFields((prev) => ({ ...prev, firstName: false }))}
                        />
                    ) : (
                        <Text style={styles.value}>{firstName}</Text>
                    )}
                    <TouchableOpacity onPress={() => handleEdit('firstName')}>
                        <Feather name="edit" size={20} color="blue" style={styles.editIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name:</Text>
                <View style={styles.inputWrapper}>
                    {editableFields.lastName ? (
                        <TextInput
                            style={styles.input}
                            value={lastName}
                            onChangeText={setLastName}
                            onBlur={() => setEditableFields((prev) => ({ ...prev, lastName: false }))}
                        />
                    ) : (
                        <Text style={styles.value}>{lastName}</Text>
                    )}
                    <TouchableOpacity onPress={() => handleEdit('lastName')}>
                        <Feather name="edit" size={20} color="blue" style={styles.editIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Pet Name:</Text>
                <View style={styles.inputWrapper}>
                    {editableFields.petName ? (
                        <TextInput
                            style={styles.input}
                            value={petName}
                            onChangeText={setPetName}
                            onBlur={() => setEditableFields((prev) => ({ ...prev, petName: false }))}
                        />
                    ) : (
                        <Text style={styles.value}>{petName}</Text>
                    )}
                    <TouchableOpacity onPress={() => handleEdit('petName')}>
                        <Feather name="edit" size={20} color="blue" style={styles.editIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={saveUserDetails}>
                <Text style={styles.buttonText}>Save</Text>
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
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        minHeight: 40,  // Set minHeight to ensure a fixed height
    },
    
    input: {
        flex: 1,
        height: 40,
        padding: 10,
    },
    value: {
        flex: 1,
        fontSize: 16,
        marginBottom: 10,
        color: 'black',
    },
    editIcon: {
        marginLeft: 10,
    },
    button: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 90,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    savedMessage: {
      
        position: 'absolute',
        bottom: 100, // Adjust the bottom position as needed
        alignSelf: 'center',
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
          },
});

export default ProfileScreen;
