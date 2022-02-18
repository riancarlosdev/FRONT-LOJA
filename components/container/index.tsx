import { useResizeDetector } from "react-resize-detector"
import { container_type } from "../../types"
import { useDispatch } from "react-redux" 
import { useEffect } from "react"

export default function Container_component({children, background, shadow}:container_type):JSX.Element {

  const classNamePrime = `w-full ${background} ${shadow && 'shadow-md'}`
  
  const { width, ref } = useResizeDetector()

  const Dispatch = useDispatch()
  useEffect(() => { Dispatch({ type: 'NEW', payload: width })}, [ width, Dispatch ])

  return (
    <div ref={ref} className={classNamePrime}>
      <div className="max-w-7xl m-auto px-4">
        {children}
      </div>
    </div>
  )
}