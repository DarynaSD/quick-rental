import styled from "styled-components";
import img from '../../img/hero-car.jpg';
import { device } from "../../helpers/breakpoints";


export const HomeWrap=styled('div')({
    maxWidth: '1440px',
    margin: '97px auto 0',
    color: '#FCFCFC',
})

export const HomeSection = styled.section`
    padding: 80px 30px 80px;
    
    background-image: linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: 400;
    
    @media ${device.md} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 150px 120px 150px;
  }

    @media ${device.lg} {
    padding: 200px 250px 250px;
  }
`

export const HeroHeader = styled.h1`
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 0.2;
    width: 300px;
    margin-top: -10px;
    margin-bottom: 50px;
    
    @media ${device.md} {
    font-size: 56px;
    margin-right: 50px;
    margin-bottom: unset;
    width: 452px;
  }
`


export const InfoWrap = styled('div')({
    width: 274,
})