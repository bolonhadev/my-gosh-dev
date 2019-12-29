import { createStore, applyMiddleware, compose } from 'redux'

import persistReducers from './persistReducers'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(applyMiddleware(sagaMiddleware))

const persistStore = persistReducers(rootReducer)

const store = createStore(persistStore,enhancer)

sagaMiddleware.run(rootSaga)

export default store