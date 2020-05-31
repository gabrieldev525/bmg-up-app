import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from './pages/initial';
import List from './pages/list';
import Form from './pages/form';
import StoreValue from './pages/storeValue'
import RescueValue from './pages/rescueValue'

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Initial" component={Initial} />
                <AppStack.Screen name="List" component={List} />
                <AppStack.Screen name="Form" component={Form} />
                <AppStack.Screen name="StoreValue" component={StoreValue} />
                <AppStack.Screen name="RescueValue" component={RescueValue} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}