import React from 'react';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack'
import { Home, OnboardingChakra, OnboardingMetta, OnboardingPrimordial } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const LeftTransition = {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}

const MyTab = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#2748C9',
          }}
            initialRouteName="utama">
            <Tab.Screen
                name="utama" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color,size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnboardingChakra">
            <Stack.Screen name="Chakra" component={OnboardingChakra} options={LeftTransition} />
            <Stack.Screen name="Primordial" component={OnboardingPrimordial} options={LeftTransition} />
            <Stack.Screen name="Metta" component={OnboardingMetta} options={LeftTransition} />
            <Stack.Screen name="Home" component={MyTab} />
        </Stack.Navigator>
    )
}

export default Router;