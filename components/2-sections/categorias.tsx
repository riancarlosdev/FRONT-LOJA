import Link from "next/link";
import { useSelector } from "react-redux";
import { AiOutlineCaretDown } from 'react-icons/ai'

import styles from './styles.module.css'

import { DATA_categorias } from "../../datas/categorias";
import { useState } from "react";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { redux_type } from "../../types";

export default function Categorias_section():JSX.Element {

  const [ active, setActive ] = useState<boolean>(false)
  const ActualWidth = useSelector((state: redux_type) => state.screen)

  const handleFocus = () => { 

    if(!active) {

      setActive(!active); 
      disableBodyScroll(document.querySelector('body')!)
      return
    }else {

      setActive(false)
      enableBodyScroll(document.querySelector('body')!)
      return
    }
  }

  return (
    <section className="relative w-full h-12 flex items-center">
      {ActualWidth > 768 ? (
        <ul className="w-full hidden md:flex justify-between items-center">
          {DATA_categorias.map(e => (
            <li key={e.id}>
              <article>
                <Link href={'/'}>
                  <a className="text-text-3 hover:text-1 duration-500">{e.name}</a>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-full select-none">
          <div className="h-full w-full relative">
            <button onClick={handleFocus} id={styles.boxCategorias} className={`h-full hover:bg-text-1 ${active && 'focus:bg-text-1'}`}>
              <div className="cursor-pointer px-5 duration-300 h-full flex items-center space-x-2">
                <h3 className="text-text-3 text-sm">Categorias</h3>
                <AiOutlineCaretDown className="fill-text-3" />
              </div>
            </button>
            {active && (
              <ul className={`z-50 py-2 space-y-3 absolute top-12 border-b shadow-lg bg-5 w-52`}>
                {DATA_categorias.map(e => (
                  <li key={e.id}>
                    <article>
                      <Link href={'/as'}>
                        <a className="text-sm text-text-3 hover:text-h-link-3 duration-500 py-1 px-3">{e.name}</a>
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div onClick={handleFocus} className={`${!active && 'hidden'} -z-50 fixed h-screen w-screen left-0 top-0`} id={styles.bgExit}></div>
        </div>
      )}
    </section>
  )
}