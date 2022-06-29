import React, { useState } from 'react'
import SecaoStyled from './SecaoStyled'

function Secao1() {
  return (
    <SecaoStyled>
    <div>
      <nav>
        <h1>Entenda de vez o useState (Vídeo de referência)</h1>
      </nav>
      <div className='container'>
      
        <iframe 
        src="https://www.youtube.com/embed/Jxe79XZ9u-Y" 
        width="70%"
        frameBorder="0"
        allowFullScreen
        height="80%"
        title="useState">
            video
        </iframe>
    </div>
    </div>
  </SecaoStyled>
  )
}

export default Secao1