import { container_type } from "../../types"


export default function Container_component({children, background}:container_type):JSX.Element {
  const classNamePrime = `w-full ${background}`

  return (
    <div className={classNamePrime}>
      <div className="max-w-7xl m-auto px-4">
        {children}
      </div>
    </div>
  )
}