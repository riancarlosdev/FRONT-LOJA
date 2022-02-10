import { createStore } from "redux";
import { SizeScreenReducer } from "../reducer/sizeScreen.reducer";
import { Provider } from "react-redux";

export const Store = createStore(SizeScreenReducer)

export default function ProviderRedux({children}:any):JSX.Element {
  return (
    <Provider store={Store}>
      {children}
    </Provider>   
  )
}