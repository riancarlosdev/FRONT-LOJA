import Link from "next/link";
import { DATA_ConfigPage } from "../../datas/config-page";
import Produto_article from "../3-articles/produtos";
import ListPageNext_component from "../list-next-pages";

export default function Produtos_section():JSX.Element {
  return (
    <section>
      <div className={`${DATA_ConfigPage.marginVerticalDeSections}`}>
        <div /*className="flex justify-between items-center"*/>
          <div className="max-w-xs w-auto hover:text-text-3 cursor-pointer duration-200 ease-linear">
            <a href="https://rianc-portfolio.vercel.app/">
              <p>Clique para ver todos os produtos</p>
              <h2 className="text-center text-4xl md:text-left font-bold">Nossos Produtos</h2>
            </a>
          </div>

          <div className="my-10 flex flex-wrap justify-between"> 
            <Produto_article />
            <Produto_article />
            <Produto_article />
            <Produto_article />
            <Produto_article />
            <Produto_article />
            <Produto_article />
            <Produto_article />
            <Produto_article />
          </div>
          {/* <div>
            <ListPageNext_component linkUltimaPage="https://rianc-portfolio.vercel.app/" items={[
              {link: 'https://rianc-portfolio.vercel.app/', page: '1'},
              {link: 'https://rianc-portfolio.vercel.app/', page: '2'},
              {link: 'https://rianc-portfolio.vercel.app/', page: '3'},
              {link: 'https://rianc-portfolio.vercel.app/', page: '4'}
            ]} />
          </div> */}
        </div>
      </div>
    </section>
  )
}