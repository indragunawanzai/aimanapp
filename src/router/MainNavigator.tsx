import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/home/HomeScreen';
import ProfileScreen from '../screen/profile/ProfileScreen';
import SplashScreen from '../screen/splashscreen/SplashScreen';
import LoginScreen from '../screen/auth/login/LoginScreen';
import LandingAuth from '../screen/auth/LandingAuth';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainApp() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // tabBarLabel: ({ focused }) => {
                //     return <Text style={{ color: 'red' }}>{focused ? route.name : ""}</Text>
                // },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'person'
                            : 'person-outline'
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                // tabBarStyle: { height: responsiveHeight(95) },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="LandingAuth"
                component={LandingAuth}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator
