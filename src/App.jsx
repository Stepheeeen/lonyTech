import './App.css'
import logo from './assets/logo.png'
import slide from './assets/slide.jpg'
import individual from './assets/individuals.png'
import businesses from './assets/businesses.png'
import MFB from './assets/MFBs.png'
import startup from './assets/startups.png'
// import iphone from './assets/iphone.png'
import Hero from './components/Hero.jsx'
import Button from './components/button/Button.jsx'
import Marquee from 'react-fast-marquee'
import Card from './components/card/Card.jsx'
import Service from './components/Service.jsx'
import CardItem from './components/card/CardItem.jsx'
import CardItemAlt from './components/card/CardItemAlt.jsx'
import ClientCard from './components/card/ClientCard.jsx'
import Client from './components/Client.jsx'
import Footer from './components/Footer.jsx'


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

                    
        <Card title='We are a trailblazing fintech company.' text='Leveraging experienced software engineers and cutting-edge infrastructure.' visibility='none'/>

        <Service />

        <div className='advert-card'>
          <h1>
          Enhanced Financial Access for <br /> Diverse Needs
          </h1>

          <div className='container'>
            <CardItem src={individual} classTitle='green' title='Individuals' text="Tailored financial solutions for your everyday needs, from mobile banking to secure online transactions" />
            <CardItemAlt src={businesses} classTitle='black' title='Businesses' text="Empower your business with streamlined financial tools, optimizing payment processing and account management."/>
            <CardItem src={MFB} classTitle='purple' title='(MFBs)' text="Discover personalized financial solutions for your everyday needs, from seamless mobile banking to secure online transactions." />
            <CardItemAlt src={startup} classTitle='blue' title='Startups' text="Elevate your startup's growth with customized fintech solutions, streamlining operations for lasting financial stability."/>
          </div>
        </div>

        <div className='client-cont'>
          <ClientCard  />

          <h1>
            What our Client says about us
          </h1>

          <Client />
        </div>

        <Card title='We are here for you!' text='Talk to us now and let’s build for you' />

        <Footer />
      </main>
    </>
  )
}

export default App
