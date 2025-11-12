import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Brands from '../components/Brands'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Choose from '../components/Choose'
import Pricing from '../components/Pricing'
import Looking from '../components/Looking'
import Latest from '../components/Latest'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Brands/>
      <Services/>
      <Testimonials/>
      <Choose/>
      <Pricing/>
      <Looking/>
      <Latest/>
      <Subscribe/>
    </div>
  )
}

export default Home