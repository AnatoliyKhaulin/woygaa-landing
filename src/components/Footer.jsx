import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

const FooterWrapper = styled.footer`
  text-align: center;
  font-family: 'Exo 2', sans-serif;
  font-size: 22px;
  line-height: 26px;
  padding-top: 115px;
  padding-bottom: 100px;

  .copyright {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1920px) {
    padding-top: calc(115 / 1920 * 100vw);
    padding-bottom: calc(100 / 1920 * 100vw);
    font-size: calc(22 / 1920 * 100vw);
    line-height: calc(26 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    padding: 50px 15px;
    font-size: 16px;
    line-height: 1.2;
  }
`

const FooterLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;

  p {
    position: relative;
    z-index: 1;
    margin: 0 15px 0 5px;

    @media (max-width: 1280px) {
      line-height: 1.5;
    }
  }

  a {
    position: relative;
    z-index: 1;
    text-decoration: none;
    color: #ffffff;
  }

  .icon-arrow {
    position: relative;

    > div {
      position: relative;
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      display: block;
      border-radius: 50%;
      background: #90ff03;
      filter: blur(160px);

      @media (max-width: 1920px) {
        width: calc(200 / 1920 * 100vw);
        height: calc(200 / 1920 * 100vw);
        filter: blur(calc(160 / 1920 * 100vw));
      }
    }
  }
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <FooterWrapper>
      <div className='copyright'>&copy; {currentYear}</div>
      <FooterLink>
        <ReactSVG src='./images/icon_arrow_copy.svg' className='icon-arrow' />
        <p>
          Проект компании{' '}
          <a href='https://p5s.ru/' target='_blank' rel='noreferrer'>
            Поставщик счастья.
          </a>
        </p>
      </FooterLink>
    </FooterWrapper>
  )
}

export default Footer
