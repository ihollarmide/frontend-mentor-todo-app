import { css, createGlobalStyle } from 'styled-components';
import LightBanner from '../assets/images/bg-desktop-light.jpg'
import DarkBanner from '../assets/images/bg-desktop-dark.jpg'
import MobileLightBanner from '../assets/images/bg-mobile-light.jpg'
import MobileDarkBanner from '../assets/images/bg-mobile-dark.jpg'

const GlobalStyles = createGlobalStyle`
  -webkit-tap-highlight-color: transparent;

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    padding: 30px;
    width: 100%;
    min-height: 100vh;
    font-family: 'Josefin Sans', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme === "light" ? "hsl(235, 19%, 35%)" : "hsl(234, 39%, 85%)" };

    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% 216px;
    background-color: hsl(0, 0%, 98%);
    background-image: url(${MobileLightBanner});
    background-color: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 21%, 11%)" };
    transition: color 0.25s linear;

    @media only screen and (min-width: 601px) {
      background-image: url(${LightBanner});
      background-size: 100% 300px;
    }

    @media only screen and (max-width: 500px) {
      font-size: 12px;
    }

    @media only screen and (max-width: 375.98px) {
      padding: 25px;
    }



    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0; 
      left: 0;
      transition: opacity 0.25s linear;

      background-repeat: no-repeat;
      background-position: top center;
      background-size: 100% 216px;
      background-color: hsl(235, 21%, 11%);
      background-image: url(${MobileDarkBanner});

      @media only screen and (min-width: 601px) {
        background-image: url(${DarkBanner});
        background-size: 100% 300px;
      }

      ${props => props.theme === "dark" ? 
        css`
          opacity: 1;
        `:
        css`
          opacity: 0;
        `
      }
    }
  }
`

export default GlobalStyles