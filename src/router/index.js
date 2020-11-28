import React from 'react';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack'
import { Home, OnboardingChakra, OnboardingMetta, OnboardingPrimordial } from '../pages';


const Stack = createStackNavigator();
const LeftTransition = {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}
const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Chakra" component={OnboardingChakra} options={LeftTransition} />
            <Stack.Screen name="Primordial" component={OnboardingPrimordial} options={LeftTransition} />
            <Stack.Screen name="Metta" component={OnboardingMetta} options={LeftTransition} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default Router;