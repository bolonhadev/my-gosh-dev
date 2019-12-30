export function recSessionRequest(paramns){
  return{
    type: 'recSessionRequest',
    userRole: paramns.userRole,
    girlTxt: paramns.girlTxt,
    language: paramns.language
  }
}
export function recSessionSuccess(paramns){
  return{
    type: 'recSessionSuccess',
    paramns,
  }
}
