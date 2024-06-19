import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Title from '../Resources/TItleLogin.png';
import C1Button from '../Functions/CustomButton1';
export default function Login() {
    const [stats, setStats] = React.useState({
        emailinput: '',
        signupCont: false,
        username: '',
        age: '',
        password: '',
    });

    const handleMailPress = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(stats.emailinput)) {
            setStats({ ...stats, signupCont: true });
        } else {
            alert('Invalid email address');
        }
    };
    const handleSignInPress = () => {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        const ageRegex = /^[0-9]+$/;
        if (usernameRegex.test(stats.username) && ageRegex.test(stats.age) && stats.password.length >= 8) {
            alert('Valid username, age or password');
        } else {
            alert('Invalid username, age or password');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={Title} style={styles.imageCon} resizeMode="contain" />

            <Text style={styles.createAccountText}>CREATE AN ACCOUNT</Text>

            <Text style={styles.instructionsText}>ENTER YOUR EMAIL TO SIGN UP FOR THIS APP</Text>

            <TextInput
                style={styles.input}
                placeholder="example@domain.com"
                placeholderTextColor="#fff"
                onChangeText={(text) => setStats({ ...stats, emailinput: text })}
            />

            <TouchableOpacity style={styles.button} onPress={handleMailPress}>
                <Text style={styles.buttonText}>SIGN UP WITH EMAIL</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                BY SIGNING UP, YOU AGREE TO OUR TERMS OF SERVICE AND PRIVACY POLICY
            </Text>
            <C1Button text='BackDoor' onPress={() => setStats({ ...stats, signupCont: true })}></C1Button>
            <Modal
                visible={stats.signupCont}
                animationType='slide'
                transparent={false}
            >
                <View style={styles.modalOuter}>
                    <Text style={styles.createAccountText}>CREATE YOUR ACCOUNT</Text>

                    <View style={styles.modalInner}>
                        <Text style={styles.modalText}>ENTER YOUR USER NAME</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="MAKE"
                            placeholderTextColor="#fff"
                            onChangeText={(text) => setStats({ ...stats, username: text })}
                        />

                        <Text style={styles.modalText}>ENTER YOUR AGE</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="AGE"
                            placeholderTextColor="#fff"
                            keyboardType='numeric'
                            onChangeText={(text) => setStats({ ...stats, age: text })}
                            maxLength={3}
                        />

                        <Text style={styles.modalText}>ENTER YOUR PASSWORD</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="PASSWORD"
                            placeholderTextColor="#fff"
                            secureTextEntry
                            onChangeText={(text) => setStats({ ...stats, password: text })}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
                            <Text style={styles.buttonText}>CONTINUE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    },
    instructionsText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#0052cc',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#0052cc',
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
    },
});

