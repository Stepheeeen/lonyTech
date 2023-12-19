import './App.css'
import logo from './assets/logo.png'
import Hero from './components/Hero.jsx'

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

    <button className='btn' type='submit'>
      Learn More
    </button>
    </nav>

    <Hero />
    </>
  )
}

export default App
