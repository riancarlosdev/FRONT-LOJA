// COMPONENTS
import Container_component from "../../components/container";
import ProcessCompra_component from "../../components/process-compra";

// LAYOUTS
import HeaderCompra_Layout from "../../layouts/1.header/compra";

export default function Compra_Endereco():JSX.Element {
  return (
    <>
      <Container_component background="bg-4">
        <HeaderCompra_Layout />
      </Container_component>

      <main className="w-full">
        <Container_component background="bg-3">
          <div className="mt-12 flex justify-center">
            <ProcessCompra_component active={1} />
          </div>
        </Container_component>
      </main>

      <footer>
        footer
      </footer>
    </>
  )
}