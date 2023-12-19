import '../../App.css'
import fintech from '../../assets/fintech.png'

function Card() {
    return (
        <div className='light-card'>
            <div className='description'>
                <h1>
                    We are a trailblazing fintech company.
                </h1>

                <p>
                    Leveraging experienced software engineers and cutting-edge infrastructure.
                </p>
            </div>

            <img src={fintech} alt="" />
        </div>
    )
}

export default Card