/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ActivityIndicator,
  Button
} from 'react-native';

import {CoreContext, CoreConsumer} from './Core/CoreManagement';

import {useNavigation} from '@react-navigation/native';

export default function View1(props) {
  const navigation = useNavigation();

  const {route} = props;

  const {params} = route;

  const result = useContext(CoreContext);

  console.log(result.tag + ' View1 ');
  console.log(result.tag + ' View1 ' + result.value);

  const [backValue , SetbackValue] = useState(result.value);

  useEffect(() => {
    const focus = props.navigation.addListener('focus', async () => {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>> View1 Refresh');
      console.log(
        '>>>>>>>>>>>>>>>>>>>>>>>>>>>> props ' + JSON.stringify(props),
      );
      SetbackValue(result.value);
    });
    return focus;
  }, [props, props.navigation]);

  return (
    <CoreConsumer>
      {({value, SetValue}) => (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#828192',
          }}>
          <Text>View1 : {backValue} </Text>
          <Button
            title="Next"
            onPress={() => {
              SetValue(backValue + 1);
              navigation.navigate('View2');
            }}
          />
        </View>
      )}
    </CoreConsumer>
  );
}
