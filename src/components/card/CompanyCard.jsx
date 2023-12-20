import '../../App.css'

function CompanyCard({companyName, title, text}) {
    return(
        <div className='company-card'>
            <img src={companyName} alt="" />

            <h1>
                {title}
            </h1>

            <p>"{text}"</p>


        </div>
    )
}

export default CompanyCard