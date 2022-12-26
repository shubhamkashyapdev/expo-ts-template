import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './stackNavigator/HomeStackNavigator'
import ProfileStackNavigator from './stackNavigator/ProfileStackNavigator'
import WalletStackNavigator from './stackNavigator/WalletStackNavigator'
import HistoryStackNavigator from './stackNavigator/HistoryStackNavigator'
import { IconButton } from 'react-native-paper'

const Tab = createBottomTabNavigator()

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
             name={"HomeStackNavigator"}
             component={HomeStackNavigator}
             
             options={{
                 tabBarLabel: "Home",
                 headerShown:false,
                 tabBarIcon: ({ color }) => (
                     <IconButton  icon="home"/>
                 ),
             }}
            />
            <Tab.Screen 
             name={"ProfileStackNavigator"}
             component={ProfileStackNavigator}
             options={{
                 tabBarLabel: "Profile",
                 headerShown:false,
                 tabBarIcon: ({ color }) => (
                     <IconButton  icon="account"/>
                 ),
             }}
            />
            <Tab.Screen 
             name={"WalletStackNavigator"}
             component={WalletStackNavigator}
             options={{
                 tabBarLabel: "Wallet",
                 headerShown:false,
                 tabBarIcon: ({ color }) => (
                     <IconButton  icon="wallet"/>
                 ),
             }}
            />
            <Tab.Screen 
             name={"HistoryStackNavigator"}
             component={HistoryStackNavigator}
             options={{
                 tabBarLabel: "History",
                 headerShown:false,
                 tabBarIcon: ({ color }) => (
                     <IconButton  icon="history"/>
                 ),
             }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator