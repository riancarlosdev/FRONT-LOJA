import { BsShieldLockFill } from "react-icons/bs";
import Logo1_component from "../../components/temp/logos/1";

export default function HeaderCompra_Layout():JSX.Element {
  return (
    <header>
      <div className="h-16 flex items-center justify-between">
        <Logo1_component />

        <div className="flex space-x-2 items-center">
          <BsShieldLockFill size={27} />
          <span className="font-semibold text-sm">Área protegida</span>
        </div>
      </div>
    </header>
  )
}