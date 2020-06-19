import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { CoreConsumer, CoreContext } from '../Core/CoreManagement';

const Stack = createStackNavigator();

import View1 from './View1';
import View2 from './View2';
import View3 from './View3';

export default function RouteGroup(props) {

  const result = useContext( CoreContext )

  console.log(result.tag+' Route ');
  console.log(result.tag+' Route result : '+JSON.stringify(result));

  return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'} initialRouteName="View1">
            <Stack.Screen name="View1" component={View1}/>
            <Stack.Screen name="View2" component={View2}/>
            <Stack.Screen name="View3" component={View3}/>
        </Stack.Navigator>
      </NavigationContainer>
  );

};