import '../App.css'
import Company1 from '../assets/company-1.png'
import Company2 from '../assets/company-2.png'
import Company3 from '../assets/company-3.png'
import Company4 from '../assets/company-4.png'
import CompanyCard from './card/CompanyCard'

function Client() {
    return(
        <div className='client'>
            <CompanyCard companyName={Company1} title='Company 1' text="Lonytech has transformed the way we handle financial transactions." />
            <CompanyCard companyName={Company2} title='Company 2' text="Lonytech has transformed the way we handle financial transactions." />
            <CompanyCard companyName={Company3} title='Company 3' text="Elevate your startup's growth with customized fintech solutions, streamlining operations for lasting financial stability." />
            <CompanyCard companyName={Company4} title='Company 4' text="Elevate your startup's growth with customized fintech solutions," />
        </div>
    )
}

export default Client