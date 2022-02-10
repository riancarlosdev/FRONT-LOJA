import { container_type } from "../../types"


export default function Container_component({children, background}:container_type):JSX.Element {

  const classNamePrime = `w-full ${background}`
  const classNameInter = `max-w-`

  return (
    <div className={classNamePrime}>
      <div className="max-w-7xl m-auto">
        {children}
      </div>
    </div>
  )
}