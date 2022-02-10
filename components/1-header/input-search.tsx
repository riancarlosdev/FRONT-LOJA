import { BsSearch } from 'react-icons/bs'

export default function InputSearch_component():JSX.Element {
  return (
    <div className='w-full'>
      <form className=''>
        <div className='relative overflow-hidden rounded-full'>
          <input id='search' type="text" maxLength={50} className='text-lg text-text-2 outline-none placeholder:text-lg pl-7 pr-20 w-full h-12 flex' placeholder="Buscar" />
          <button type='submit' className='px-4 h-full absolute top-0 right-0'>
            <BsSearch className='fill-text-2' size={22} />
          </button>
        </div>
      </form>
    </div>
  )
}