import React from 'react'
import HeroSlider from "react-slick";

const HeroCarousel = () => {
  const[images,setImages] = useState([]);

  return (
   <>
    <div className='lg:hidden'>   
      <HeroSlider>
        {
          images.map((images)=>(
            <div className='w-full h-56 md:h-80 py-3'>
              <img src="" alt="hero banner" className='w-full h-full rounded-md object-cover' />
            </div>
          ))
        }
      </HeroSlider>
    </div>
    <div className='hidden lg:block'></div>
   </>
  )
}

export default HeroCarousel
