import React from 'react'
import styled from 'styled-components'
import SectionsTitle from './SectionsTitle'
import { ReactSVG } from 'react-svg'

const FeaturesWrapper = styled.section`
  position: relative;
  background: url('images/noise.png') 0 0 repeat;
  padding-top: 145px;

  &:after {
    content: '';
    position: absolute;
    bottom: calc(-245 / 1920 * 100vw);
    left: 0;
    right: 0;
    height: calc(277 / 1920 * 100vw);
    width: 100%;
    background: url('images/features_bottom_bg.png') no-repeat;
    background-size: cover;
  }

  @media (max-width: 1920px) {
    padding-top: calc(145 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
  }
`

const FeaturesDescription = styled.p`
  font-family: 'Exo 2', sans-serif;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 120px;

  @media (max-width: 1920px) {
    font-size: calc(28 / 1920 * 100vw);
    line-height: calc(40 / 1920 * 100vw);
    margin-bottom: calc(120 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 16px;
    line-height: 1.2;
  }
`

const FeaturesList = styled.div`
  position: relative;
  z-index: 1;
  max-width: 86%;
  margin: 0 auto;

  @media (max-width: 1280px) {
    max-width: 100%;
  }
`

const FeaturesListRow = styled.div`
  display: flex;
  gap: 250px;
  margin-bottom: 120px;

  @media (max-width: 1920px) {
    gap: calc(250 / 1920 * 100vw);
    margin-bottom: calc(120 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    flex-flow: column nowrap;
    gap: 0;
    justify-content: stretch;
    align-items: stretch;
  }

  &.toRight {
    gap: 240px;
    padding-right: 40px;
    justify-content: flex-end;

    @media (max-width: 1920px) {
      gap: calc(240 / 1920 * 100vw);
      padding-right: calc(40 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      justify-content: center;
      padding: 0;
      gap: 0;
    }
  }
`

const FeaturesListItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 580px;
  height: 204px;

  @media (max-width: 1920px) {
    width: calc(580 / 1920 * 100vw);
    height: calc(204 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    width: 100%;
    height: 150px;
  }

  .feature-glow {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 1280px) {
      width: 100%;
      height: 100%;
      max-width: 520px;
    }

    > div {
      position: relative;
      z-index: 1;

      @media (max-width: 1280px) {
        width: 100%;
        max-width: 520px;
        height: 100%;
      }
    }

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

      @media (max-width: 1280px) {
        left: 5%;
      }
    }

    &::before {
      right: 0;

      @media (max-width: 1280px) {
        right: 5%;
      }
    }

    svg {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 1280px) {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.pink {
    .feature-glow {
      &::after,
      &::before {
        background: #ff00e5;
      }
    }
  }

  &.lime {
    .feature-glow {
      &::after,
      &::before {
        background: #90ff03;
      }
    }
  }

  &.blue {
    .feature-glow {
      &::after,
      &::before {
        background: #00ffff;
      }
    }
  }

  &.yellow {
    .feature-glow {
      &::after,
      &::before {
        background: #ffe850;
      }
    }
  }

  p {
    position: relative;
    z-index: 1;
    font-family: 'Exo 2', sans-serif;
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    text-align: center;

    @media (max-width: 1920px) {
      font-size: calc(28 / 1920 * 100vw);
      line-height: calc(40 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      font-size: 16px;
      line-height: 1.2;
    }
  }
`

const Features = ({ data = null }) => {
  return (
    <FeaturesWrapper id={'features'}>
      <SectionsTitle title={data && data[0].title} />
      <FeaturesDescription
        data-aos='fade-in'
        dangerouslySetInnerHTML={{ __html: data && data[0].description }}
      ></FeaturesDescription>

      <FeaturesList>
        <FeaturesListRow>
          <FeaturesListItem
            className='yellow'
            data-aos='fade-right'
            data-aos-delay='1000'
          >
            <ReactSVG src='./images/Icon_glow_1.svg' className='feature-glow' />
            <p
              dangerouslySetInnerHTML={{ __html: data && data[0].feature1 }}
            ></p>
          </FeaturesListItem>
          <FeaturesListItem
            className='pink'
            data-aos='fade-left'
            data-aos-delay='1000'
          >
            <ReactSVG src='./images/Icon_glow_2.svg' className='feature-glow' />
            <p
              dangerouslySetInnerHTML={{ __html: data && data[0].feature2 }}
            ></p>
          </FeaturesListItem>
        </FeaturesListRow>

        <FeaturesListRow className={'toRight'}>
          <FeaturesListItem
            className='lime'
            data-aos='fade-right'
            data-aos-delay='1000'
          >
            <ReactSVG src='./images/Icon_glow_3.svg' className='feature-glow' />
            <p
              dangerouslySetInnerHTML={{ __html: data && data[0].feature3 }}
            ></p>
          </FeaturesListItem>
          <FeaturesListItem
            className='blue'
            data-aos='fade-left'
            data-aos-delay='1000'
          >
            <ReactSVG src='./images/Icon_glow_4.svg' className='feature-glow' />
            <p
              dangerouslySetInnerHTML={{ __html: data && data[0].feature4 }}
            ></p>
          </FeaturesListItem>
        </FeaturesListRow>

        <FeaturesListRow>
          <FeaturesListItem
            className='pink'
            data-aos='fade-right'
            data-aos-delay='1000'
          >
            <ReactSVG src='./images/Icon_glow_5.svg' className='feature-glow' />
            <p
              dangerouslySetInnerHTML={{ __html: data && data[0].feature5 }}
            ></p>
          </FeaturesListItem>
          <FeaturesListItem
            className='lime'
            data-aos='fade-left'
            data-aos-delay='1000'
          >
            <ReactSVG src='./images/Icon_glow_6.svg' className='feature-glow' />
            <p
              dangerouslySetInnerHTML={{ __html: data && data[0].feature6 }}
            ></p>
          </FeaturesListItem>
        </FeaturesListRow>

        <FeaturesListRow className={'toRight'}>
          <FeaturesListItem
            className='blue'
            data-aos='fade-right'
            data-aos-delay='1000'
          >
            <ReactSVG src='./images/Icon_glow_7.svg' className='feature-glow' />
            <p
              dangerouslySetInnerHTML={{ __html: data && data[0].feature7 }}
            ></p>
          </FeaturesListItem>
          <FeaturesListItem
            className='yellow'
            data-aos='fade-left'
            data-aos-delay='1000'
          >
            <ReactSVG
              src={'./images/Icon_glow_8.svg'}
              className='feature-glow'
            />
            <p
              dangerouslySetInnerHTML={{ __html: data && data[0].feature8 }}
            ></p>
          </FeaturesListItem>
        </FeaturesListRow>
      </FeaturesList>
    </FeaturesWrapper>
  )
}

export default Features
