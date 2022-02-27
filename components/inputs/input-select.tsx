// TYPES
import { InputCompra_type } from "../../types";

export default function InputSelectCompra({onChange, name, placeholder, text }:InputCompra_type):JSX.Element {

  return (
    <div className="mx-1">
      <select onChange={onChange} className="bg-3 text-sm h-11 px-2 border-2 outline-h-link-3 border-text-2" name={name} placeholder={placeholder}>
        <option defaultValue="">Selecione o seu genero</option>
        <option value="femenino">Femenino</option>
        <option value="femenino">Masculino</option>
        <option value="n">Prefiro nao informar</option>
      </select>
    </div>  
  )
}