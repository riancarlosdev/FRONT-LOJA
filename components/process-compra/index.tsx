import { CompraProcess_type } from "../../types";


export default function ProcessCompra_component({ active }:CompraProcess_type):JSX.Element {

  return (
    <div className="pb-4 border-b-2 w-full flex justify-center">
      <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-text-3 grid place-items-center">
              <span className="text-3 font-semibold">1</span>
            </div>
            {active === 1 && (
              <span className="font-semibold text-sm">Endereco de entrega</span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-text-3 grid place-items-center">
              <span className="text-3 font-semibold">2</span>
            </div>
            {active === 2 && (
              <span className="font-semibold text-sm">Forma de pagamento</span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-text-3 grid place-items-center">
              <span className="text-3 font-semibold">3</span>
            </div>
            {active === 3 && (
              <span className="font-semibold text-sm">Efetuar pagamento</span>
            )}
          </div>
      </div>
    </div>
  )
}