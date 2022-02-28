import { action_type, FlashMessage_reducer } from "../types";
import { NotificationManager } from 'react-notifications'

export default function FlashMessage(state:FlashMessage_reducer = {message: ''}, action: action_type) {
  switch (action.type) {
    case 'SUCESS':
      NotificationManager.sucess(action.payload.message)
      return state 
  
    case 'ERROR':
      NotificationManager.error(action.payload.message, '',5000)
      return state 
  
    default:
      return state
  }
}