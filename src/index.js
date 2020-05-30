import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom';
import { store, persistor } from './store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
