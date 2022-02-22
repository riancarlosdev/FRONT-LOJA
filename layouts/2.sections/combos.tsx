import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";

// TYPES
import { redux_type } from "../../types";

// DATAS
import { DATA_responsive_combos } from "../../datas/responsiveis";

// LAYOUTS
import ArticleCombo_component from "../3-articles/combo";

export default function CombosSection():JSX.Element {

  const ActualWidth = useSelector((state:redux_type) => state.screen)

  return (
    <section>
      <div className={'mt-24'}>
        <div>
          <p className="text-xs sm:text-base md:text-left text-center">Aproveite nossos combos por tempo limitado!</p>
          <h2 className="text-center text-2xl sm:text-4xl md:text-left font-bold">Combos imperdíveis</h2>
        </div>

        <div className="mt-10 ">
          {ActualWidth > 1222 ? (
            <div className="flex justify-between">
              <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
              <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
              <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
            </div>
          ) : (
            <div className={ActualWidth < 555 ? 'max-w-sm m-auto' : ''}>
              <Carousel className={ActualWidth < 555 ? 'max-w-sm' : ''}
                responsive={DATA_responsive_combos}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={6000}
                partialVisible={true}
                arrows={false}
              >
                <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
                <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
                <ArticleCombo_component description="Na compra de 2 pecas a 3 sai por R$39,99" img="/images/tmp/combo-img.jpg" />
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
