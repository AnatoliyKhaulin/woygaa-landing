import React from 'react'
import styled from 'styled-components'
import SectionsTitle from './SectionsTitle'
import { ReactSVG } from 'react-svg'

const SchemasWrapper = styled.section`
  position: relative;
  padding-top: 82px;
  padding-bottom: 88px;

  &:after {
    content: '';
    position: absolute;
    bottom: calc(-188 / 1920 * 100vw);
    left: 0;
    height: calc(327 / 1920 * 100vw);
    width: 100%;
    background: url('/images/schemes_bottom_bg.png') no-repeat center 0;
    background-size: cover;
  }

  @media (max-width: 1920px) {
    padding-top: calc(82 / 1920 * 100vw);
    padding-bottom: calc(88 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    padding: 15px 15px 44px;
  }
`

const SchemasAccent = styled.div`
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 105px;
  text-align: center;

  @media (max-width: 1280px) {
    padding-bottom: 50px;
  }

  h3 {
    position: relative;
    font-size: 40px;
    line-height: 46px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 700;
    z-index: 1;

    @media (max-width: 1920px) {
      font-size: calc(40 / 1920 * 100vw);
      line-height: calc(46 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      font-size: 20px;
      line-height: 1.2;
    }
  }

  .arrow {
    position: absolute;

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
      width: 270px;
      height: 270px;
      display: block;
      border-radius: 50%;
      filter: blur(320px);

      @media (max-width: 1920px) {
        width: calc(270 / 1920 * 100vw);
        height: calc(270 / 1920 * 100vw);
        filter: blur(calc(320 / 1920 * 100vw));
      }
    }

    &-left {
      &-first {
        left: -213px;
        top: -84px;

        &::after {
          background: #ff00e5;
        }

        @media (max-width: 1920px) {
          left: calc(-213 / 1920 * 100vw);
          top: calc(-84 / 1920 * 100vw);
        }
      }

      &-second {
        left: -213px;
        bottom: 14px;

        &::after {
          background: #00ffff;
        }

        @media (max-width: 1920px) {
          left: calc(-213 / 1920 * 100vw);
          bottom: calc(14 / 1920 * 100vw);
        }
      }
    }

    &-right {
      &-first {
        right: -210px;
        top: -84px;

        &::after {
          background: #ffe850;
        }

        @media (max-width: 1920px) {
          right: calc(-210 / 1920 * 100vw);
          top: calc(-84 / 1920 * 100vw);
        }
      }
      &-second {
        right: -210px;
        bottom: 14px;

        &::after {
          background: #90ff03;
        }

        @media (max-width: 1920px) {
          right: calc(-210 / 1920 * 100vw);
          bottom: calc(14 / 1920 * 100vw);
        }
      }
    }
  }
`

const SchemasItem = styled.div`
  position: relative;
  z-index: 1;
  max-width: 984px;
  width: 100%;
  margin: 0 auto 140px;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  font-family: 'Exo 2', sans-serif;

  @media (max-width: 1920px) {
    margin: 0 auto calc(140 / 1920 * 100vw);
    font-size: calc(28 / 1920 * 100vw);
    line-height: calc(40 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 16px;
    line-height: 1.3;
    margin: 0 auto 30px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  p {
    position: relative;
    z-index: 1;
    padding-top: 18px;
  }

  img {
    position: relative;
    z-index: 1;
    max-width: 100%;
    max-height: 100%;
  }

  .icon {
    display: block;
    position: relative;
    height: 203px;
    margin: 0 auto;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 200px;
      height: 200px;
      display: block;
      border-radius: 50%;
      filter: blur(160px);

      @media (max-width: 1920px) {
        width: calc(200 / 1920 * 100vw);
        height: calc(200 / 1920 * 100vw);
        filter: blur(calc(160 / 1920 * 100vw));
      }
    }

    &::after {
      left: 0;
    }

    &::before {
      right: 0;
    }

    @media (max-width: 1920px) {
      height: calc(203 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      height: auto;
    }

    &-fbo {
      width: 410px;

      &::after,
      &::before {
        background: #ff00e5;
      }

      @media (max-width: 1920px) {
        width: calc(410 / 1920 * 100vw);
      }

      @media (max-width: 1280px) {
        width: 80%;
      }
    }
    &-fbs {
      width: 360px;

      &::after,
      &::before {
        background: #00ffff;
      }

      @media (max-width: 1920px) {
        width: calc(360 / 1920 * 100vw);
      }
      @media (max-width: 1280px) {
        width: 80%;
      }
    }
    &-dbs {
      width: 390px;

      &::after,
      &::before {
        background: #90ff03;
      }

      @media (max-width: 1920px) {
        width: calc(390 / 1920 * 100vw);
      }
      @media (max-width: 1280px) {
        width: 80%;
      }
    }
  }
`

const Schemas = ({ data = null }) => {
  return (
    <SchemasWrapper id={'schemas'}>
      <SectionsTitle title={data && data[0].title} />
      <SchemasAccent>
        <ReactSVG
          data-aos='fade-down-right'
          src='/images/icon_arrow_left_1.svg'
          className={'arrow arrow-left-first'}
        />
        <ReactSVG
          data-aos='fade-up-right'
          src='/images/icon_arrow_left_2.svg'
          className={'arrow arrow-left-second'}
        />
        <h3
          data-aos='zoom-in'
          dangerouslySetInnerHTML={{ __html: data && data[0].description }}
        ></h3>
        <ReactSVG
          data-aos='fade-down-left'
          src='/images/icon_arrow_right_1.svg'
          className={'arrow arrow-right-first'}
        />
        <ReactSVG
          data-aos='fade-up-left'
          src='/images/icon_arrow_right_2.svg'
          className={'arrow arrow-right-second'}
        />
      </SchemasAccent>
      <SchemasItem data-aos='fade-in'>
        <picture className='icon icon-fbo'>
          <img
            src='/images/Icon_fbo.png'
            srcSet='/images/Icon_fbo@2x.png'
            alt=''
          />
        </picture>
        <p dangerouslySetInnerHTML={{ __html: data && data[0].fbo }}></p>
      </SchemasItem>
      <SchemasItem data-aos='fade-in'>
        <picture className='icon icon-fbs'>
          <img
            src='/images/Icon_fbs.png'
            srcSet='/images/Icon_fbs@2x.png'
            alt=''
          />
        </picture>
        <p dangerouslySetInnerHTML={{ __html: data && data[0].fbs }}></p>
      </SchemasItem>
      <SchemasItem data-aos='fade-in'>
        <picture className='icon icon-dbs'>
          <img
            src='/images/Icon_dbs.png'
            srcSet='/images/Icon_dbs@2x.png'
            alt=''
          />
        </picture>
        <p dangerouslySetInnerHTML={{ __html: data && data[0].dbs }}></p>
      </SchemasItem>
    </SchemasWrapper>
  )
}

export default Schemas
