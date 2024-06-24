import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Modal, } from 'react-native';
import Title from '../assets/WannaChatTitle.png';
import C1Button from '../Functions/CustomButton1';
import CreateAccount from './CreateAccount';
export default function Signup() {
    const [stats, setStats] = React.useState({
        showUser: false,
        signupCont: false,
        
    });
    const [user,setUser] = React.useState({
        emailinput: '',
        username: '',
        age: '',
        password: '',
        Id: 0
    });

    const handleCreateNewAccountPress = () => {
        
    };
    const handleLoginPress = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(user.emailinput)) {
            if (user.password.length >= 8) {
                alert('Valid email address or password ');
            }
            else{
                alert('Invalid email address or password ');
            }
        } else {
            alert('Invalid email address or password ');
        }

    };
    
    //Main
    return (
        <View style={styles.container}>
            <Image source={Title} style={styles.imageCon} resizeMode="contain" />

            <Text style={styles.createAccountText}>Welcome to my Sweet little chatting App</Text>

            <Text style={styles.instructionsText}>Login or Create a new Account</Text>

            <TextInput
                style={styles.input}
                placeholder="example@domain.com"
                placeholderTextColor="#fff"
                onChangeText={(text) => setUser({ ...user, emailinput: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#fff"
                onChangeText={(text) => setUser({ ...user, password: text })}
            />

            <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleCreateNewAccountPress}>
                <Text style={styles.buttonText}>Create a New Account</Text>
            </TouchableOpacity>

            <C1Button text='BackDoor' onPress={() => setStats({ ...stats, signupCont: true })}></C1Button>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        
    },
    imageCon: {
        height: 120,
        width: 300,
        marginBottom: 20,
    },
    createAccountText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#000',
    },
    instructionsText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#000',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    footerText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#666',
        marginTop: 20,
    },
    modalOuter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    modalInner: {
        width: '100%',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    modalText: {
        fontSize: 14,
        marginBottom: 10,
        color: '#000',
    },
});
