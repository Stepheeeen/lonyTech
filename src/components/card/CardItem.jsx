import '../../App.css'
import icon from '../../assets/icon.svg'

function CardItem({src, classTitle, text, title}) {
    return(
        <div className='card-item'>
            <img src={src} alt="" className='card-img'/>

            <div className='card-desc'>
                <h1 className={classTitle}>
                    {title}
                </h1>

                <p>
                    {text}
                </p>

                <a href="#">
                    <img src={icon} alt="" /> <span>Explore Now</span>
                </a>
            </div>
        </div>
    )
}
export default CardItem