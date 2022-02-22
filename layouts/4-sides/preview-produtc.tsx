import Link from 'next/link'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { BsCheck, BsFillBagPlusFill } from 'react-icons/bs'

// TYPES
import { redux_type } from '../../types'

export default function SidePreviewProduct_component():JSX.Element {

  const dispatch = useDispatch()

  const openSideViewProduct = useSelector((state: redux_type) => state.side.open)
  
  const handleClickExitPreviewProduct = () => dispatch({type: 'ABRIR', payload: {open: false}})

  return (
    <>
      <aside id={styles.sidepreview} className={`overflow-y-scroll z-50 fixed duration-300 transition-all ease ${openSideViewProduct ? 'right-0' : '-right-full'} bg-3 max-w-md h-screen w-10/12 top-0`}>
        <div className="flex flex-col items-start w-full h-full p-2">
          <div className='space-y-2 flex w-full flex-col'>
            <div className="w-full h-64 bg-text-3"></div>
            <div className='flex h-28 space-x-3 justify-between'>
              <div className='w-full border-x border-y border-1 bg-text-1'></div>
              <div className='w-full bg-text-1'></div>
              <div className='w-full bg-text-1'></div>
            </div>
          </div>
          <div className='mt-3 w-full'>
            <div className='w-full border-b border-text-3 border-opacity-25 pb-4'>
              <span className="text-text-3 text-sm font-medium">Moda Femenina</span>
              <h3 className='text-2xl font-semibold'>Blusa com Estampa Preta e Branca</h3>
              <div className='space-x-2'>
                <span className='text-sm'>Codigo:</span>
                <span className='text-sm text-text-3 tracking-wide'>458721</span>
              </div>
            </div>

            <div className='space-y-4 flex flex-wrap justify-between'>
              <div className='mt-4'>
                <div className='my-2'>
                  <span className='text-text-3 text-base'>Selecione a cor</span>
                </div>
                <div className='flex space-x-2'>
                  <div title='preto' className='cursor-pointer border-x border-y border-text-3 flex items-center space-x-1'>
                    <input type="radio" hidden name="car" id="" />
                    <div className='bg-1 w-10 h-10 flex justify-center items-center'>
                      <BsCheck size={38} fill={'#ffffff'} />
                    </div>
                  </div>

                  <div title='azul' className='cursor-pointer border-x border-y border-text-3 flex items-center space-x-1'>
                    <input type="radio" hidden name="car" id="" />
                    <div className='bg-link-1 w-10 h-10 bg-opacity-20'></div>
                  </div>

                  <div title='rosa' className='cursor-pointer border-x border-y border-text-3 flex items-center space-x-1'>
                    <input type="radio" hidden name="car" id="" />
                    <div className='bg-h-link-2 w-10 h-10 bg-opacity-20'></div>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                <div className='my-2'>
                  <span className='text-text-3 text-base'>Selecione o tamanho</span>
                </div>
                <div className='flex space-x-2'>
                  <div title='Pequeno' style={{borderColor: '#d4d4d4'}} className='border-2 border-opacity-95 cursor-pointer flex items-center space-x-1'>
                    <input type="radio" name="tamanho" hidden id="" />
                    <div className='w-10 h-10 flex items-center justify-center'>
                      <span className='text-sm font-semibold tracking-widest'>P</span>
                    </div>
                  </div>

                  <div title='Medio' style={{background: '#d4d4d4'}} className='cursor-pointer flex items-center space-x-1'>
                    <input type="radio" name="tamanho" hidden id="" />
                    <div className='w-10 h-10 flex items-center justify-center'>
                      <span className='text-sm font-semibold tracking-widest'>M</span>
                    </div>
                  </div>

                  <div title='Grande' style={{background: '#d4d4d4'}} className='cursor-pointer flex items-center space-x-1'>
                    <input type="radio" name="tamanho" hidden id="" />
                    <div className='w-10 h-10 flex items-center justify-center'>
                      <span className='text-sm font-semibold tracking-widest'>G</span>
                    </div>
                  </div>

                  <div title='Grande' style={{background: '#d4d4d4'}} className='cursor-pointer flex items-center space-x-1'>
                    <input type="radio" name="tamanho" hidden id="" />
                    <div className='w-10 h-10 flex items-center justify-center'>
                      <span className='text-sm font-semibold tracking-widest'>GG</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4'>
              <div className='space-y-1'>
                <div className='space-x-1'>
                  <span className='text-sm text-text-3'>De:</span>
                  <span className='text-lg text-text-3 line-through'>R$ 15,89</span>
                </div>
                <div className='space-x-1'>
                  <span className='text-xl'>Por:</span>
                  <span className='text-3xl font-semibold tracking-wide'>R$ 13,99</span>
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <div className='flex space-x-3'>
                <div className='flex space-x-1'>
                  <div className='w-11 h-14 bg-text-1 flex items-center justify-center'>
                    <span className='text-lg font-semibold'>0</span>
                  </div>
                  <div className='space-y-2'>
                    <div className='select-none cursor-pointer w-8 h-6 bg-text-2 flex justify-center items-center'>
                      <span className='text-1'>+</span>
                    </div>
                    <div className='select-none cursor-pointer w-8 h-6 bg-text-2 flex justify-center items-center'>
                      <span className='text-1'>-</span>
                    </div>
                  </div>
                </div>

                <div className='flex space-x-2 w-full'>
                  <span className='cursor-pointer p-2 flex items-center justify-center text-sm'>
                    <BsFillBagPlusFill size={30} />
                  </span>

                  <Link href={'/'}>
                    <a className='bg-h-link-3 text-3 font-semibold w-full flex justify-center items-center'>
                      Comprar Agora
                    </a>
                  </Link>
                </div>
              </div>

              <div className='flex space-x-1 justify-center mt-4'>
                <span>Disponibilidade:</span>
                <span className='font-semibold tracking-wider'>disponivel</span>
              </div>
            </div>

          </div>
        </div>
      </aside>
      <div onClick={handleClickExitPreviewProduct} className={`${!openSideViewProduct && 'hidden'} z-40  fixed h-screen w-screen left-0 top-0`}></div>
    </>
  )
}