import Container_component from "../../components/container";
import InputTextCompra from "../../components/inputs/input-compra";
import HeaderUserPublic_Layout from "../../layouts/1.header/user-public";

export default function Cadastro():JSX.Element {
  return (
    <>
      <main>
        <Container_component background="bg-2">
          <HeaderUserPublic_Layout name="Login" link="/login" />
        </Container_component>

        <section className="mt-2 mb-7 sm:my-14 w-full flex justify-center">
          <div className="max-w-2xl flex-1 mx-2 bg-4 flex justify-center items-center">
            <article className="flex flex-col justify-between py-16 h-full">
              <div className="text-center mb-4">
                <h1 className="font-semibold mt-4">Faca o seu cadastro na |LOJA|</h1>
                <span>Seja bem vindo</span>
              </div>
              <form className="mt-4">
                <div className="px-3 md:px-8 flex justify-center sm:justify-between flex-wrap">
                  <div className="my-1 max-w-xs">
                    <InputTextCompra require={false} name="" placeholder="Primeiro nome" text="" />
                  </div>
                  <div className="my-1  max-w-xs">
                    <InputTextCompra require={false} name="" placeholder="Segundo nome" text="" />
                  </div>
                  <div className="my-1  max-w-xs">
                    <InputTextCompra require={false} name="" placeholder="E-mail" text="" />
                  </div>
                  <div className="my-1  max-w-xs">
                    <InputTextCompra require={false} name="" placeholder="Senha" text="" />
                  </div>
                  <div className="my-1  max-w-xs">
                    <InputTextCompra require={false} name="" placeholder="Confirmar senha" text="" />
                  </div>
                  <div className="my-1  max-w-xs">
                    <InputTextCompra require={false} name="" placeholder="Data de nascimento" text="" />
                  </div>
                  <div className="my-1  max-w-xs">
                    <InputTextCompra require={false} name="" placeholder="CPF" text="" />
                  </div>
                  <div className="my-1  max-w-xs">
                    <InputTextCompra require={false} name="" placeholder="Genero" text="" />
                  </div>
                </div>

                <div className="px-3 text-center mt-5">
                  <p>Ao clicar em cadastrar-se voce concorda com nossos <span className="text-sm" style={{color:'blue'}}>Termos de uso</span>, <span className="text-sm" style={{color:'blue'}}>Termos de privacidade</span> e <span className="text-sm" style={{color:'blue'}}>Termos de uso dados</span>.</p>
                </div>

                <div className="flex justify-center mt-6">
                  <button className="w-40 h-10 bg-1 text-3 text-sm font-semibold" type="submit">Cadastrar-se</button>
                </div>
              </form>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}