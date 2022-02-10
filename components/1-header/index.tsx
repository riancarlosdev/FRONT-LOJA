import Logo1 from "../temp/logos/1";
import InputSearch from "./input-search";

export default function HeaderComponent():JSX.Element {
  return (
    <div className="h-24 flex items-center">
      <div>
        <Logo1 />
      </div>

      <InputSearch />
    </div>
  )
}