import React from 'react'
import Hooks from '../Hook/Hook2'
import BannerStyled from './BannerStyled'
import logo from './logo512.png'



const Banner: React.FC = () => {
  return (
    <BannerStyled>
      <header>
        <div className='logo'>
          <img src={logo} className="App-logo" alt="logo" />
          <Hooks />
        </div>
        </header>
    </BannerStyled>
  )
}

export default Banner
