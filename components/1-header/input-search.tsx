import { ChangeEvent, FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'

// UTILS
import { hiddenDuration } from '../../utils/hidden-duration'
import {handleFocusButton as FocusButton, handleFocusInput as FocusInput} from '../../utils/handle-focus-search'

export default function InputSearch_component():JSX.Element {

  const [ focus, setFocus ] = useState({input: false, button:false})
  const sizeScreen = useSelector(states => states)

  const handleHidden = hiddenDuration(sizeScreen, focus)
  
  const handleFocusInput = (e:ChangeEvent) => FocusInput(focus, setFocus, sizeScreen, e)
  const handleFocusButton = () => FocusButton(focus, setFocus, sizeScreen)

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()

    // Verificar se o focus.button esta TRUE para fazer o SUBMIT
    return
  }

  return (
    <div className={`${sizeScreen > 768 ? 'w-full' : focus.button === false ? 'w-14' : 'w-full'} ease-in-out duration-700`}>
      <form onSubmit={handleSubmit} name='form' id='form'>
        <div className='relative overflow-hidden rounded-full'>
          <input className={`text-lg text-text-2 outline-none md:placeholder:text-lg pl-7 pr-20 w-full h-12`} 
            id='search' 
            type="text" 
            maxLength={50} 
            onBlur={handleFocusInput} 
            onFocus={handleFocusInput} 
          />
          <span className={`absolute top-3 left-7 text-text-2 ${sizeScreen < 768 && 'opacity-0'} duration-500`} hidden={handleHidden}>Buscar</span>
          <button onClick={handleFocusButton} type='submit' form='form' className='px-4 bg-3 md:bg-opacity-0 h-12 md:h-full absolute top-0 right-0'>
            <BsSearch className='fill-text-2 md:fill-text-2' size={22} />
          </button>
        </div>
      </form>
    </div>
  )
}