import { combineReducers } from "redux"

import SizeScreenReducer from './sizeScreen.reducer'
import sidePreviewProduct from "./side-preview-product.reducer"
import FlashMessage from "./flash-message.reducer"

export default combineReducers({
  screen: SizeScreenReducer!,
  side: sidePreviewProduct!,
  flash: FlashMessage
})