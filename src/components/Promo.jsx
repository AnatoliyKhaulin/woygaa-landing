import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactSVG } from 'react-svg'

const GlowHeart = keyframes`
  78% {
      opacity: 1;
  }
  79%{
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  81% {
    opacity: 1;
  }
  82% {
    opacity: 0;
  }
  83% {
    opacity: 1;
  }
  92% {
    opacity: 0;
  }
  92.5% {
    opacity: 1;
  }
`

const PromoWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    bottom: calc(-150 / 1920 * 100vw);
    left: 0;
    height: calc(308 / 1920 * 100vw);
    width: 100%;
    background: url('images/promo_bottom.png') no-repeat center 0;
    background-size: cover;
  }

  @media (max-width: 1280px) {
    padding-top: 0;
    height: 80vh;
    padding-bottom: 40px;
  }

  @media (max-width: 320px) {
    height: 70vh;
  }
`

const PromoTitle = styled.h1`
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 111px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 800;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1920px) {
    font-size: calc(111 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 38px;
    padding: 0 15px;
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 32px;
  }

  @media (max-width: 320px) {
    font-size: 28px;
  }
`

const PromoTitleRow = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 18px;
  width: 100%;

  > span {
    white-space: nowrap;
    position: relative;
    z-index: 1;

    @media (max-width: 1280px) {
      white-space: normal;
      width: 100%;
      word-break: break-word;
    }
  }

  &.second {
    @media (max-width: 1280px) {
      flex-flow: row-reverse nowrap;
      justify-content: flex-start;
    }
  }

  &.three {
    transform: translateX(-104px);

    @media (max-width: 1920px) {
      transform: translateX(calc(-104 / 1920 * 100vw));
    }

    @media (max-width: 1280px) {
      transform: none;

      span {
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
      }
    }
  }

  &.four {
    padding-left: 104px;

    @media (max-width: 1920px) {
      padding-left: calc(104 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      padding-left: 0;
    }
  }

  @media (max-width: 1920px) {
    margin-bottom: calc(18 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    margin-bottom: 0;
  }
`

const PromoTitleArrows = styled.div`
  position: relative;
  margin-left: 12px;
  width: 430px;
  height: 125px;
  display: flex;
  align-items: center;

  @media (max-width: 1920px) {
    height: calc(125 / 1920 * 100vw);
    width: calc(430 / 1920 * 100vw);
  }

  .arrow-wrapper {
    position: relative;

    > div {
      width: 213px;
      height: 213px;
      position: relative;
      z-index: 1;

      @media (max-width: 1920px) {
        width: calc(213 / 1920 * 100vw);
        height: calc(213 / 1920 * 100vw);
      }
    }

    svg {
      width: 100%;
      height: 100%;
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
      background: #ff00e5;
      filter: blur(160px);

      @media (max-width: 1920px) {
        width: calc(200 / 1920 * 100vw);
        height: calc(200 / 1920 * 100vw);
        filter: blur(calc(160 / 1920 * 100vw));
      }
    }

    &:nth-of-type(2) {
      z-index: 2;
      transform: translateX(-110px);

      &::after {
        background: #90ff03;
      }

      @media (max-width: 1920px) {
        transform: translateX(calc(-110 / 1920 * 100vw));
      }
    }

    &:nth-of-type(3) {
      transform: translateX(-220px);

      @media (max-width: 1920px) {
        transform: translateX(calc(-220 / 1920 * 100vw));
      }
    }

    &:nth-of-type(4) {
      transform: translateX(-330px);

      &::after {
        background: #90ff03;
      }

      @media (max-width: 1920px) {
        transform: translateX(calc(-330 / 1920 * 100vw));
      }
    }
  }

  @media (max-width: 1280px) {
    display: none;
  }
`

const PromoTitleHeart = styled.div`
  position: relative;
  margin-right: 74px;
  width: 130px;
  height: 116px;

  @media (max-width: 1920px) {
    width: calc(130 / 1920 * 100vw);
    height: calc(116 / 1920 * 100vw);
    margin-right: calc(74 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 0;
    width: 155px;
    height: 70px;
  }

  .heart-wrapper {
    position: absolute;
    top: -55px;
    left: -21px;

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
      background: #ff00e5;
      filter: blur(160px);

      @media (max-width: 1920px) {
        width: calc(200 / 1920 * 100vw);
        height: calc(200 / 1920 * 100vw);
        filter: blur(calc(160 / 1920 * 100vw));
      }
    }

    @media (max-width: 1920px) {
      top: calc(-55 / 1920 * 100vw);
      left: calc(-21 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      top: 0;
      left: 40px;
    }

    svg {
      width: 210px;
      height: 201px;
      @media (max-width: 1920px) {
        width: calc(210 / 1920 * 100vw);
        height: calc(201 / 1920 * 100vw);
      }
      @media (max-width: 1280px) {
        margin-right: 0;
        width: 130px;
        height: 116px;
      }
    }
  }
`

const PromoTitleEighteen = styled.div`
  position: relative;
  width: 196px;
  height: 116px;

  > div {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 67%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    display: block;
    border-radius: 50%;
    background: #ff00e5;
    filter: blur(160px);

    @media (max-width: 1920px) {
      width: calc(200 / 1920 * 100vw);
      height: calc(200 / 1920 * 100vw);
      filter: blur(calc(160 / 1920 * 100vw));
    }

    @media (max-width: 1280px) {
      width: 100px;
      height: 100px;
      filter: blur(60px);
    }

    @media (min-width: 1280px) {
      animation-name: ${GlowHeart};
      animation-duration: 4s;
      animation-delay: 5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  }
  @media (max-width: 1920px) {
    width: calc(196 / 1920 * 100vw);
    height: calc(116 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    position: absolute;
    right: 80px;
    top: 20px;
    margin-right: 0;
    width: 176px;
    height: 96px;
  }

  .eighteen-wrapper {
    position: absolute;
    top: -50px;
    left: -8px;

    @media (max-width: 1920px) {
      top: calc(-50 / 1920 * 100vw);
      left: calc(-8 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      top: 0;
      left: -10px;
    }

    svg {
      width: 279px;
      height: 209px;

      @media (max-width: 1920px) {
        width: calc(279 / 1920 * 100vw);
        height: calc(209 / 1920 * 100vw);
      }

      @media (max-width: 1280px) {
        width: 279px;
        height: 209px;
      }
    }
  }
`

const Promo = ({ data = null }) => {
  return (
    <PromoWrapper>
      <PromoTitle>
        <PromoTitleRow className='first'>
          <span data-aos='fade-right'>{data ? data[0].stringFirst : ' '}</span>
          <PromoTitleArrows data-aos='fade-in' data-aos-delay='700'>
            <ReactSVG src='./images/arrow_1.svg' className='arrow-wrapper' />
            <ReactSVG src='./images/arrow_2.svg' className='arrow-wrapper' />
            <ReactSVG src='./images/arrow_1.svg' className='arrow-wrapper' />
            <ReactSVG src='./images/arrow_2.svg' className='arrow-wrapper' />
          </PromoTitleArrows>
        </PromoTitleRow>

        <PromoTitleRow className='second'>
          <PromoTitleHeart data-aos='fade-in' data-aos-delay='700'>
            <ReactSVG
              src='./images/icon_love.svg'
              className={'heart-wrapper'}
            />
          </PromoTitleHeart>
          <span data-aos='fade-left' data-aos-delay='200'>
            {data ? data[0].stringSecond : ' '}
          </span>
        </PromoTitleRow>

        <PromoTitleRow className='three'>
          <span data-aos='fade-right' data-aos-delay='400'>
            {data ? data[0].stringThree : ' '}
          </span>
        </PromoTitleRow>

        <PromoTitleRow className='four'>
          <span data-aos='fade-left' data-aos-delay='600'>
            {data ? data[0].stringFour : ' '}
          </span>
          <PromoTitleEighteen data-aos='fade-in' data-aos-delay='700'>
            <ReactSVG
              src='./images/icon_18.svg'
              className={'eighteen-wrapper'}
            />
          </PromoTitleEighteen>
        </PromoTitleRow>
      </PromoTitle>
    </PromoWrapper>
  )
}

export default Promo
