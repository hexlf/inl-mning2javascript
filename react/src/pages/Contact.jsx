import React from 'react'

import Hero from '../components/Contacthero'
import Subscribe from '../components/Subscribe'
import Form from '../components/Form'
import Faq from '../components/Faq'
import ContactInfoPage from '../components/ContactInfoPage'

const Contact = () => {
  return (
    <div>
      <Hero/>
      <Form/>
      <ContactInfoPage/>
      <Faq/>
      <Subscribe/>
    </div>
  )
}

export default Contact