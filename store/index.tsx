import { createStore } from "redux";
import { Provider } from "react-redux";

import combineReducer from '../reducer/index';

export const Store = createStore(combineReducer)

export default function ProviderRedux({children}:any):JSX.Element {
  return (
    <Provider store={Store}>
      {children}
    </Provider>   
  )
}