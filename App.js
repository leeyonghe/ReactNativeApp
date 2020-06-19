/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import CoreProvider from './Core/CoreManagement';

import RouteGroup from './Screens/RouteGroup';

const App: () => React$Node = () => {
  
  return (
    <>
      <CoreProvider>
        <RouteGroup />
      </CoreProvider>
    </>
  );
  
};

export default App;