/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Route from './Route';

import CoreProvider from './Core/CoreManagement';

const App: () => React$Node = () => {
  return (
    <>
      <CoreProvider>
        <Route />
      </CoreProvider>
    </>
  );
};

export default App;
