import React from 'react'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import persistReducers from './persistReducers'
// import I18n from '../components/i18n'

export default ({ element, store=createStore(persistReducers(rootReducer)), persistor=persistStore(store) }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {element}
    </PersistGate>
  </Provider>
)