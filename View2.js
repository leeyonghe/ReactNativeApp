import React, { useEffect, useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ActivityIndicator
} from 'react-native';
import AppServer from '../Core/AppServer';

import { CoreContext, CoreConsumer } from './Core/CoreManagement';

export default function View2(props) {

  const { route } = props;
  
  const { params } = route;

  const result = useContext( CoreContext )

  console.log(result.tag+' View1 ');

  useEffect(() => {
    const focus = props.navigation.addListener('focus', async () => {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>> View2');
    });
    return focus;
  }, [props.navigation]);

  return (
    <CoreConsumer>
    {
      ( { value } ) => (
        <View>
          <Text>This is the Value : {value}</Text>
        </View>
      )
    }
    </CoreConsumer>
  );

};