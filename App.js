import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, StyleSheet } from "react-native";
import Contacts from "./src/page/Contacts";
import Information from "./src/page/Information";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Contacts" component={Contacts}/>
        <Drawer.Screen name="Information" component={Information}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};