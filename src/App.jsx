import React from 'react'
import Header from './components/Header'
import Section2 from './components/Section2'
import CoffeeCart from './components/CoffeeCart'
import WhyDifferent from './components/WhyDifferent'
import OrderNow from './components/OrderNow'
import Feedback from './components/Feedback'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
const App = () => {
  return (
    <div >
      <Header/>
      <Section2/>
      <CoffeeCart/>
      <WhyDifferent/>
      <OrderNow/>
      <Feedback/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
