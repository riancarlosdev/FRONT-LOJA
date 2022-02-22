import { CardFormaPagamento_type } from "../../types";

export default function CardsFormasPagamento_component({name, status}:CardFormaPagamento_type):JSX.Element {
  return (
    <div className={`${!status && 'opacity-40'} w-full h-20 flex items-center space-x-5 px-4 bg-text-1`}>
      <input type="radio" name="forma_pagamento" disabled={!status} className="w-5 h-5" />
      <div className="flex flex-col">
        <strong className="uppercase">{name}</strong>
        <span className="text-sm tracking-wider">Indisponivel</span>
      </div>
    </div>
  )
}