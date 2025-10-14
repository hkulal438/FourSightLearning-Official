import { useState } from 'react'
// import './App.css'
import Header from './components/Header/Header'
import Hero from './Hero/CarouselHero'
import About from './About/About'
import Team from './Team/Team'
import WhyChoose from './WhyChoose/WhyChoose'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Team />
      <WhyChoose />
    </div>
  )
}

export default App
