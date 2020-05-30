import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from './pages/initial';
import List from './pages/list';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Initial" component={Initial} />
                <AppStack.Screen name="Detail" component={List} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}