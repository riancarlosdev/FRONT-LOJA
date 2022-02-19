import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import ArticleCombo_component from "../3-articles/combo";

export default function CombosSection():JSX.Element {

  const ActualWidth = useSelector(state => state)

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1222, min: 840 },
      items: 2,
      partialVisibilityGutter: 80
    },
    desktop: {
      breakpoint: { max: 840, min: 745 },
      items: 2,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 745, min: 554 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 554, min: 0 },
      items: 1
    }
  }

  return (
    <section>
      <div className="mt-10">
        <h2 className="text-center text-4xl md:text-left font-bold">Combos imperdíveis</h2>

        <div className="mt-10 ">
          {ActualWidth > 1222 ? (
            <div className="flex justify-between">
              <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
              <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
              <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
            </div>
          ) : (
            <Carousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              autoPlaySpeed={6000}
            >
              <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
              <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
              <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  )
}
