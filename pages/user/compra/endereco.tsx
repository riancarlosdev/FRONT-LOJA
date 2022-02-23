// COMPONENTS
import ButtonCompra_component from "../../../components/buttons/compra";
import CardEndereco_component from "../../../components/card-endereco";
import CepPreview_component from "../../../components/cep-preview";
import Container_component from "../../../components/container";
import InputTextCompra from "../../../components/inputs/input-compra";
import ProcessCompra_component from "../../../components/process-compra";

// LAYOUTS
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
            <ProcessCompra_component active={1} />
          </div>

          <div className="mt-4 max-w-4xl m-auto">
            <div className="flex sm:justify-between flex-wrap justify-center">
              <div className="w-full max-w-xs my-2">
                <InputTextCompra name="cep" placeholder="00000-000" require={true} text="CEP" />
              </div>
              <div className="w-full max-w-xs my-2">
                <CepPreview_component />
              </div>
              <div className="w-full max-w-xs my-2">
                <InputTextCompra name="bairro" placeholder="Digite o bairro" require={true} text="bairro" />
              </div>
              <div className="w-full max-w-xs my-2">
                <InputTextCompra name="endereco" placeholder="Digite o endereco" require={true} text="endereco" />
              </div>
              <div className="w-full max-w-xs my-2">
                <InputTextCompra name="complemento" placeholder="Ex: Casa azul ao lado da ..." require={true} text="complemento" />
              </div>
              <div className="w-full max-w-xs my-2">
                <InputTextCompra name="numero" placeholder="Ex: 21" require={true} text="numero" />
              </div>
            </div>
          </div>
        </Container_component>

        <Container_component background="bg-3">
          <div className="my-7">
            <div className="flex justify-center font-semibold space-x-2">
              <span className="uppercase text-center">ou selecione um endereco salvo</span>
            </div>

            <div className="flex justify-center flex-wrap mt-5">
              <div className="flex-1 max-w-xs mx-1 my-1">
                <CardEndereco_component endereco="Rua jose casemiro pena" numero="28" localizacao="SSP, Bahia - Brasil" value="1" />
              </div>
              <div className="flex-1 max-w-xs mx-1 my-1">
                <CardEndereco_component endereco="Rua jose casemiro pena" numero="28" localizacao="SSP, Bahia - Brasil" value="1" />
              </div>
            </div>
          </div>
        </Container_component>

        <div className="flex justify-center w-full flex-1 mt-11 mb-6">
          <div className="max-w-xs flex-1">
            <ButtonCompra_component name="Continuar" link="/user/compra/forma_pagamento" />
          </div>
        </div>
      </main>
    </>
  )
}