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

        <section className="mt-2 mb-7 sm:my-14 w-full flex justify-center">
          <div className="max-w-md mx-2 flex-1 h-96 bg-4 flex justify-center items-center">
            <article className="flex flex-col justify-between py-16 h-full">
              <div className="text-center mb-5">
                <h1 className="font-semibold mt-4">Faca o Login na |LOJA|</h1>
                <span>Bem vindo de volta</span>
              </div>
              <form>
                <div className="flex items-end flex-col px-5">
                  <div className="space-y-4">
                    <div>
                      <InputTextCompra minWidth={false} require={false} name="" placeholder="Digite seu E-mail" text="" />
                    </div>
                    <div>
                      <InputTextCompra minWidth={false} require={false} name="" placeholder="Digite sua senha" text="" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs" style={{color: 'blue'}}>Esqueceu sua senha?</span>
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