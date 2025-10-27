import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet}  from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

function HomeMenu() {
    return(


      
        <Tab.Navigator screenOptions= { {tabBarShowLabel: false }}>

            <Tab.Screen name="Home" component={ Home } options={
                {tabBarIcon: () => <SimpleLineIcons name="home" size={24} color="black" />}
            }/>
            <Tab.Screen name="Profile" component= { Profile } options={
                {tabBarIcon: () => <AntDesign name="profile" size={24} color="black" />}
            }/>
        </Tab.Navigator>
       
    )
}

export default HomeMenu;