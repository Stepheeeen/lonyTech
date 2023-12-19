import '../App.css'
import heroImg from '../assets/hero.png'

function Hero() {
    return(
        <div className='hero'>
            <div>
            <h1>
                transforming <span className='span-1'>finance</span> 
                <br />
                with <span className='span-2'>innovation</span> 
            </h1>

            <p>

            </p>
            </div>

            <img src={heroImg} alt="image" className='hero-img'/>
        </div>
    )
}

export default Hero