import React from 'react'
import styled from 'styled-components'
import SectionsTitle from './SectionsTitle'
import { ReactSVG } from 'react-svg'

const AboutWrapper = styled.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 50px;

  &:before {
    content: '';
    position: absolute;
    top: calc(-228 / 1920 * 100vw);
    left: 0;
    width: 100%;
    height: calc(349 / 1920 * 100vw);
    background: url('images/about_top_bg.png') no-repeat center 0;
    background-size: cover;
  }

  @media (max-width: 1920px) {
    padding-top: calc(120 / 1920 * 100vw);
    padding-bottom: calc(50 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 25px;
  }
`

const AboutContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 742px 1fr;
  grid-column-gap: 105px;
  align-items: end;

  @media (max-width: 1920px) {
    grid-template-columns: calc(742 / 1920 * 100vw) 1fr;
    grid-column-gap: calc(105 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    display: flex;
    flex-flow: column nowrap;
  }
`

const AboutText = styled.div`
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  padding-right: 20px;

  strong {
    font-family: Gorizont;
  }

  p {
    margin-bottom: 80px;

    @media (max-width: 1920px) {
      margin-bottom: calc(80 / 1920 * 100vw);
    }
    @media (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1920px) {
    font-size: calc(28 / 1920 * 100vw);
    line-height: calc(28 / 1920 * 100vw);
    padding-right: calc(20 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 16px;
    line-height: 1.2;
    padding-right: 0;
  }
`

const AboutNeon = styled.div`
  position: relative;
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 25px;

  @media (max-width: 1920px) {
    font-size: calc(28 / 1920 * 100vw);
    line-height: calc(40 / 1920 * 100vw);
    margin-bottom: calc(25 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  p {
    position: absolute;
    left: 50%;
    top: 47%;
    margin: 0;
    width: 70%;
    z-index: 2;
    text-align: center;
    transform: translate(-50%, -50%);
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;

    strong {
      font-family: Gorizont;
    }

    @media (max-width: 1280px) {
      width: 80%;
    }
  }

  .about-glow {
    position: relative;
    z-index: 1;

    > div {
      position: relative;
      z-index: 1;
    }

    @media (max-width: 1280px) {
      width: 100%;
    }
  }

  .about-mask {
    position: absolute;
    top: -119px;
    left: 50%;
    transform: translateX(-50%);

    > div {
      position: relative;
      z-index: 1;
    }

    &:after {
      position: absolute;
      left: 50%;
      top: 50%;
      content: '';
      width: 200px;
      height: 200px;
      border-radius: 20px;
      background: #90ff03;
      filter: blur(160px);
      transform: translate(-50%, -50%);
    }

    @media (max-width: 1280px) {
      width: 70px;
      height: 70px;
      top: -40px;
    }
  }
`

const About = ({ data = null }) => {
  return (
    <AboutWrapper id={'about'}>
      <div className='container'>
        <SectionsTitle title={data && data[0].title} />
        <AboutContent>
          <AboutNeon data-aos='fade-right'>
            <ReactSVG src='./images/neon_glow.svg' className={'about-glow'} />
            <ReactSVG src='./images/neon_mask.svg' className={'about-mask'} />
            <p dangerouslySetInnerHTML={{ __html: data && data[0].glow }}></p>
          </AboutNeon>
          <AboutText
            data-aos='fade-left'
            dangerouslySetInnerHTML={{ __html: data && data[0].description }}
          ></AboutText>
        </AboutContent>
      </div>
    </AboutWrapper>
  )
}

export default About
