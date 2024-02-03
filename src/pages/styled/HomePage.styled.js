import styled from "styled-components";
import img from '../../img/hero-car.jpg';


export const HomeWrap=styled('div')({
    maxWidth: '1440px',
    margin: '97px auto 0',
    color: '#FCFCFC',
})

export const HomeSection = styled('section')({
    padding: '200px 250px 250px',
    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    
    backgroundImage: `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${img})`,
    fontWeight: 400,
})

export const HeroHeader = styled('h1')({
    fontSize: 56,
    fontWeight: 600,
    letterSpacing: 0.2,
    width: 452,
    marginTop: -10,
})

export const InfoWrap = styled('div')({
    width: 274,
})