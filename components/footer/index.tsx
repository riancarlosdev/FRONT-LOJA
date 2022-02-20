import Logo1_component from "../temp/logos/1";
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'
import Link from "next/link";
import { DATA_categorias } from "../../datas/categorias";
import { DATA_Footer } from "../../datas/footer";

export default function Footer_component():JSX.Element {
  return (
    <footer className="py-10">
      <div className="flex flex-col md:flex-row flex-wrap justify-between">
        <div className="space-y-2 lg:mb-0 mb-6">
          <Logo1_component />

          <div>
            <p className="text-base">Aproveite e siga-nos nas redes sociais</p>
            <div className="mt-1">
              <ul className="flex w-48 justify-between">
                <li>
                  <a href="https://rianc-portfolio.vercel.app/">
                    <AiFillFacebook size={40} />
                  </a>
                </li>
                <li>
                  <a href="https://rianc-portfolio.vercel.app/">
                    <AiFillInstagram size={40} />
                  </a>
                </li>
                <li>
                  <a href="https://rianc-portfolio.vercel.app/">
                    <AiFillTwitterSquare size={40} />
                  </a>
                </li>
                <li>
                  <a href="https://rianc-portfolio.vercel.app/">
                    <AiFillLinkedin size={40} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col flex-wrap space-y-3 md:space-y-0 md:space-x-10">
          {DATA_Footer.map(e => (
            <div className="space-y-3" key={e.id}>
              <h3 className="text-xl font-semibold">{e.title}</h3>
              <ul className="space-y-1">
                {e.lista.map(el => (
                  <li key={el.id}>
                    <Link href={el.link}>
                      <a>{el.item}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}