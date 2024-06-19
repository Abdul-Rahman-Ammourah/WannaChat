import React from "react";
import { View, Text, Modal,StyleSheet } from "react-native";
import Style from "./Style/Model";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./Pages/Signup";
import Home from "./Pages/Home";
import { enableScreens } from 'react-native-screens';enableScreens();
export default function App() {
  const [stats, setStats] = React.useState({
    ModalVisible:false
  })

  const Tab = createBottomTabNavigator();



  return (
    <Login></Login>
  );
}