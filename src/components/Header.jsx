import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { Link } from 'react-scroll'
import { isMobile } from 'react-device-detect'

const MainHeader = styled.header`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 40px;
  background-color: transparent;

  .header-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #080808;
    background: #00ffff;
    box-shadow: 0 8px 32px rgba(0, 255, 255, 0.54);
    border-radius: 20px;
    border: none;
    outline: none;
    height: 80px;
    width: 100%;
    max-width: 244px;
    padding: 0 0 5px;
    cursor: pointer;
    transition: box-shadow 0.3s;

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
      background: #04fafe;
      filter: blur(160px);

      @media (max-width: 1920px) {
        width: calc(200 / 1920 * 100vw);
        height: calc(200 / 1920 * 100vw);
        filter: blur(calc(160 / 1920 * 100vw));
      }
    }

    @media (min-width: 1200px) {
      &:hover {
        box-shadow: none;
        transition: box-shadow 0.3s;
      }
    }

    @media (max-width: 1920px) {
      font-size: calc(22 / 1920 * 100vw);
      height: calc(80 / 1920 * 100vw);
      line-height: calc(26 / 1920 * 100vw);
      max-width: calc(244 / 1920 * 100vw);
      padding: 0 0 calc(5 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      display: none;
    }
  }
  @media (max-width: 1280px) {
    padding-top: 10px;
  }
`

const MainHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1280px) {
    flex-flow: column nowrap;
    overflow: hidden;
  }
`

const HeaderNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
  }

  li {
    margin: 0 14px;
  }

  a {
    display: inline-flex;
    align-items: center;
    padding: 10px;
    font-weight: 400;
    font-family: 'Exo 2', sans-serif;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;

    &.active {
      color: #00ffff;
    }

    @media (max-width: 1920px) {
      font-size: calc(22 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      font-size: 24px;
      padding: 20px 0;
    }

    @media (min-width: 1200px) {
      &:hover {
        color: #00ffff;
        transition: color 0.3s;
      }
    }
  }

  @media (max-width: 1280px) {
    position: fixed;
    left: 100%;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a0a0a;
    z-index: 2;
    transition: left 0.5s;

    ul {
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }

    &.isOpen {
      left: 0;
      transition: left 0.5s;
    }
  }
`

const HeaderLogo = styled.a`
  width: 149px;
  height: 80px;

  svg {
    width: 100%;
    height: 100%;
  }
`

const HeaderMenuBtn = styled.button`
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 4px 3px;
  border-radius: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;

  .line {
    position: relative;
    display: block;
    width: 100%;
    height: 4px;
    background: #fff;
    border: none;
    transition: transform 0.4s, top 0.3s;
  }

  &.isOpen {
    padding: 0;

    .line {
      transition: transform 0.4s, top 0.3s;
    }

    .line_top {
      top: 16px;
      transform: rotate(135deg);
    }

    .line_middle {
      top: -2px;
      transform: rotate(-135deg);
    }

    .line_bottom {
      opacity: 0;
      transform: rotate(180deg);
    }
  }

  @media (min-width: 1281px) {
    display: none;
  }
`

const Header = () => {
  const [navOpen, setNavOpened] = useState(false)
  const handlerNavOpen = () => {
    setNavOpened(!navOpen)
  }
  return (
    <MainHeader id={'header'}>
      <MainHeaderWrapper className='container'>
        <HeaderLogo href='/'>
          <ReactSVG src='./images/logo_woyagaa.svg' />
        </HeaderLogo>
        {isMobile && (
          <HeaderMenuBtn
            className={navOpen ? 'isOpen' : ''}
            onClick={handlerNavOpen}
          >
            <span className='line line_top' />
            <span className='line line_middle' />
            <span className='line line_bottom' />
          </HeaderMenuBtn>
        )}
        <HeaderNav className={navOpen ? 'isOpen' : ''}>
          <ul>
            <li>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                href={'#'}
                onClick={() => setNavOpened(false)}
              >
                О сервисе
              </Link>
            </li>

            <li>
              <Link
                activeClass='active'
                to='schemas'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                href={'#'}
                onClick={() => setNavOpened(false)}
              >
                Схемы работы
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='rates'
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                href={'#'}
                onClick={() => setNavOpened(false)}
              >
                Тарифы
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='goods'
                spy={true}
                smooth={true}
                duration={500}
                offset={-170}
                href={'#'}
                onClick={() => setNavOpened(false)}
              >
                Товары
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='features'
                spy={true}
                smooth={true}
                duration={700}
                offset={-20}
                href={'#'}
                onClick={() => setNavOpened(false)}
              >
                Особенности
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='form'
                spy={true}
                smooth={true}
                duration={700}
                offset={0}
                href={'#'}
                onClick={() => setNavOpened(false)}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </HeaderNav>

        <Link
          className='header-btn'
          to='form'
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Стать клиентом
        </Link>
      </MainHeaderWrapper>
    </MainHeader>
  )
}

export default Header
