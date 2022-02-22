import { ChangeEvent, FormEvent } from 'react'
import { BsSearch } from 'react-icons/bs'

// TYPES
import { InputSearch_type } from '../../types';

// UTILS
import { UTILS_BlurInput, UTILS_FocusInput } from '../../utils/handle-input'

export default function InputSearch_component({ setState }:InputSearch_type<any>):JSX.Element {
  
  const handleFocusInput = () => UTILS_FocusInput(setState);
  const handleBlurInput = (e:ChangeEvent<HTMLInputElement>) => UTILS_BlurInput(e, setState)

  // VOLTAR DEPOIS
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()

    // Verificar se o focus.button esta TRUE antes de fazer o SUBMIT
    return
  }

  return (
    <div className={`ease-in-out duration-700 w-full`}>
      <form onSubmit={handleSubmit} name='form' id='form'>
        <div className='relative overflow-hidden w-full rounded-full'>
          <input onFocus={handleFocusInput} onBlur={handleBlurInput} className={`outline-none md:placeholder:text-lg pl-4 sm:pl-7 text-base sm:text-lg pr-14 w-full h-12`} 
            id='search' 
            type="text" 
            maxLength={50} 
            placeholder="Buscar"
          />
          <button type='submit' form='form' className='px-4 md:px-6 bg-text-2 h-12 md:h-full absolute top-0 right-0'>
            <BsSearch className='fill-1' size={17} />
          </button>
        </div>
      </form>
    </div>
  )
}