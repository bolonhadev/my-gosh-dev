import { combineReducers } from 'redux'

import welcome from './Welcome/reducer'
import girl from './Girl/reducer'
import languages from './Languages/reducer'
import session from './Session/reducer'

export default combineReducers({
  welcome, girl, languages, session
})