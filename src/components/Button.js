

// const Button = ({color,text,onClick}) => {

    
//     return (
//         <button className='btn'style={{backgroundColor:color}} onClick={onClick}>{text}</button>
//     )
// }

// export default Button

import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button