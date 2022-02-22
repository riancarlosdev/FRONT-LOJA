
// TYPES
import { CardEndereco_type } from "../../types";

import styles from './styles.module.css'

export default function CardEndereco_component({value, endereco, localizacao, numero}:CardEndereco_type):JSX.Element {
  return (
    <div id={styles.card_endereco} className="cursor-pointer bg-text-2 w-full flex items-center h-24 px-6">
      <div className="flex items-center space-x-4">
        <input type="radio" value={value} name="endereco" id="" />
        <div className="space-y-1">
          <span className="text-base md:text-lg font-semibold">{endereco}</span>
          <div className="flex space-x-2 text-sm">
            <span>N: {numero}</span>
            <span>{localizacao}</span>
          </div>
        </div>
      </div>
    </div>
  )
}