import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all'
import gsap from 'gsap';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Navbar from './components/Navbar';
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      
    </main>
  )
}

export default App