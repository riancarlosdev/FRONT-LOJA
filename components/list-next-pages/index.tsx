import Link from "next/link";

// TYPES
import { ListPageNext_Type } from "../../types";

export default function ListPageNext_component({items, linkUltimaPage}: ListPageNext_Type):JSX.Element {
  return (
    <ul className="flex items-center w-56 justify-between ">
      {items.map((e, i) => (
        <li key={i}>
          <Link href={e.link}>
            <a className="text-1 w-8 h-8 bg-text-3 flex items-center justify-center">{e.page}</a>
          </Link>
        </li>
      ))}
      <li>
        <Link href={linkUltimaPage}>
          <a className="underline">Final</a>
        </Link>
      </li>
    </ul>
  )
}