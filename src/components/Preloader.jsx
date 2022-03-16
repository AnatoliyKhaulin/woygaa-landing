import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactSVG } from 'react-svg'

const FlipLogo = keyframes`
  0% {
    transform: scale(1) rotateZ(0);
  }
  10% {
    transform: scale(2) rotateZ(180deg);
  }
  20%, 100% {
    transform: scale(1) rotateZ(360deg);
  }
`

const Hide = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const StyledPreloader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  background: #0a0a0a url('images/noise.png') 0 0 repeat;

  .loader-logo {
    animation-name: ${FlipLogo};
    animation-duration: 3s;
    animation-delay: 0.3s;
    animation-iteration-count: infinite;
  }

  &.isLoading {
    opacity: 1;
    transition: opacity 0.3s;
  }

  &.isDone {
    animation-name: ${Hide};
    animation-duration: 0.7s;
    animation-delay: 0.5s;
    visibility: hidden;
    transition: visibility 1s;
  }
`

export default function Preloader(props) {
  return (
    <StyledPreloader {...props}>
      <ReactSVG src='./images/logo_woyagaa.svg' className='loader-logo' />
    </StyledPreloader>
  )
}
