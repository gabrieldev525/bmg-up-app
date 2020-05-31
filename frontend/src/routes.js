import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from './pages/initial';
import GoalList from './pages/goalList';
import InvestList from './pages/investList';
import List from './pages/list';
import ValueDetail from './pages/valueDetail';
import InvestDetail from './pages/investDetail';
import Simulation from './pages/simulation';
import Form from './pages/form';


const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="InvestDetail" component={InvestDetail} />
                <AppStack.Screen name="ValueDetail" component={ValueDetail} />
                <AppStack.Screen name="InvestList" component={InvestList} />
                <AppStack.Screen name="Initial" component={Initial} />
                <AppStack.Screen name="GoalList" component={GoalList} />
                <AppStack.Screen name="List" component={List} />
                <AppStack.Screen name="Simulation" component={Simulation} />
                <AppStack.Screen name="Form" component={Form} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}