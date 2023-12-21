import '../App.css'
import WhiteLogo from '../assets/light-logo.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import { FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

function Footer() {
    return (
        <footer>
            <div className='about'>
                <img src={WhiteLogo} alt="light logo" />

                <p>
                    Leveraging experienced software engineers and cutting-edge infrastructure.
                </p>

                <p className='socials'>
                    Join the community: 
                    <span className='social-link'>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </span>
                </p>
            </div>
            <div className='explore'>
                <h1>Explore</h1>

                <ul>
                    <li>
                    Home
                    </li>
                    <li>
                    About Us
                    </li>
                    <li>
                    Privacy Policy
                    </li>
                    <li>
                    Terms & Conditions
                    </li>
                </ul>
            </div>
            <div className='quick-link'>
                <h1>Quick Links</h1>

                <ul>
                    <li>
                    Billing and pricing
                    </li>
                    <li>
                    FAQ
                    </li>
                    <li>
                    Help & Support
                    </li>
                </ul>
            </div>
            <div className='contact'>
                <h1>Contact</h1>

                <ul>
                    <li>
                        <FaPhoneAlt className='icon' /> <a href="">+2348790900976</a>
                    </li>
                    <li>
                        <MdMail className='icon' /> <a href="">info@Lonytech.com</a>
                    </li>
                    <li className='location'>
                        <FaLocationDot className='icon' /> <a href="">
                            17, Irepodun Street, Ayegoro, <br /> Off General Gas Road, Ibadan, Nigeria
                            </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer