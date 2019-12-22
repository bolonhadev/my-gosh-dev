// import React from "react"
// import { Provider } from "react-redux"

// import store from "./src/states"

// export const wrapRootElement = ({ element }) => {
//   return (
//     <Provider store={store}>
//       {element}
//     </Provider>
//   )
// }

export { default as wrapRootElement } from './src/states/modules/reduxWrapper';