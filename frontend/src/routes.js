import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from './pages/initial';
import GoalList from './pages/goalList';
import InvestList from './pages/investList';
import StoreValue from './pages/storeValue'
import RescueValue from './pages/rescueValue'
import ValueDetail from './pages/valueDetail';
import InvestDetail from './pages/investDetail';
import Simulation from './pages/simulation';
import Form from './pages/form';
import QuizPage1 from './pages/quiz/Page_1';
import QuizPage2 from './pages/quiz/Page_2';
import QuizPage3 from './pages/quiz/Page_3';
import QuizPage4 from './pages/quiz/Page_4';
import Profile from './pages/profile'
import Splash from './pages/splash'

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                initialRouteName='Splash'
                screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Splash" component={Splash} />
                <AppStack.Screen name="StoreValue" component={StoreValue} />
                <AppStack.Screen name="RescueValue" component={RescueValue} />
                <AppStack.Screen name="InvestDetail" component={InvestDetail} />
                <AppStack.Screen name="ValueDetail" component={ValueDetail} />
                <AppStack.Screen name="InvestList" component={InvestList} />
                <AppStack.Screen name="Initial" component={Initial} />
                <AppStack.Screen name="GoalList" component={GoalList} />
                <AppStack.Screen name="Simulation" component={Simulation} />
                <AppStack.Screen name="Form" component={Form} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="QuizPage1" component={QuizPage1} />
                <AppStack.Screen name="QuizPage2" component={QuizPage2} />
                <AppStack.Screen name="QuizPage3" component={QuizPage3} />
                <AppStack.Screen name="QuizPage4" component={QuizPage4} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
