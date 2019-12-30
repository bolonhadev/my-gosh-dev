import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'MGD',
    storage,
    whitelist: ['welcome', 'girl', 'languages', 'session']
  }, 
    reducers
  )

  return persistedReducer
}