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

/*

Context 오브젝트에 포함된 React 컴포넌트인 Provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 합니다.

Provider 는 value prop를 받아서 이 값을 하위에 있는 컴포넌트에게 전달합니다. 값을 전달받을 수 있는 컴포넌트의 수에 제한은 없습니다. Provider 하위에 또 다른 Provider를 배치하는 것도 가능하며, 이 경우 하위 Provider의 값이 우선시됩니다.

Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 value prop가 바뀔 때마다 다시 렌더링 됩니다. Provider로부터 하위 consumer(.contextType와 useContext을 포함한)로의 전파는 

shouldComponentUpdate 메서드가 적용되지 않으므로, 상위 컴포넌트가 업데이트를 건너 뛰더라도 consumer가 업데이트됩니다.

context 값의 바뀌었는지 여부는 Object.is와 동일한 알고리즘을 사용해 이전 값과 새로운 값을 비교해 측정됩니다.

*/
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
