import Logo1_component from "../temp/logos/1";
import BagCarrinho_component from "./bag/bag-carrinho";
import InputSearch_component from "./input-search";

export default function Header_component():JSX.Element {
  return (
    <div className="h-24 flex items-center">
      <Logo1_component />
      <InputSearch_component />
      <BagCarrinho_component />
    </div>
  )
}