import './App.css'
import logo from './assets/logo.png'

function App() {

  return (
    <>
    <nav className='navbar'>
    <img src={logo} alt='logo' className='logo' />

    <ul className='nav-links'>
      <li>Home</li>
      <li>Product</li>
      <li>About Us</li>
      <li>Contact</li>
    </ul>

    <button className='btn' type='submit'>
      Learn More
    </button>
    </nav>
    </>
  )
}

export default App
