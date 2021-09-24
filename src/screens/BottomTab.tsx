import React from 'react';
import { Text, View }  from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Message from '../components/Message';
import Users from '../components/Users';


function Feed() {
    return (
        <View style ={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          
            <Users />
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignContent: 'center'}}>
            <Message/>
            <Text>Profile !</Text>

        </View>
    )
}

function Notifications() {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Notification !</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs () {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveBackgroundColor: '#ffffff',
            }}
        >

            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Home',

                }}
            />


            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Update',

                }}
            />


            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',

                }}
            />

        </Tab.Navigator>
    )
}

export default MyTabs;