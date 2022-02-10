import Logo1_component from "../temp/logos/1";
import BagCarrinho_component from "./bag/bag-carrinho";
import InputSearch_component from "./input-search";

export default function Header_component():JSX.Element {
  return (
    <div className="h-24 flex items-center justify-between space-x-5">
      <div className="lg:mr-8">
        <Logo1_component />
      </div>

      <div className="flex items-center space-x-5 w-full">
        <InputSearch_component />

        <div className="lg:pl-5">
          <BagCarrinho_component />
        </div>
      </div>
    </div>
  )
}