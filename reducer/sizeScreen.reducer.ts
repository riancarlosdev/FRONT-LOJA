import { action_type } from "../types";

export const SizeScreenReducer = (state:number | any = 0, action: action_type) => {
  switch (action.type) {
    case 'NEW': 
        return state = action.payload
    default:
      return state
  }
}