/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { persistor, store } from './src/store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import ToastManager from 'toastify-react-native';

function App() {

  return (

    <Provider store={store}>
      <SafeAreaProvider>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
          <ToastManager />
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
}


export default App;
