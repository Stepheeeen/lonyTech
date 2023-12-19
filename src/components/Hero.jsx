import '../App.css'
import heroImg from '../assets/hero.png'
import Button from '../components/button/Button.jsx'

function Hero() {
    return(
        <div className='hero'>
            <div className='description'>
            <h1 className='title'>
                transforming <span className='span-1'>finance</span> 
                <br />
                with <span className='span-2'>innovation</span> 
            </h1>

            <p className='text'>
            Lonytech is a leading financial technology company dedicated to revolutionizing digital banking and payment solutions.
            </p>

                <Button message='Learn More' />
            </div>

            <img src={heroImg} alt="image" className='hero-img'/>
        </div>
    )
}

export default Hero