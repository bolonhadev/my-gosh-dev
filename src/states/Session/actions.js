export function recSessionRequest(paramns){
  return{
    type: 'recSessionRequest',
    paramns
  }
}
export function recSessionSuccess(paramns){
  return{
    type: 'recSessionSuccess',
    paramns,
  }
}
