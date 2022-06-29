import styled from 'styled-components'

const BannerStyled = styled.div`
  .logo {
    align-items: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 5%;
    background-color: black;
  }

  .App-logo {
    height: 50vh;
    margin-bottom: 2%;
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
