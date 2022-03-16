import Promo from './components/Promo'
import GlobalStyle from './globalStyles'
import Header from './components/Header'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import About from './components/About'
import Schemas from './components/Schemas'
import Rates from './components/Rates'
import Goods from './components/Goods'
import Features from './components/Features'
import Form from './components/Form'
import Footer from './components/Footer'
import 'normalize.css'
import { Controller, Scene } from 'react-scrollmagic'
import { isDesktop } from 'react-device-detect'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/compat/app'
import Preloader from './components/Preloader'

const InfoLineBg = styled.div`
  position: relative;
  z-index: -1;
  height: calc(378 / 1920 * 100vw);
  width: 100%;
  background: url('images/info_1.jpg') no-repeat center;
  background-size: cover;

  @media (max-width: 1280px) {
    height: 200px;
  }
`

const InfoLineSecondBg = styled.div`
  position: relative;
  z-index: -1;
  height: calc(503 / 1920 * 100vw);
  width: 100%;
  background: url('images/info_2.png') no-repeat center;
  background-size: cover;

  @media (max-width: 1280px) {
    height: 250px;
  }
`

const InfoLineLastBg = styled.div`
  position: relative;
  z-index: -1;
  height: calc(425 / 1920 * 100vw);
  width: 100%;
  background: url('images/Info_3.png') no-repeat center;
  background-size: cover;

  @media (max-width: 1280px) {
    height: 250px;
  }
`

const Tapes = styled.div`
  width: 100%;
  height: calc(361 / 1920 * 100vw);
  background: url('images/tapes.png') no-repeat center;
  background-size: cover;

  @media (max-width: 1280px) {
    height: 100px;
  }
`

const TapeGoods = styled.div`
  width: 100%;
  height: calc(200 / 1920 * 100vw);
  background: url('images/Tape_second.png') no-repeat 0 center;
  background-size: cover;

  @media (max-width: 1280px) {
    height: 100px;
  }
`

const TapeFooter = styled.div`
  position: relative;
  width: 100%;
  height: calc(200 / 1920 * 100vw);
  background: url('images/footer_tape.png') no-repeat center;
  background-size: cover;

  h3 {
    position: absolute;
    left: 0;
    top: 53%;
    margin: 0;
    white-space: nowrap;
    font-size: calc(59.8 / 1920 * 100vw);
    line-height: calc(60 / 1920 * 100vw);
    text-align: center;
    text-transform: uppercase;
    transform: rotate(2deg) translateY(-50%);
    color: #0a0a0a;

    a {
      color: #0a0a0a;
      text-decoration: none;
    }

    @media (max-width: 425px) {
      font-size: calc(13 / 425 * 100vw);
      text-align: center;
    }
  }

  @media (max-width: 1280px) {
    height: 80px;
  }
`

const Heading = keyframes`
  0% { transform: translateY(-100px); }
  100% { transform: translateY(0);}
`

const HeaderWrap = styled.div`
  height: 0;

  &.sticky {
    height: 90px;
    background: url('images/noise.png') 0 0 repeat;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    transition: height 0.4s;

    #header {
      inset: unset !important;
      padding: 5px 0;
      animation: ${Heading};
      animation-duration: 0.4s;
      animation-fill-mode: forwards;

      .header-btn {
        height: 60px;
      }
    }
  }
`

function App() {
  const [promo, loading] = useCollectionData(
    firebase.firestore().collection('promo')
  )
  const [about] = useCollectionData(firebase.firestore().collection('about'))
  const [schemas] = useCollectionData(
    firebase.firestore().collection('schemas')
  )
  const [rates] = useCollectionData(firebase.firestore().collection('rates'))
  const [goods] = useCollectionData(firebase.firestore().collection('goods'))
  const [features] = useCollectionData(
    firebase.firestore().collection('features')
  )
  const [contacts, contactsLoading] = useCollectionData(
    firebase.firestore().collection('contacts')
  )

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-in-back',
      offset: 20,
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Controller>
        <Preloader className={loading ? 'isLoading' : 'isDone'} />
        <Scene
          classToggle='sticky'
          triggerElement='#promoLine'
          pin='#header'
          indicators={false}
          triggerHook={0}
          enabled={isDesktop}
        >
          <HeaderWrap>
            <Header />
          </HeaderWrap>
        </Scene>
        <Promo data={promo} />
        <InfoLineBg id={'promoLine'} />
        <About data={about} />
        <Tapes />
        <Schemas data={schemas} />
        <InfoLineSecondBg />
        <Rates data={rates} />
        <Goods data={goods} />
        <TapeGoods />
        <Features data={features} />
        <InfoLineLastBg />
        <Form />
        <TapeFooter>
          <h3
            dangerouslySetInnerHTML={{
              __html: !contactsLoading ? contacts[0].line : '',
            }}
          />
        </TapeFooter>
        <Footer />
      </Controller>
    </>
  )
}

export default App
