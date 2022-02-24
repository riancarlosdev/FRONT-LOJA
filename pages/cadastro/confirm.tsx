import Container_component from "../../components/container";
import HeaderUserPublic_Layout from "../../layouts/1.header/user-public";

import ReactCodesInput from "react-codes-input";
import 'react-codes-input/lib/react-codes-input.min.css';
import { DATA_props } from "../../datas/react-code-input";

export default function ConfirmAccaount():JSX.Element {

  const handleValueCode = (e: string) => {
    if(e.length === 4) {
      console.log('enviado')
    }

    return
  }

  return (
    <>
      <main>
        <Container_component background="bg-2">
          <HeaderUserPublic_Layout name="Login" link="/login" />
        </Container_component>

        <section className="mt-2 mb-7 sm:my-14 w-full flex justify-center">
          <div className="p-2 max-w-2xl mx-2 flex-1 bg-4 flex justify-center items-center">
            <article className="flex flex-col justify-between py-16 h-full">
              <div className="text-center mb-9 max-w-sm">
                <h1 className="font-semibold mt-4">Confirmacao de conta</h1>
                <span className="text-sm">Enviamos um codigo de confirmacao para o email: <span className="text-text-3">ggrian.dev@gmail.com</span>. Utilize-o para ativar sua conta</span>
              </div>
              <div className="flex justify-center">
                <ReactCodesInput onChange={handleValueCode} {...DATA_props} />
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}