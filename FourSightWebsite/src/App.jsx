import { useState } from 'react'
// import './App.css'
import Header from './components/Header/Header'
import Hero from './Hero/CarouselHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default App
