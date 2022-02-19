import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useSelector } from 'react-redux';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Propaganda_component():JSX.Element {

  const AtualWidth = useSelector(state => state)

  return (
    <Carousel className='z-0 mt-2'
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={6000}
    >
      <img className='w-full select-none' src={ AtualWidth > 768 ? 'images/tmp/banner-1.jpg' : 'images/tmp/banner mobile.jpg'} alt="" />
      <img className='w-full select-none' src={ AtualWidth > 768 ? 'images/tmp/banner-1.jpg' : 'images/tmp/banner mobile.jpg'} alt="" />
      <img className='w-full select-none' src={ AtualWidth > 768 ? 'images/tmp/banner-1.jpg' : 'images/tmp/banner mobile.jpg'} alt="" />
    </Carousel>
  )
}