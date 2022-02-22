
// TYPES
import { InputCompra_type } from "../../types";

// STYLES
import styles from './styles.module.css'

export default function InputTextCompra({name, placeholder, text, require}:InputCompra_type):JSX.Element {

  return (
    <div className="mx-1">
      <div className="space-x-1">
        <span className="text-xs font-semibold uppercase">{text}</span>
        {require && <span className="text-red text-xs">*</span>}
      </div>
      <input id={styles.min_input_compra} className="w-full h-11 pl-2 border-2 outline-h-link-3 border-text-2" type="text" name={name} placeholder={placeholder} />
    </div>  
  )
}