import { combineReducers } from 'redux'

import welcome from './welcome/reducer'
import girl from './girl/reducer'

export default combineReducers({
  welcome, girl
})