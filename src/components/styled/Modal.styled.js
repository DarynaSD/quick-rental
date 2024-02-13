import { styled } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(75, 74, 74, 0.8);
  z-index: 100;
`

export const Modal = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 40px;
  width: 540px;
  max-height: 90vh;
  width: 541px;
  overflow: hidden;
`

export const SvgClose = styled.svg`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 44px;
  height: 44px;
  padding: 10px;
  stroke: #121417;

  cursor: pointer;
  transition: stroke 250ms linear;

  &:is(:hover, :focus) {
    stroke: #0b44cd;
  }
`

export const ModalImg = styled.img`
  height: 248px;
  width: 461px;
  margin-bottom: 14px;
  border-radius: 14px;
`

export const Title = styled.h2`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 8px;
`

export const WrapForScroll = styled.div`
  max-height: 200px;
  overflow: auto;

  &::-webkit-scrollbar {
    position: absolute;
    top: 0;
    right: 7px;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 12px;
  }
  `;

export const Gradient = styled.div`
height: 20px;
background: linear-gradient(transparent, #F7F7FB);
`

export const InfoWrapper = styled.div`
  margin-bottom: 14px;
  max-width: 460px;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`

export const UnderTitle = styled.h3`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 14px;
`

export const Regular = styled.p`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 24px;
`

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  max-width: 460px;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 8px;
`

export const CondItem = styled.li`
  background-color: #f9f9f9;
  padding: 7px 14px;
  border-radius: 35px;
`

export const A = styled.a`
  color: #ffffff;
  font-weight: 500;
`

export const LinkButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 168px;
    width: 100%;
    height: 44px;
    margin-top: 28px;

    border: none;
    border-radius: 12px;
    background-color: #3470FF;

    font-size: 14px;
    font-weight: 300px;
    color: #FCFCFC;

    cursor: pointer;

    transition:  background-color, linear, 250ms;

    &:is(:hover, :focus) {
        background-color: #0B44CD;
    };
`
