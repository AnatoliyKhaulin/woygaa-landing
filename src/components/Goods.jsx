import React from 'react'
import styled from 'styled-components'
import SectionsTitle from './SectionsTitle'
import { ReactSVG } from 'react-svg'

const GoodsWrapper = styled.section`
  background: url('images/noise.png') 0 0 repeat;
  padding: 0 125px 80px;

  > h2 {
    margin-bottom: 80px;

    @media (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1920px) {
    padding: 0 calc(25 / 1920 * 100vw) calc(80 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    padding: 20px 15px 40px;
  }
`

const GoodsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  padding: 0 136px;
  margin-bottom: 70px;

  @media (max-width: 1920px) {
    column-gap: calc(40 / 1920 * 100vw);
    padding: 0 calc(136 / 1920 * 100vw);
    margin-bottom: calc(70 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 30px;
  }

  .icon {
    position: relative;
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
        width: calc(270 / 1920 * 100vw);
        height: calc(270 / 1920 * 100vw);
        filter: blur(calc(160 / 1920 * 100vw));
      }
    }
  }

  article {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;

    h5 {
      position: relative;
      z-index: 1;
      font-family: 'Exo 2', sans-serif;
      font-weight: 400;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      margin: 0;

      @media (max-width: 1920px) {
        font-size: calc(28 / 1920 * 100vw);
        line-height: calc(40 / 1920 * 100vw);
      }

      @media (max-width: 1280px) {
        font-size: 20px;
        line-height: 1;
      }
    }

    @media (max-width: 1280px) {
      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }
  }
`

const GoodsAdvantages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 0;
  padding: 0 100px;

  @media (max-width: 1920px) {
    gap: calc(40 / 1920 * 100vw) 0;
    padding: 0 calc(100 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    display: flex;
    flex-flow: column nowrap;
    gap: 0;
    padding: 0;
  }

  .advantage-icon {
    position: relative;

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
      filter: blur(160px);
      background: #90ff03;

      @media (max-width: 1920px) {
        width: calc(270 / 1920 * 100vw);
        height: calc(270 / 1920 * 100vw);
        filter: blur(calc(160 / 1920 * 100vw));
      }
    }
  }
  article {
    display: flex;
    align-items: center;

    h5 {
      position: relative;
      z-index: 1;
      font-family: 'Exo 2', sans-serif;
      width: calc(100% - 129px);
      font-size: 40px;
      line-height: 52px;
      margin: 0;

      @media (max-width: 1920px) {
        font-size: calc(40 / 1920 * 100vw);
        line-height: calc(52 / 1920 * 100vw);
      }

      @media (max-width: 1280px) {
        font-size: 22px;
        line-height: 1.3;
      }
    }
    &:nth-of-type(2) {
      .advantage-icon {
        &::after {
          background: #ffe850;
        }
      }
    }

    &:nth-of-type(3) {
      .advantage-icon {
        &::after {
          background: #00ffff;
        }
      }
    }
  }
`

const Goods = ({ data = null }) => {
  return (
    <GoodsWrapper id={'goods'}>
      <SectionsTitle title={data && data[0].title} />
      <GoodsList>
        <article data-aos='zoom-in' data-aos-delay='200'>
          <ReactSVG src={'images/Icon_condom.svg'} className='icon' />
          <h5>{data && data[0].good1}</h5>
        </article>
        <article data-aos='zoom-in' data-aos-delay='400'>
          <ReactSVG src={'images/Icon_toys.svg'} className='icon' />
          <h5>{data && data[0].good2}</h5>
        </article>
        <article data-aos='zoom-in' data-aos-delay='600'>
          <ReactSVG src={'images/Icon_underwear.svg'} className='icon' />
          <h5>{data && data[0].good3}</h5>
        </article>
        <article data-aos='zoom-in' data-aos-delay='800'>
          <ReactSVG src={'images/Icon_lubrication.svg'} className='icon' />
          <h5>{data && data[0].good4}</h5>
        </article>
      </GoodsList>

      <GoodsAdvantages>
        <article data-aos='fade-in'>
          <ReactSVG
            src={'images/Icon_stick_green.svg'}
            className='advantage-icon'
          />
          <h5
            dangerouslySetInnerHTML={{ __html: data && data[0].advantage1 }}
          ></h5>
        </article>
        <article data-aos='fade-in'>
          <ReactSVG
            src={'images/Icon_stick_yellow.svg'}
            className='advantage-icon'
          />
          <h5
            dangerouslySetInnerHTML={{ __html: data && data[0].advantage2 }}
          ></h5>
        </article>
        <article data-aos='fade-in'>
          <ReactSVG
            src={'images/Icon_stick_blue.svg'}
            className='advantage-icon'
          />
          <h5
            dangerouslySetInnerHTML={{ __html: data && data[0].advantage3 }}
          ></h5>
        </article>
      </GoodsAdvantages>
    </GoodsWrapper>
  )
}

export default Goods
