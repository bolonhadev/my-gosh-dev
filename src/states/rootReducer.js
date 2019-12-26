import { combineReducers } from 'redux'

import welcome from './Welcome/reducer'
import girl from './Girl/reducer'

export default combineReducers({
  welcome, girl
})