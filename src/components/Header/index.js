import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <img className='header__img' src='/src/assets/img/Brand-icon-horizontal.png' />
      <div className='header__title'>Sistema Gestor de Exámenes Médicos</div>
      <div className='header__bell-container'>
        <img className='header__bell icon' src='/src/assets/img/Brand-icon-horizontal.png'/>
      </div>
    </div>
  )
}

export default Header
