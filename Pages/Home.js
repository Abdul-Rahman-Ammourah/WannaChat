import React from "react";
import { View, Text,Image,StyleSheet } from "react-native";
import C1Button from "../Functions/CustomButton1";
import UnderCons from "../assets/Under-Construction.png"


export default function Home () {
    return (
        <View style={style.container}>
            <Image source={UnderCons} style={style.Image}/>
            <Text style={style.Text}>This page is Under Construction</Text>
            <Text style={style.Text}>Thank you </Text>
            <Text style={style.Text}>for your understanding</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    Image:{
        width:200,
        height:200,
        alignSelf:"center",
        justifyContent:"center",
    },
    Text:{
        fontSize: 22,
        color: '#000',
        fontWeight:'bold'
    }
})