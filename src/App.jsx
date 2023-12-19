import './App.css'
import logo from './assets/logo.png'
import slide from './assets/slide.jpg'
import Hero from './components/Hero.jsx'
import Button from './components/button/Button.jsx'
import Marquee from 'react-fast-marquee'
import Card from './components/card/Card.jsx'

function App() {

  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />

        <ul className='nav-links'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <Button message='Learn More' />
      </nav>

      <main>
        <Hero />

        <Marquee>
          <img src={slide} alt="" className='slide'/>
        </Marquee>

        <Card />
      </main>
    </>
  )
}

export default App
