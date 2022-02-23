import Link from "next/link";

// COMPONENTS
import Logo1_component from "../../components/temp/logos/1";

// TYPES
import { HeaderUserPublic_type } from "../../types";

export default function HeaderUserPublic_Layout({link, name}:HeaderUserPublic_type):JSX.Element {
  return (
    <header>
      <div className="h-16 flex items-center justify-between">
        <Logo1_component />

        <Link href={link}>
          <a className="w-36 h-10 bg-1 flex items-center justify-center text-sm text-3 rounded-full font-semibold tracking-widest">{name}</a>
        </Link>
      </div>
    </header>
  )
}