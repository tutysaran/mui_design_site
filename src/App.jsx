import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Header from './MainComponent/Header'
import piechartContent from './MainComponent/piechartContent'
import BrandContent from './MainComponent/brandContent'
import Navbar from './MainComponent/navbar'
import Footer from './MainComponent/footer'
import Testimonials from './MainComponent/testimonials'
import Features from './MainComponent/features'
import Pricing from './MainComponent/pricing'
import FeedbackAns from './MainComponent/feedbackAns'
import Highlights from './MainComponent/highlights'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header/> */}
     <Navbar/>
     <piechartContent/>
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
