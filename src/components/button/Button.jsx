import '../../App.css'

function Button({message}) {
    return (
    <button className='btn' type='submit'>
        {message}
    </button>
    )
}

export default Button