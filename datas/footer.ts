import { DATA_categorias } from "./categorias";


export const DATA_Footer = [
  {
    id: 0,
    title: 'Categorias',
    lista: DATA_categorias.map(e => ({
      item: e.name,
      link: e.link,
      id: e.id
    }))
  },
  {
    id: 1,
    title: 'Atendimento ao Cliente',
    lista: [
      {
        item: 'Canal de atendimento',
        link: 'https://rianc-portfolio.vercel.app/',
        id: 0
      },
      {
        item: 'Formas de Pagamento',
        link: 'https://rianc-portfolio.vercel.app/',
        id: 1
      },
      {
        item: 'Prazo de Entrega',
        link: 'https://rianc-portfolio.vercel.app/',
        id: 2
      },
      {
        item: 'Troca e Devolucao',
        link: 'https://rianc-portfolio.vercel.app/',
        id: 3
      }
    ]
  },
  {
    id: 2,
    title: 'Trabalhe conosco',
    lista: [
      {
        item: 'Trabalhe conosco',
        link: 'https://rianc-portfolio.vercel.app/',
        id: 0
      },
      {
        item: 'Contratacao de Modelos',
        link: 'https://rianc-portfolio.vercel.app/',
        id: 1
      }
    ]
  }
]