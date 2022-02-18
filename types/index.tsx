
export type container_type = {
  children: any
  background: "bg-1" | "bg-2" | "bg-4",
  shadow?: boolean
}

export type infoQntBag_type = {
  qnt: number
}

export type action_type = {
  payload: any
  type: string
}