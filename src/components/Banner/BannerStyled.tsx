import styled from 'styled-components'

const BannerStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;

  .App-logo {
    height: 50vh;
  }

  h6 {
    font-size: 30px;
    color: #fff;
  }

  p {
    color: white;
    text-align:center;
  }
    
    @media (prefers-reduced-motion: no-preference) {
      .App-logo {
        animation: App-logo-spin infinite 20s linear;
      }
    }
    
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

export default BannerStyled
