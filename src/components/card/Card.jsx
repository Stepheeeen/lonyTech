import '../../App.css'
import fintech from '../../assets/fintech.png'
import { FaArrowRight } from "react-icons/fa6";


function Card({title, text, visibility}) {
    return (
        <div className='light-card'>
            <div className='description'>
                <h1>
                    {title}
                </h1>

                <p>
                    {text}
                </p>

                <a href="#" className={visibility}>
                    Contact Us Now<FaArrowRight className='icon'/>
                    </a>
            </div>

            <img src={fintech} alt="" />
        </div>
    )
}

export default Card