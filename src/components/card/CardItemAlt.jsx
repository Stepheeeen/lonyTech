import '../../App.css'
import icon from '../../assets/icon.svg'

function CardItemAlt({src, classTitle, text, title}) {
    return(
        <div className='card-item'>

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

        <img src={src} alt="" className='card-img card-img-alt'/>
    </div>
    )
}
export default CardItemAlt