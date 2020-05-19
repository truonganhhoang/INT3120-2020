import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './data/Store';

import MyDrawer from './screens/Drawer';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}

        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>

        {/* </PersistGate> */}
      </Provider>
    );
  }

}
