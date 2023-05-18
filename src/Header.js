import React from 'react'

function Header({title}) {
  return (
    <header className='Header'>
    <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps = {title:"Social App"}

export default Header