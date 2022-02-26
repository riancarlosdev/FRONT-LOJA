import MaskedInput from 'react-text-mask'

type InputMask = {
  change?: any,
  type: "cpf" | "date"
}

export default function InputMask_component({change, type}: InputMask):JSX.Element {
  
  if(type == 'date') {
    return (
      <div className="mx-1">
        <MaskedInput className='text-sm w-full h-11 pl-2 border-2 outline-h-link-3 border-text-2' onChange={change} placeholder='Data de nacimento' mask={[/[0-9]/, /\d/, ' ', '/', ' ', /\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, /\d/, /\d/]} />
      </div>
    )
  }
  
  if(type === 'cpf') {
    return (
      <div className="mx-1">
        <MaskedInput className='text-sm w-full h-11 pl-2 border-2 outline-h-link-3 border-text-2' onChange={change} placeholder='CPF' mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]} />
      </div>
    )
  }

  return (
    <></>
  )
}