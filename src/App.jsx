import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Header from './MainComponent/Header'
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
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header/> */}
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
