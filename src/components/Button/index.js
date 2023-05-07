import './Button.css'

const Button = (props) => {
  return (
    <button className='button-create'>
      {props.children}
    </button>
  )
}

export default Button