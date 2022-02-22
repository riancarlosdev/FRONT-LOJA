import { CardEndereco_type } from "../../types";

export default function CardEndereco_component({value, endereco, localizacao, numero}:CardEndereco_type):JSX.Element {
  return (
    <div className="cursor-pointer bg-text-2 w-full flex items-center h-24 p-2">
      <div className="flex items-center space-x-3">
        <input type="radio" value={value} name="endereco" id="" />
        <div className="space-y-1">
          <span className="text-lg font-semibold">{endereco}</span>
          <div className="flex space-x-2 text-sm">
            <span>N: {numero}</span>
            <span>{localizacao}</span>
          </div>
        </div>
      </div>
    </div>
  )
}