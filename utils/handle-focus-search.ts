import { ChangeEvent } from "react"
import { DefaultRootState } from "react-redux"

export const handleFocusInput = (focus:any, setState:any, sizeScreen: number | DefaultRootState, e:ChangeEvent) => {
  if(sizeScreen < 768){
    if(e.type === 'blur') {
      return setState({input: focus.input, button: false})
    }
  }

  return setState({input: !focus.input, button: false})
}

export const handleFocusButton = (focus:any, setState:any, sizeScreen: number | DefaultRootState, e?:ChangeEvent) => {
  if(sizeScreen < 768){
    const inputSearch = document.querySelector<HTMLInputElement>('#search')!

    inputSearch.focus()
    return setState({input: focus.input, button: true})
  }
}