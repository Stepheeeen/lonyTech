import '../App.css'
import heroImg from '../assets/hero.png'

function Hero() {
    return(
        <div className='hero'>
            <img src={heroImg} alt="image" className='hero-img'/>
        </div>
    )
}

export default Hero