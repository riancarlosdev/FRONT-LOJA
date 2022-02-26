import { useState } from "react";
import { useSelector } from "react-redux";

// TYPES
import { redux_type } from "../../types";

// COMPONENTS
import Logo1_component from "../../components/temp/logos/1";
import BagCarrinho_component from "../../components/bag/bag-carrinho";
import InputSearch_component from "../../components/inputs/input-search";
import Link from "next/link";

export default function Header_component():JSX.Element {

  const [ focus, setFocus ] = useState<boolean>(false)

  const ActualWidth = useSelector((state:redux_type) => state.screen)

  return (
    <div className="duration-500 transition-all h-20 flex items-center justify-between space-x-5">
      {ActualWidth < 470 ? (!focus && (
        <div className={`lg:mr-8`}>
          <Logo1_component />
        </div>
      )) :  (
        <div className={`lg:mr-8`}>
          <Logo1_component />
        </div>
      )}

      <div className="flex items-center justify-end space-x-5 w-full">
        <InputSearch_component setState={setFocus} />

        <div className="lg:pl-5">
          <BagCarrinho_component />
        </div>

        <Link href={'/login'}>
          <a className={`bg-1 text-3  ${ActualWidth > 640 ? 'text-sm w-28 h-10' : 'text-xs w-24 h-9'} flex items-center justify-center font-semibold`}>Entrar</a>
        </Link>
      </div>
    </div>
  )
}