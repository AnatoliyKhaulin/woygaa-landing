import React from 'react'
import styled from 'styled-components'
const StyledSectionTitle = styled.h2`
  position: relative;
  z-index: 2;
  font-size: 72px;
  line-height: 1;
  color: #ffffff;
  width: 100%;
  text-align: center;
  margin-top: 0;
  text-transform: uppercase;
  margin-bottom: 100px;

  @media (max-width: 1920px) {
    font-size: calc(72 / 1920 * 100vw);
    margin-bottom: calc(100 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 32px;
    margin-bottom: 50px;
  }
`

const SectionsTitle = ({ title, children }) => {
  return (
    <StyledSectionTitle data-aos='zoom-in'>
      {title}
      {children}
    </StyledSectionTitle>
  )
}

export default SectionsTitle
