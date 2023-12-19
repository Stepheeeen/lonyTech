import '../App.css'
import heroImg from '../assets/hero.png'

function Hero() {
    return(
        <div className='hero'>
            <div>
            <h1>
                transforming finance
                <br />
                with innovation
            </h1>

            <p>

            </p>
            </div>

            <img src={heroImg} alt="image" className='hero-img'/>
        </div>
    )
}

export default Hero