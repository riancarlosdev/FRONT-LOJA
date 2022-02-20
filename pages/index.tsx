import { useResizeDetector } from 'react-resize-detector';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import Header_component from "../components/1-header";
import Container_component from "../components/container";
import InfoTopPage_component from "../components/info-top-page";
import Categorias_section from '../components/2-sections/categorias';
import Propaganda_component from '../components/2-sections/propaganda';
import CombosSection from '../components/2-sections/combos';
import Produtos_section from '../components/2-sections/produtos';

export default function Home():JSX.Element {

  const { width, ref } = useResizeDetector()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch({
      type: 'NEW',
      payload: width
    })
  }, [ width, dispatch ])
  
  return (
    <main ref={ref}>
      <Container_component background="bg-1">
        <div className='py-1 sm:py-0'>
          <InfoTopPage_component />
        </div>
      </Container_component>

      <Container_component background="bg-2">
        <Header_component />
      </Container_component>

      <div className='relative z-50'>
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
  )
}
