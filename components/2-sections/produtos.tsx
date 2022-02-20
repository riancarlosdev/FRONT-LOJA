import { DATA_ConfigPage } from "../../datas/config-page";
import { DATA_Produtos } from "../../datas/produtos";
import Produto_article from "../3-articles/produtos";

export default function Produtos_section():JSX.Element {
  return (
    <section>
      <div className={`mt-24`}>
        <div /*className="flex justify-between items-center"*/>
          <div className="m-auto md:m-0 sm:max-w-sm w-64 sm:w-auto hover:text-text-3 cursor-pointer duration-200 ease-linear">
            <a href="https://rianc-portfolio.vercel.app/">
              <p className="text-xs sm:text-base text-center md:text-left">Clique para ver todos os produtos</p>
              <h2 className="text-center text-2xl sm:text-4xl md:text-left font-bold">Nossos Produtos</h2>
            </a>
          </div>

          <div className="my-10 flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:justify-around"> 
            {DATA_Produtos.map(e => (
              <Produto_article alt={e.alt} description={e.description} img={e.img} oldPrice={e.oldPrice} price={e.price} title={e.title} key={e.id} />
            ))}
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