type Produto_Type = {
  title: string
  description: string
  oldPrice: string
  price: string
  img: string
  alt: string
}

export default function Produto_article({title, description, oldPrice, price, img, alt}:Produto_Type):JSX.Element {
  return (
    <article className="my-5">
      <div className="w-72 md:max-w-xs space-y-2">
        <div className="relative w-full bg-2">
          <img src={img} alt={alt} />
        </div>

        <div>
          <div>
            <h1 className="font-extrabold text-center text-lg mt-2">{title}</h1>
            <p className="text-center text-sm">{description}</p>
          </div>
          <div className="space-x-4 flex justify-center mt-2">
            <span className="text-text-3 line-through">R$ {oldPrice}</span>
            <span className="text-xl font-bold">R$ {price}</span>
          </div>
        </div>
      </div>
    </article>
  )
}