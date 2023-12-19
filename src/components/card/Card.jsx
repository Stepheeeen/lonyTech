import '../../App.css'
import fintech from '../../assets/fintech.png'

function Card({title, text}) {
    return (
        <div className='light-card'>
            <div className='description'>
                <h1>
                    {title}
                </h1>

                <p>
                    {text}
                </p>
            </div>

            <img src={fintech} alt="" />
        </div>
    )
}

export default Card