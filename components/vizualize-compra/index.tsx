import { VizualizeCompra_type } from "../../types";

import styles from '../../layouts/4-sides/styles.module.css'

export default function VizualizeCompra_component({frete, total, viewProdutos}:VizualizeCompra_type):JSX.Element {
  return (
    <div className="w-full p-2">
      <div className="mb-2 flex justify-center">
        <span className="text-sm mt-1">Vizualize sua compra</span>
      </div>

      <div id={styles.previewcompras} className="bg-3 p-1 overflow-y-scroll h-32">
        <ul className="space-y-2">
          {viewProdutos.map(e => (
            <li className="flex justify-between items-center">
              <div className="space-x-2 md:w-56 w-52">
                <strong>{e.quantidade}</strong>
                <span className=" sm:text-base">{e.produto}</span>
              </div>
              <strong>R$ {e.preco}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-2 mt-2">
        <ul>
          <li className="flex justify-between items-center">
            <strong>Frete:</strong>
            <strong>{frete}</strong>
          </li>
          <li className="flex justify-between items-center">
            <strong>Total:</strong>
            <strong>{total}</strong>
          </li>
        </ul>
      </div>

      <div className="mt-3">
        <span>Tempo estimado para entrega é de até 3 dias úteis após a confirmacao da compra</span>
      </div>
    </div>
  )
}