import React from 'react'
import styled from 'styled-components'
import SectionsTitle from './SectionsTitle'
import { ReactSVG } from 'react-svg'
import { Link } from 'react-scroll'

const RatesWrapper = styled.section`
  padding-top: 78px;
  position: relative;
  background: url('images/noise.png') 0 0 repeat;
  padding-bottom: 120px;
  text-align: center;

  @media (max-width: 1920px) {
    padding-top: calc(78 / 1920 * 100vw);
    padding-bottom: calc(120 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    padding: 60px 15px;
  }

  &:before {
    content: '';
    position: absolute;
    top: calc(-196 / 1920 * 100vw);
    left: 0;
    right: 0;
    height: calc(328 / 1920 * 100vw);
    width: 100%;
    background: url('images/rate_top_bg.png') no-repeat;
    background-size: cover;
  }

  > h2 {
    position: relative;
    width: fit-content;
    margin: 0 auto 100px;
    z-index: 1;

    @media (max-width: 1920px) {
      margin: 0 auto calc(100 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      margin: 0 auto 30px;
    }
  }
`

const RatesSticker = styled.div`
  display: block;
  position: absolute;
  left: -205px;
  top: -100px;
  width: 280px;
  height: 199px;
  background: url('images/sticker.png') no-repeat 0 0;
  background-size: cover;

  @media (max-width: 1920px) {
    left: calc(-205 / 1920 * 100vw);
    top: calc(-100 / 1920 * 100vw);
    width: calc(280 / 1920 * 100vw);
    height: calc(199 / 1920 * 100vw);
  }
`

const RatesDescription = styled.div`
  max-width: 984px;
  margin: 0 auto;
  font-size: 28px;
  line-height: 36px;
  font-family: 'Exo 2', sans-serif;

  @media (max-width: 1920px) {
    font-size: calc(28 / 1920 * 100vw);
    line-height: calc(36 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 16px;
    line-height: 1.3;
  }

  p {
    margin-bottom: 11px;
    position: relative;
    z-index: 1;

    @media (max-width: 1920px) {
      margin-bottom: calc(11 / 1920 * 100vw);
    }
  }

  > div {
    display: flex;
    justify-content: center;
    margin-bottom: 6px;

    @media (max-width: 1920px) {
      margin-bottom: calc(6 / 1920 * 100vw);
    }

    > div {
      &:nth-of-type(1) {
        transform: translateX(47px);

        @media (max-width: 1920px) {
          transform: translateX(calc(47 / 1920 * 100vw));
        }
      }
      &:nth-of-type(3) {
        transform: translateX(-47px);

        @media (max-width: 1920px) {
          transform: translateX(calc(-47 / 1920 * 100vw));
        }
      }
    }
  }
`

const RatesFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 93px 67px 0;

  @media (max-width: 1920px) {
    padding: calc(93 / 1920 * 100vw) calc(67 / 1920 * 100vw) 0;
  }

  @media (max-width: 1280px) {
    padding: 50px 0 0;
  }

  .arrow {
    position: relative;
    width: 32px;
    height: 64px;

    @media (max-width: 1280px) {
      display: none;
    }

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
      filter: blur(160px);

      @media (max-width: 1920px) {
        width: calc(270 / 1920 * 100vw);
        height: calc(270 / 1920 * 100vw);
        filter: blur(calc(160 / 1920 * 100vw));
      }
    }

    &:nth-of-type(2) {
      &::after {
        background: #00ffff;
      }
    }

    &:nth-of-type(4) {
      &::after {
        background: #ffe850;
      }
    }

    &:nth-of-type(8) {
      &::after {
        background: #00ffff;
      }
    }

    &:nth-of-type(11) {
      &::after {
        background: #ffe850;
      }
    }

    &:nth-of-type(13) {
      &::after {
        background: #00ffff;
      }
    }

    &:nth-of-type(15) {
      &::after {
        background: #ffe850;
      }
    }

    &:nth-of-type(18) {
      &::after {
        background: #00ffff;
      }
    }

    &:nth-of-type(21) {
      &::after {
        background: #ffe850;
      }
    }

    &:nth-of-type(24) {
      &::after {
        background: #00ffff;
      }
    }

    > div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .contacts-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 1;
    color: #080808;
    background: #00ffff;
    box-shadow: 0 8px 32px rgba(0, 255, 255, 0.54);
    border-radius: 20px;
    border: none;
    outline: none;
    height: 80px;
    width: 358px;
    margin: 0 35px;
    padding: 0 0 5px;
    cursor: pointer;
    transition: box-shadow 0.3s;

    @media (min-width: 1200px) {
      &:hover {
        box-shadow: none;
        transition: box-shadow 0.3s;
      }
    }

    @media (max-width: 1280px) {
      width: 100%;
      margin: 0;
      font-size: 18px;
      height: 60px;
    }
  }
`

const RatesDescriptionCircles = styled.div`
  position: relative;

  > div {
    position: relative;
    z-index: 1;

    @media (max-width: 1280px) {
      width: 90px;
      height: 90px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 270px;
    height: 270px;
    display: block;
    border-radius: 50%;
    filter: blur(320px);
    background: #ffe850;

    @media (max-width: 1920px) {
      width: calc(270 / 1920 * 100vw);
      height: calc(270 / 1920 * 100vw);
      filter: blur(calc(320 / 1920 * 100vw));
    }
  }
`

const Rates = ({ data = null }) => {
  return (
    <RatesWrapper id={'rates'}>
      <SectionsTitle title={data && data[0].title}>
        <RatesSticker />
      </SectionsTitle>
      <RatesDescription data-aos='fade-in'>
        <p
          dangerouslySetInnerHTML={{ __html: data && data[0].description1 }}
        ></p>
        <RatesDescriptionCircles>
          <ReactSVG src={'/images/small_yellow_circle.svg'} />
          <ReactSVG src={'/images/small_yellow_circle.svg'} />
          <ReactSVG src={'/images/small_yellow_circle.svg'} />
        </RatesDescriptionCircles>
        <p
          dangerouslySetInnerHTML={{ __html: data && data[0].description2 }}
        ></p>
      </RatesDescription>
      <RatesFooter data-aos='fade-in'>
        <ReactSVG src={'/images/arrow_right_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_right_blue.svg'} className={'arrow'} />

        <Link
          className='contacts-btn'
          to='form'
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          data-aos='zoom-in'
          data-aos-delay='1500'
        >
          Стать клиентом бесплатно
        </Link>

        <ReactSVG src={'/images/arrow_left_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_blue.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_yellow.svg'} className={'arrow'} />
        <ReactSVG src={'/images/arrow_left_blue.svg'} className={'arrow'} />
      </RatesFooter>
    </RatesWrapper>
  )
}

export default Rates
