import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { Formik } from 'formik'
import InputMask from 'react-input-mask'
import emailjs from 'emailjs-com'

const FormWrapper = styled.div`
  position: relative;
  padding-top: 73px;
  padding-bottom: 200px;

  &:before {
    content: '';
    position: absolute;
    top: calc(-176 / 1920 * 100vw);
    left: 0;
    width: 100%;
    height: calc(317 / 1920 * 100vw);
    background: url('images/footer_top_bg.png') no-repeat;
    background-size: cover;
  }

  @media (max-width: 1920px) {
    padding-top: calc(73 / 1920 * 100vw);
    padding-bottom: calc(200 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    padding-top: 50px;
    padding-bottom: 100px;
  }
`

const FormTitle = styled.h2`
  position: relative;
  z-index: 1;
  font-size: 111px;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 104px;

  @media (max-width: 1920px) {
    font-size: calc(111 / 1920 * 100vw);
    margin-bottom: calc(104 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 32px;
    margin-bottom: 50px;
  }

  span {
    position: relative;
    z-index: 1;
  }

  .martini {
    transform: translateY(-20px);

    @media (max-width: 1920px) {
      transform: translateY(calc(-20 / 1920 * 100vw));
    }

    > div {
      width: 206px;
      height: 202px;
      position: relative;
      z-index: 1;

      @media (max-width: 1920px) {
        width: calc(206 / 1920 * 100vw);
        height: calc(202 / 1920 * 100vw);
      }
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

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .footer-arrow {
    position: relative;
    > div {
      position: relative;
      z-index: 1;
      width: 453px;
      height: 160px;

      @media (max-width: 1920px) {
        width: calc(453 / 1920 * 100vw);
        height: calc(160 / 1920 * 100vw);
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
      background: #00ffff;
      filter: blur(160px);

      @media (max-width: 1920px) {
        width: calc(200 / 1920 * 100vw);
        height: calc(200 / 1920 * 100vw);
        filter: blur(calc(160 / 1920 * 100vw));
      }
    }
  }
`

const FormTitleRow = styled.span`
  display: flex;
  align-items: center;

  &:last-child {
    transform: translateX(-45px);
    margin-top: -56px;

    @media (max-width: 1920px) {
      margin-top: calc(-56 / 1920 * 100vw);
      transform: translateX(calc(-45 / 1920 * 100vw));
    }

    @media (max-width: 1280px) {
      margin-top: 0;
    }
  }
`

const FormContainer = styled.div`
  position: relative;
  button {
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
    width: 370px;
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
      background: #00ffff;
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
      width: calc(370 / 1920 * 100vw);
      height: calc(80 / 1920 * 100vw);
      font-size: calc(22 / 1920 * 100vw);
      line-height: calc(26 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      width: 100%;
      font-size: 18px;
      line-height: 1.4;
      height: 60px;
    }
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 1280px) {
      flex-flow: column nowrap;
      align-items: center;
    }
  }
`
const FormField = styled.div`
  position: relative;
  font-size: 22px;
  line-height: 26px;
  width: 370px;

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
    background: #fff;
    filter: blur(160px);

    @media (max-width: 1920px) {
      width: calc(200 / 1920 * 100vw);
      height: calc(200 / 1920 * 100vw);
      filter: blur(calc(160 / 1920 * 100vw));
    }

    @media (max-width: 1280px) {
      display: none;
    }
  }

  @media (max-width: 1920px) {
    width: calc(370 / 1920 * 100vw);
    font-size: calc(22 / 1920 * 100vw);
    line-height: calc(26 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 18px;
    line-height: 1.2;
    width: 100%;
    margin-bottom: 30px;
  }

  &:last-of-type {
    @media (max-width: 1280px) {
      margin-bottom: 60px;
    }
  }

  input {
    position: relative;
    z-index: 1;
    background: transparent url('images/field_line.svg') 0 100% no-repeat !important;
    background-size: contain;
    outline: none;
    border: none;
    height: 80px;
    font-size: 22px;
    line-height: 26px;
    font-family: 'Exo 2', sans-serif;
    width: 100%;
    padding: 0;

    @media (max-width: 1920px) {
      height: calc(80 / 1920 * 100vw);
      font-size: calc(22 / 1920 * 100vw);
      line-height: calc(26 / 1920 * 100vw);
    }

    @media (max-width: 1280px) {
      font-size: 18px;
      line-height: 1.2;
      height: 80px;
    }

    &::placeholder {
      color: #fff;
    }

    &:focus {
      &::placeholder {
        color: transparent;
      }
    }
  }
`

const FormErrors = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -35px;
  left: 0;
  font-family: 'Exo 2', sans-serif;
  font-size: 22px;
  line-height: 26px;
  color: #a52a2a;

  @media (max-width: 1920px) {
    font-size: calc(22 / 1920 * 100vw);
    line-height: calc(26 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    font-size: 18px;
    line-height: 1.2;
  }
`

const ThanksMessage = styled.div`
  position: absolute;
  top: 160%;
  text-align: center;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  font-size: 80px;
  transition: opacity 0.3s, visibility 0.3s;

  @media (max-width: 1920px) {
    font-size: calc(80 / 1920 * 100vw);
  }

  @media (max-width: 1280px) {
    top: -10px;
    font-size: 18px;
  }

  &.isShowed {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s, visibility 0.3s;
  }
`

const Form = () => {
  const [showThanks, setShowThanks] = useState(false)

  function SendEmail(object) {
    emailjs.send('', '', object, '').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }
  return (
    <FormWrapper id={'form'}>
      <div className='container'>
        <FormTitle data-aos='fade-in'>
          <FormTitleRow>
            <span>Стать нашим</span>
            <ReactSVG src={'/images/Icon_martini.svg'} className={'martini'} />
          </FormTitleRow>
          <FormTitleRow>
            <ReactSVG
              src={'/images/Icon_footer_arrow.svg'}
              className={'footer-arrow'}
            />
            <span>клиентом</span>
          </FormTitleRow>
        </FormTitle>

        <FormContainer>
          <ThanksMessage className={showThanks ? 'isShowed' : ''}>
            Спасибо! Мы вам перезвоним!
          </ThanksMessage>
          <Formik
            initialValues={{
              email: '',
              name: '',
              phone: '',
              company_name: 'Woygaa',
            }}
            validate={(values) => {
              const errors = {}
              if (!values.email) {
                errors.email = 'Введите email'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Неверный email адрес'
              }
              if (!values.name) {
                errors.name = 'Введите имя'
              }
              if (!values.phone) {
                errors.phone = 'Введите номер телефона'
              } else if (
                !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i.test(
                  values.phone
                )
              ) {
                errors.phone = 'Неверный номер телефона'
              }

              return errors
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              SendEmail(values)
              window.dataLayer.push({
                event: 'event-to-ga',
                eventCategory: 'form',
                eventAction: 'form_sended',
              })
              setShowThanks(true)
              resetForm({ values: '' })
              setSubmitting(false)
              setTimeout(() => {
                setShowThanks(false)
              }, 3000)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <FormField>
                  <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder='Имя'
                  />
                  <FormErrors>
                    {errors.name && touched.name && errors.name}
                  </FormErrors>
                </FormField>

                <FormField>
                  <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='Email'
                  />
                  <FormErrors>
                    {errors.email && touched.email && errors.email}
                  </FormErrors>
                </FormField>

                <FormField>
                  <InputMask
                    mask='+7 (999) 999 99 99'
                    maskChar=' '
                    type='tel'
                    name='phone'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder='Телефон'
                  />
                  <FormErrors>
                    {errors.phone && touched.phone && errors.phone}
                  </FormErrors>
                </FormField>

                <button type='submit' disabled={isSubmitting}>
                  Стать клиентом
                </button>
              </form>
            )}
          </Formik>
        </FormContainer>
      </div>
    </FormWrapper>
  )
}

export default Form
