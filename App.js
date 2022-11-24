import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Store/store';
import StartComponent from './src/StartComponent';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StartComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
