import React from 'react'
import { useSelector } from 'react-redux'
import { addLocale, useLocale } from 'ttag'

// console.log('mermao1: ')

export function ChangeLanguage(myLanguage) {
  // const useStore = useSelector((store) => store)
  // const myLanguage = useStore.languages.my_state_machine.language
  const translationsObj = require(`../../i18n/${myLanguage}.po.json`)
  addLocale(myLanguage, translationsObj)
  useLocale(myLanguage)
  console.log(useLocale())
}


export default ChangeLanguage