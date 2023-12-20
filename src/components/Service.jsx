import '../App.css'
import phone from '../assets/phones.png'
import dashboard from '../assets/dashboard.png'
import { FaArrowRight } from "react-icons/fa6";

function Service() {
    return (
        <>
            <div className='service'>
                <div className='description'>
                    <h1>
                        We Elevate Your Finances:
                    </h1>
                    <p>
                        Experience the Future with Lonytech's Cutting-Edge <br /> Solutions.
                    </p>

                    <a href="#">
                        Explore Paylony Mobile App<FaArrowRight className='icon'/>
                    </a>
                </div>

                <img src={phone} alt="" className='phone'/>
            </div>

            <div className='service-2'>
            <div className='description'>
                    <h1>
                    Empower your Business:
                    </h1>
                    <p>
                    Unleash New Possibilities with Lonytech's Agent Banking<br /> Solutions.
                    </p>

                    <a href="#">
                    Explore Paylony Agent Banking<FaArrowRight className='icon'/>
                    </a>
                </div>

                <img src={dashboard} alt="" className='phone'/>
            </div>
        </>
    )
}

export default Service