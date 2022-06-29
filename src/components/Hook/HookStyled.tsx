import styled from 'styled-components'

const HooksStyled = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: green;
    font-size: 70px;

  }
  button {
    padding: 10px 20px;
    font-weight: bold;
    font-size: 17px;
    border-radius: 10px;
    box-shadow: 0 0.5px #999;
  }

  button:hover {
    opacity: 0.8;
    background-color: lightblue;
  }

  button:active {
    box-shadow: 0 0px #666;
    transform: translateY(1px);
  }
`

export default HooksStyled