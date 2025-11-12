import React from 'react'

import Hero from '../components/Abouthero'
import AboutUs from '../components/AboutUs'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import Choose from '../components/Choose'
import Subscribe from '../components/Subscribe'

const About = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Brands/>
      <Testimonials/>
      <Choose/>
      <Subscribe/>
    </div>
  )
}

export default About