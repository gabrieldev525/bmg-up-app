import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from './pages/initial';
import GoalList from './pages/goalList';
import InvestList from './pages/investList';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="InvestList" component={InvestList} />
                <AppStack.Screen name="Initial" component={Initial} />
                <AppStack.Screen name="GoalList" component={GoalList} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}