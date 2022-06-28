import React from 'react'
import BannerStyled from './BannerStyled'
import logo from './logo512.png'


const Banner: React.FC = () => {
  return (
    <BannerStyled>
      <header>
        <div className='logo'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          UseState
        </p>
  
        </header>
    </BannerStyled>
  )
}

export default Banner
