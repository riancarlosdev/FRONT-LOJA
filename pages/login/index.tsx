import Link from "next/link";
import Container_component from "../../components/container";
import InputTextCompra from "../../components/inputs/input-compra";
import HeaderUserPublic_Layout from "../../layouts/1.header/user-public";

export default function Login():JSX.Element {
  return (
    <>
      <main>
        <Container_component background="bg-2">
          <HeaderUserPublic_Layout name="Cadastro" link="/cadastro" />
        </Container_component>

        <section className="my-24 w-full flex justify-center">
          <div className="max-w-sm h-96 bg-4 flex justify-center items-center">
            <article className="flex flex-col justify-between py-16 h-full">
              <h1 className="text-center font-semibold mt-4">Faca o Login na |LOJA|</h1>
              <form>
                <div className="flex items-end flex-col px-5">
                  <div className="space-y-3">
                    <div>
                      <InputTextCompra require={false} name="" placeholder="Digite seu E-mail" text="" />
                    </div>
                    <div>
                      <InputTextCompra require={false} name="" placeholder="Digite sua senha" text="" />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm" style={{color: 'blue'}}>Esqueceu sua senha?</span>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button className="w-40 h-10 bg-1 text-sm text-3 font-semibold" type="submit">Entrar</button>
                </div>
              </form>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}