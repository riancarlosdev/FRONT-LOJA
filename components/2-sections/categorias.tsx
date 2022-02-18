import Link from "next/link";
import { DATA_categorias } from "../../datas/categorias";

export default function Categorias_section():JSX.Element {
  return (
    <section>
      <ul className="w-full h-12 flex justify-between items-center">
        {DATA_categorias.map(e => (
          <li key={e.id}>
            <article>
              <Link href={'/'}>
                <a className="text-text-3 hover:text-1 duration-500">{e.name}</a>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}