import '../../App.css'
import iphone from '../../assets/iPhone-12-Pro.png'
import { FaArrowRight } from "react-icons/fa6";

function ClientCard({img}) {
    return(
        <div className='client-card'>
            <img src={img} alt="iphone" />

            <div className='description'>
                <h1>
                Elevate Your Finances:
                </h1>

                <p>
                Experience the Future with Lonytech's <br /> Cutting-Edge Solutions.
                </p>

                <a href="#">
                    Explore Paylony Agent Banking<FaArrowRight className='icon'/>
                </a>
            </div>
        </div>
    )
}

export default ClientCard