import { action_type } from "../types"

const initialState = {
  open: false
}

export default function sidePreviewProduct(state = initialState, action:action_type) {
  switch (action.type) {
    case "ABRIR":
      return state = action.payload
  
    default:
      return state
  }
}