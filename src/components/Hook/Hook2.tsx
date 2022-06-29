import styled from 'styled-components'
import React, { useState } from 'react'
import HooksStyled from './HookStyled'

function traduz(frase: string) {
  const titulo = document.querySelector('h1') as HTMLHeadingElement
  if (frase === 'Hello World!') {
    titulo.setAttribute('style', 'color: red;')
    return 'Olá Mundo!'
  }

  titulo.setAttribute('style', 'color: blue')
  return 'Hello World!'
}

function Hooks() {
  const [title, setTitle] = useState('Hello World!')

  function handleTitle() {
    setTitle(traduz(title))
  }

  return (
    <HooksStyled>
      <h1>{title}</h1>
      <button type="button" onClick={handleTitle}>
        Traduzir
      </button>
    </HooksStyled>
  )
}

export default Hooks
