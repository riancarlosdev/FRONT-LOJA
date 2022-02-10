import { FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export default function InputSearch_component():JSX.Element {

  const [ stateInput, setStateInput ] = useState('text-lg text-text-2 outline-none placeholder:opacity-0 md:placeholder:text-lg pl-7 pr-20 w-full h-12')
  const [ focus, setFocus ] = useState<boolean>(false)

  const handleFocus = () => setFocus(!focus)

  function handleClick() {
    const responsive:number = window.innerWidth

    if(responsive <= 768) {

    }
    
    return
  }

  function handleSubmit(e:FormEvent) {
    e.preventDefault()

    return
  }

  return (
    <div className='w-full md:block flex justify-end'>
      <form onSubmit={handleSubmit} name='form' id='form' className=''>
        <div className='relative overflow-hidden rounded-full'>
          <input id='search' onFocus={handleFocus} onBlur={handleFocus} type="text" maxLength={50} className={stateInput} />
          <span className='absolute top-3 left-7 text-text-2' hidden={focus}>Buscar</span>
          <button type='submit' form='form' className='px-4 bg-3 md:bg-opacity-0 h-12 md:h-full absolute top-0 right-0'>
            <BsSearch className='fill-text-2 md:fill-text-2' size={22} />
          </button>
        </div>
      </form>
    </div>
  )
}