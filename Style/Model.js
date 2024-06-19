import React from "react";
import { StyleSheet } from "react-native";


const Style = StyleSheet.create({
    modalOuter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    modalinner: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:300,
        height: 200,
        alignItems: 'center',
    }
});

export default Style;