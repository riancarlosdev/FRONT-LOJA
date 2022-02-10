import { FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'

// UTILS
import { hiddenDuration } from '../../utils/hidden-duration'

export default function InputSearch_component():JSX.Element {

  const [ focus, setFocus ] = useState<boolean>(false)
  const sizeScreen = useSelector(states => states)
  
  const handleFocus = () => setFocus(!focus)
  const handleClickButtonSearch = () => (sizeScreen < 768 && (console.log('cliquei')));    

  const handleHidden = hiddenDuration(sizeScreen, focus)

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    return
  }

  return (
    <div className={`${sizeScreen > 768 ? 'w-full' : 'w-14'} ease-in-out duration-700`}>
      <form onSubmit={handleSubmit} name='form' id='form'>
        <div className='relative overflow-hidden rounded-full'>
          <input className={`text-lg text-text-2 outline-none md:placeholder:text-lg pl-7 pr-20 w-full h-12`} 
            id='search' 
            type="text" 
            maxLength={50} 
            onBlur={handleFocus} 
            onFocus={handleFocus} 
          />
          <span className={`absolute top-3 left-7 text-text-2 ${sizeScreen < 768 && 'opacity-0'} duration-500`} hidden={handleHidden}>Buscar</span>
          <button onClick={handleFocus} type='submit' form='form' className='px-4 bg-3 md:bg-opacity-0 h-12 md:h-full absolute top-0 right-0'>
            <BsSearch className='fill-text-2 md:fill-text-2' size={22} />
          </button>
        </div>
      </form>
    </div>
  )
}