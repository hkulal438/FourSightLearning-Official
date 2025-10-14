import { useState } from 'react'
// import './App.css'
import Header from './components/Header/Header'
import Hero from './Hero/CarouselHero'
import About from './About/About'
import Team from './Team/Team'
import WhyChoose from './WhyChoose/WhyChoose'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Team />
      <WhyChoose />
      <Footer />
    </div>
  )
}

export default App
