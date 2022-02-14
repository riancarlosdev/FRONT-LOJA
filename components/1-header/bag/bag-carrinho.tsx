import { BsHandbagFill } from 'react-icons/bs'
import InfoQntBag_component from './info-qnt-bag'

export default function BagCarrinho_component():JSX.Element {
  return (
    <div className='relative'>
      <InfoQntBag_component qnt={3} />
      <a href="https://www.google.com">
        <BsHandbagFill className='hover:fill-text-1 ease-in-out duration-500' color='#fff' size={30} />
      </a>
    </div>
  )
}