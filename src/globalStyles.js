import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  #root {
    overflow: hidden;
  }
  @font-face {
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Exo2'), url(fonts/Exo2-Bold.woff2) format('woff2');
  }
  @font-face {
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Exo2'), url(fonts/Exo2-Bold.woff) format('woff');
  }
  @font-face {
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Exo2'), url(fonts/Exo2-Regular.woff2) format('woff2');
  }
  @font-face {
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Exo2'), url(fonts/Exo2-Regular.woff) format('woff');
  }
  @font-face {
    font-family: "Gorizont";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('ALS_Gorizont_ExtraBold'), url(fonts/ALS_Gorizont_ExtraBold.woff2) format('woff2');
  }
  @font-face {
    font-family: "Gorizont";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('ALS_Gorizont_ExtraBold'), url(fonts/ALS_Gorizont_ExtraBold.woff) format('woff');
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #0a0a0a url('images/noise.png') 0 0 repeat;
    color: #fff;
    font-family: Gorizont, Arial, Open Sans, sans-serif;
    width: 100%;
    overflow-x: hidden;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */

    &::-webkit-scrollbar {
      width: 0; /* For Chrome, Safari, and Opera */
    }

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .container {
    margin: 0 auto;

    @media (max-width: 1920px) {
      padding: 0 calc(160 / 1920 * 100vw);
    }

    @media (min-width: 1921px) {
      padding: 0;
      max-width: 1600px;
    }


    @media (max-width: 1280px) {
      padding: 0 15px;
    }

    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */

    &::-webkit-scrollbar {
      width: 0; /* For Chrome, Safari, and Opera */
    }

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  p, h1, h2, h3, h4, h5 {
    margin-top: 0;
  }

  strong {
    font-family: Gorizont, Arial, Open Sans, sans-serif;
  }

  input {
    color: #ffffff;
  }

  @-webkit-keyframes autofill {
    to {
      background: transparent url('images/field_line.svg') 0 100% no-repeat !important;
    }
  }

  input:-webkit-autofill {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
  }
`

export default GlobalStyle
