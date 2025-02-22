import React, { useState } from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'

//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'


const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([])
  const [premierMovies, setPremierMovies] = useState([])
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([])


  return (
   <>
      <HeroCarousel />
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 my-3'>The Best of Entertainment</h1>
        <EntertainmentCardSlider />
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
          title = "Recommended Movies"
          subtitle = "List of Recommended Movies" 
          posters = {recommendedMovies}
          isDark = {false}
        />
      </div>

      <div className='bg-premier-800 py-12' >
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md-flex'>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" 
                    alt="RuPay" className='w-full h-full' />
          </div>
          <PosterSlider 
          title = "Premiers"
          subtitle = "Brandnew release every Friday" 
          posters = {premierMovies}
          isDark = {true}
        />
        </div>
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
          title = "Online Streaming Events"
          subtitle = "Online Streaming Events" 
          posters = {onlineStreamEvents}
          isDark = {false}
        />
      </div>

   </>
  )
}

export default DefaultLayoutHoc(HomePage);
