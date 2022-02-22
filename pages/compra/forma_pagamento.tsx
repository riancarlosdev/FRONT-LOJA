import ButtonCompra_component from "../../components/buttons/compra";
import CardsFormasPagamento_component from "../../components/card-forma-pagamento";
import Container_component from "../../components/container";
import ProcessCompra_component from "../../components/process-compra";
import VizualizeCompra_component from "../../components/vizualize-compra";
import { DATA_vizualize_compra } from "../../datas/vizualize-compra";
import HeaderCompra_Layout from "../../layouts/1.header/compra";

import styles from './styles.module.css'

export default function Compra_FormadePagamento():JSX.Element {
  return (
    <>
      <Container_component background="bg-4">
        <HeaderCompra_Layout />
      </Container_component>

      <main className="w-full">
        <Container_component background="bg-3">
          <div className="mt-9 flex justify-center">
            <ProcessCompra_component active={2} />
          </div>
        </Container_component>

        <div className="mt-8 md:mt-20 mb-7 max-w-4xl mx-auto w-full">
          <div className="flex flex-wrap md:justify-between justify-center ">
            <div className="h-80 mb-7 bg-text-1 border-2 border-text-3 border-opacity-10 w-full max-w-sm mx-2">
              <VizualizeCompra_component {...DATA_vizualize_compra} />
            </div>  
            <div className="mx-2 space-y-2 max-w-md flex-1 flex flex-col justify-between">
              <div className="max-w-lg" id={styles.min_card}>
                <CardsFormasPagamento_component name="Cartao de creditos" status={false} />
              </div>
              <div className="max-w-lg">
                <CardsFormasPagamento_component name="Cartao de debito" status={false} />
              </div>
              <div className="max-w-lg">
                <CardsFormasPagamento_component name="Via Pix" status={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full flex-1 mt-11 mb-6">
          <div className="max-w-xs flex-1">
            <ButtonCompra_component name="Continuar" link="/compra/pagamento" />
          </div>
        </div>
      </main>
    </>
  )
}