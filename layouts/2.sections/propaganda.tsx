import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// TYPES
import { redux_type } from '../../types';

// DATAS
import { DATA_responsive_propaganda } from '../../datas/responsiveis';

export default function Propaganda_component():JSX.Element {

  const AtualWidth = useSelector((state:redux_type) => state.screen)

  return (
    <Carousel className='z-0 mt-0'
      responsive={DATA_responsive_propaganda}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={6000}
      arrows={false}
    >
      <img className='w-full select-none' src={ AtualWidth > 768 ? 'images/tmp/banner.jpg' : AtualWidth > 600 ? 'images/tmp/banner mobile.jpg' : 'images/tmp/banner mobilexs.jpg'} alt="img" />
      <img className='w-full select-none' src={ AtualWidth > 768 ? 'images/tmp/banner.jpg' : AtualWidth > 600 ? 'images/tmp/banner mobile.jpg' : 'images/tmp/banner mobilexs.jpg'} alt="img" />
      <img className='w-full select-none' src={ AtualWidth > 768 ? 'images/tmp/banner.jpg' : AtualWidth > 600 ? 'images/tmp/banner mobile.jpg' : 'images/tmp/banner mobilexs.jpg'} alt="img" />
    </Carousel>
  )
}