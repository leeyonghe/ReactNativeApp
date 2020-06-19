/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {CoreProvider} from './Core/CoreManagement';

import Route from './Route';

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
