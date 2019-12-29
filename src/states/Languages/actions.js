export function changeLanguageRequest(language){
  const translationsObj = require(`../../../i18n/${language}.po.json`)
  return{
    type: 'changeLanguageRequest',
    language,
    translationsObj
  }
}

export function changeLanguageSuccess(language){
  return{
    type: 'changeLanguageSuccess'
  }
}


export function CHANGE_TO_PT_REQUEST(){
  return{
    type: 'CHANGE_TO_PT_REQUEST'
  }
}

export function CHANGE_TO_EN_REQUEST(){
  return{
    type: 'CHANGE_TO_EN_REQUEST'
  }
}

export function CHANGE_TO_PT_SUCCESS(){
  return{
    type: 'CHANGE_TO_PT_SUCCESS'
  }
}

export function CHANGE_TO_EN_SUCCESS(){
  return{
    type: 'CHANGE_TO_EN_SUCCESS'
  }
}
