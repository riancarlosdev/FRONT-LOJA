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