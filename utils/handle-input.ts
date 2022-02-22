import { ChangeEvent, Dispatch, SetStateAction } from "react"

/**
 * Altere estado para (true) caso o input for FOCADO
 * @param setState 
 * @returns void
 */
export const UTILS_FocusInput = (setState:Dispatch<SetStateAction<any>>) => setState(true);

/**
 * Altere estado para (false) caso o input nao esteja FOCADO e VAZIU
 * @param e ChangeEvent<HTMLInputElement>
 * @returns void
 */
export const UTILS_BlurInput = (e:ChangeEvent<HTMLInputElement>, setState:Dispatch<SetStateAction<any>>):void => {
  if(e.target.value !== '') {
    return
  }
  
  setState(false)
}