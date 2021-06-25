import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Creator from './components/Creator';
import Evaluator from './components/Evaluator'
import { getData } from './store/actions/actions'
import { ApplicationState } from './store/reducers';

const App = () => {
    const dispatch = useDispatch();
    const Tab = createMaterialTopTabNavigator();
    dispatch(getData())
    
    const evCount = useSelector((state: ApplicationState) => state.assessments.evaluatorData.length)
    const crCount = useSelector((state: ApplicationState) => state.assessments.creatorData.length)

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Evaluator" component={Evaluator} options={{ title: `Evaluator (${evCount})` }} />
                <Tab.Screen name="Creator" component={Creator} options={{title: `Creator (${crCount})`}} />
            </Tab.Navigator>
        </NavigationContainer>
      );
};

export default App;
