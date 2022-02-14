import { FormEvent } from 'react'
import { BsSearch } from 'react-icons/bs'


export default function InputSearch_component():JSX.Element {

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()

    // Verificar se o focus.button esta TRUE antes de fazer o SUBMIT
    return
  }

  return (
    <div className={`ease-in-out duration-700 w-full`}>
      <form onSubmit={handleSubmit} name='form' id='form'>
        <div className='relative overflow-hidden w-full rounded-full'>
          <input className={`text-lg text-text-2 outline-none md:placeholder:text-lg pl-7 pr-20 w-full h-12`} 
            id='search' 
            type="text" 
            maxLength={50} 
            placeholder="Buscar"
          />
          <button type='submit' form='form' className='px-4 bg-3 md:bg-opacity-0 h-12 md:h-full absolute top-0 right-0'>
            <BsSearch className='fill-text-2 md:fill-text-2' size={22} />
          </button>
        </div>
      </form>
    </div>
  )
}