import { combineReducers } from "redux"

import SizeScreenReducer from './sizeScreen.reducer'
import sidePreviewProduct from "./side-preview-product.reducer"

export default combineReducers({
  screen: SizeScreenReducer!,
  side: sidePreviewProduct!
})