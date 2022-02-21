import { action_type } from "../types";

export default function SizeScreenReducer(state:number = 0, action:action_type) {
  switch (action.type) {
    case 'new': {
      console.log('as')
      return state = action.payload!
    } 
    default: {
      return state
    }
  }
}