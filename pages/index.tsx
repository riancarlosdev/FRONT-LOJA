import { useResizeDetector } from 'react-resize-detector';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Header_component from "../components/1-header";
import Container_component from "../components/container";
import InfoTopPage_component from "../components/info-top-page";

export default function Home():JSX.Element {

  const { width, ref } = useResizeDetector()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch({
      type: 'NEW',
      payload: width
    })
  }, [ width ])
  
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
    </main>
  )
}
