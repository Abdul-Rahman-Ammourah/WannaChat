import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet,Modal } from 'react-native';
import Title from '../Resources/TItleLogin.png';
export default function Login() {
    const [stats, setStats] = React.useState({
        emailinput: '',
        signupCont:false,
    });

    const handleMailPress = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(stats.emailinput)) {
            // email is valid
            return setStats({ ...stats, emailinput: true })
        } else {
            alert('Invalid email address');
            return;
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
            {/* <Text style={styles.footerText}>ALREADY HAVE AN ACCOUNT? SIGN IN</Text> */}
            <Modal
                visible={stats.signupCont}
                >
                <View>
                    <Text>hello</Text>
                    <C1Button text="hello" onPress={() => setStats({ ...stats, signupCont:false })} />
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
});
