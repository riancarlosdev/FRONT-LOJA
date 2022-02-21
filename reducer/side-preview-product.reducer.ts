import { action_type } from "../types"

const initialState = {
  open: false
}

export default function sidePreviewProduct(state = initialState, action:action_type) {
  switch (action.type) {
    case "ABRIR":
      return state
  
    default:
      return state
  }
}