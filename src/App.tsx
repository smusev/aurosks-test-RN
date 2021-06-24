import React from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Creator from './components/Creator';
import Evaluator from './components/Evaluator'
import { getData } from './store/actions/actions'

const App = () => {
    const dispatch = useDispatch();
    const Tab = createMaterialTopTabNavigator();
    dispatch(getData())

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Evaluator" component={Evaluator} />
                <Tab.Screen name="Creator" component={Creator} />
            </Tab.Navigator>
        </NavigationContainer>
      );
};

export default App;
