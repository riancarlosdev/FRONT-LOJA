import Container_component from "../../../components/container";
import ProcessCompra_component from "../../../components/process-compra";
import HeaderCompra_Layout from "../../../layouts/1.header/compra";

export default function Compra_Endereco():JSX.Element {
  return (
    <>
      <Container_component background="bg-4">
        <HeaderCompra_Layout />
      </Container_component>

      <main className="w-full">
        <Container_component background="bg-3">
          <div className="mt-9 flex justify-center">
            <ProcessCompra_component active={3} />
          </div>
        </Container_component>

        <div className="mt-6 mb-7 max-w-4xl mx-auto w-full">
          <div className="text-center my-4 px-2">
            <div>
              <strong className="text-sm sm:text-base">Seu pedido so sera confirmado apos o pagamento</strong>
              <p className="text-sm sm:text-base">Pague com QrCode, ou se preferir, copie o codigo abaixo do QrCode para efetuar sua compra e confirmar seu pedido</p>
            </div>
            <div className="mt-2">
              <strong>Valor a pagar: 100,00</strong>
            </div>
          </div>

          <div className="px-3">
            <div className="max-w-xs h-80 bg-2 m-auto"></div>
          </div>

          <div className="flex flex-col items-center mt-6">
            <input className="bg-2 h-9 w-60 px-2" disabled value="asddgdfgkjdjdjkjdjdjdfjlklksdkjljkljkbckvbnhkjhkjhkjhsdasd"/>
            <div className="mt-2">
              <strong className="text-sm" style={{color: '#004ddd'}}>Copiar QrCode</strong>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}