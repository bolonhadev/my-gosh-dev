import { combineReducers } from 'redux'

import welcome from './Welcome/reducer'
import girl from './Girl/reducer'
import languages from './Languages/reducer'

export default combineReducers({
  welcome, girl, languages
})