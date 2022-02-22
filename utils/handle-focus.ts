import { Dispatch, SetStateAction } from "react";
import { UTILS_disabled_body_scroll, UTILS_enabled_body_scroll } from "./handle-body-scroll";

export const UTILS_handleFocus_Categoria = (state:boolean, setState:Dispatch<SetStateAction<boolean>>) => { 

  if(!state) {

    setState(!state); 
    return UTILS_disabled_body_scroll()
  }else {

    setState(false)
    return UTILS_enabled_body_scroll()
  }
}