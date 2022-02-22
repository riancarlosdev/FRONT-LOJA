import Link from "next/link";
import { ButtonCompra_type } from "../../types";

export default function ButtonCompra_component({link, name}:ButtonCompra_type):JSX.Element {
  return (
    <Link href={link}>
      <a className="flex justify-center items-center bg-1 w-full h-12 font-semibold text-3">{name}</a>
    </Link>
  )
}