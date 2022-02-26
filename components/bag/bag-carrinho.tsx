import { BsFillBagFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { redux_type } from '../../types'
import InfoQntBag_component from './info-qnt-bag'

export default function BagCarrinho_component():JSX.Element {

  const ActualWidth = useSelector((state: redux_type) => state.screen)

  return (
    <div className='relative'>
      <InfoQntBag_component qnt={3} />
      <a href="https://www.google.com">
        <BsFillBagFill className='hover:fill-h-link-3 ease-in-out duration-500' color='#2e2e2e' size={ActualWidth > 640 ? 30 : 25} />
      </a>
    </div>
  )
}