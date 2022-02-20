export default function Produto_article():JSX.Element {
  return (
    <article className="my-5">
      <div className="max-w-xs space-y-2">
        <div className="relative w-full h-80 bg-2">
          <img src="/images/tmp/produto-img.jpg" alt="produto" />
        </div>

        <div>
          <div>
            <h1 className="font-extrabold text-center text-lg mt-2">Nome do produto</h1>
            <p className="text-center text-sm">Descriao do produto com no maximo 2 linhas. exemplo para completar linha</p>
          </div>
          <div className="space-x-4 flex justify-center mt-2">
            {/* PRECO ANTIGO */}
            <span className="text-text-3 line-through">R$ 15,89</span>

            {/* PRECO ATUAL */}
            <span className="text-xl font-bold">R$ 13,99</span>
          </div>
        </div>
      </div>
    </article>
  )
}