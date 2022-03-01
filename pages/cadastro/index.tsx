import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Container_component from "../../components/container";
import InputTextCompra from "../../components/inputs/input-compra";
import InputDate_component from "../../components/inputs/input-date";
import InputSelectCompra from "../../components/inputs/input-select";

import HeaderUserPublic_Layout from "../../layouts/1.header/user-public";

import { BaseApi } from "../../utils/base-api";

import { NotificationContainer } from 'react-notifications';

export default function Cadastro():JSX.Element {

  const [ valueSubmit, setValueSubmit ] = useState({nome: '', sobrenome: '', email: '', senha: '', confirm_senha: '', genero: '', nascimento: '', cpf: ''})

  const dispatch = useDispatch()
  const route = useRouter()

  const handleSubmit = async (e:ChangeEvent<HTMLFormElement>) => {

    e.preventDefault()

    try {
      const {data: {message}} = await BaseApi.post('/user/register', valueSubmit)

      dispatch({
        type: 'SUCESS',
        payload: {
          message: message
        }
      })

      setTimeout(() => {
        route.push('/cadastro/confirm')
      }, 1500)
    } catch (error: any) {
      console.log(error.response.data.message)
      dispatch({
        type: 'ERROR',
        payload: {
          message: error.response.data.message
        }
      })
    }
  }

  const handleValue = (e:ChangeEvent<HTMLInputElement>) => {
    setValueSubmit({...valueSubmit, [e.target.name]:e.target.value})
  }

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
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="px-3 md:px-8 flex justify-center sm:justify-between flex-wrap">
                  <div className="my-1  w-72">
                    <InputTextCompra onChange={handleValue} require={false} name="nome" placeholder="Primeiro nome" text="" />
                  </div>
                  <div className="my-1  w-72">
                    <InputTextCompra onChange={handleValue} require={false} name="sobrenome" placeholder="Segundo nome" text="" />
                  </div>
                  <div className="my-1  w-72">
                    <InputTextCompra type="email" onChange={handleValue} require={false} name="email" placeholder="E-mail" text="" />
                  </div>
                  <div className="my-1  w-72">
                    <InputTextCompra type="password" onChange={handleValue} require={false} name="senha" placeholder="Senha" text="" />
                  </div>
                  <div className="my-1  w-72">
                    <InputTextCompra type="password" onChange={handleValue} require={false} name="confirm_senha" placeholder="Confirmar senha" text="" />
                  </div>
                  <div className="my-1 w-72">
                    <InputDate_component type="date" change={handleValue} />
                  </div>
                  <div className="my-1 w-72">
                    <InputDate_component type="cpf" change={handleValue} />
                  </div>
                  <div className="my-1 w-72">
                    <InputSelectCompra onChange={handleValue}  name="genero" placeholder="" text="" require={false} />
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
      <NotificationContainer />
    </>
  )
}