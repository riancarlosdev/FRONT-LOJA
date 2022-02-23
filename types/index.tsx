import { Dispatch, SetStateAction } from "react"

export type container_type = {
  children: any
  background: "bg-1" | "bg-2" | "bg-3" | "bg-4"
  shadow?: boolean
}

export type infoQntBag_type = {
  qnt: number
}

export type action_type = {
  payload: any
  type: string
}

export type redux_type = {
  screen: number
  side: {
    open: boolean
  }
}

export type InputSearch_type<T> = {
  setState: Dispatch<SetStateAction<T>> 
}

type T = Array<{page: string, link: string}>

export type ListPageNext_Type = {
  items: T
  linkUltimaPage: string
}

export type ArticleCombo_type = {
  img: string
  description: string
}

export type Produto_Type = {
  title: string
  description: string
  oldPrice: string
  price: string
  img: string
  alt: string
  set?: any
}

export type CompraProcess_type = {
  active: number
}

export type InputCompra_type = {
  name: string
  text: string
  require: boolean
  placeholder: string
}

export type CardEndereco_type = {
  value: string
  numero: string
  endereco: string
  localizacao: string
}

export type ButtonCompra_type = {
  name: string
  link: string
}

export type VizualizeCompra_type = {
  frete: string
  total: string
  viewProdutos: Array<{
    id: number
    preco: string
    produto: string
    quantidade: string
  }>
}

export type CardFormaPagamento_type = {
  name: string
  status?: boolean
}

export type HeaderUserPublic_type = {
  link: string
  name: string
}