import { useState } from 'react'
import './App.css'
import PiechartContent from './MainComponent/PiechartContent'
import BrandContent from './MainComponent/BrandContent'
import Navbar from './MainComponent/Navbar'
import Footer from './MainComponent/Footer'
import Testimonials from './MainComponent/Testimonials'
import Features from './MainComponent/Features'
import Pricing from './MainComponent/Pricing'
import FeedbackAns from './MainComponent/FeedbackAns'
import Highlights from './MainComponent/Highlights'

function App() {
  return (
    <>
     <Navbar/>
     <PiechartContent/>
     <BrandContent/>
     <Highlights/>
     <Features/>
     <Testimonials/>
     <Pricing/>
     <FeedbackAns/>
     <Footer/>
    </>
  )
}

export default App