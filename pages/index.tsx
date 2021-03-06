import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useResizeDetector } from 'react-resize-detector';

// LAYOUTS
import Header_component from "../layouts/1.header";
import CombosSection from '../layouts/2.sections/combos';
import Produtos_section from '../layouts/2.sections/produtos';
import Categorias_section from '../layouts/2.sections/categorias';
import Propaganda_component from '../layouts/2.sections/propaganda';
import SidePreviewProduct_component from '../layouts/4-sides/preview-produtc';

// COMPONENTS
import Container_component from "../components/container";
import InfoTopPage_component from "../components/info-top-page";

export default function Home():JSX.Element {

  const dispatch = useDispatch()

  const { width, ref } = useResizeDetector()

  useEffect(() => {
    if(width) {
      dispatch({
        type: 'new',
        payload: width
      })
    }
  }, [ width, dispatch ])

  return (
    <>
      <main ref={ref}>
        <Container_component background="bg-1">
          <div className='py-1 sm:py-0'>
            <InfoTopPage_component />
          </div>
        </Container_component>

        <Container_component background="bg-2">
          <Header_component />
        </Container_component>

        <div className='relative z-20'>
          <Container_component shadow={true} background='bg-4'>
            <Categorias_section />
          </Container_component>
        </div>

        <Propaganda_component />

        <Container_component background='bg-3'>
          <CombosSection />      
        </Container_component>

        <Container_component background='bg-3'>
          <Produtos_section />
        </Container_component>
      </main>
      
      <SidePreviewProduct_component />
    </>
  )
}
