import styled from "styled-components";
import img from '../../img/hero-car.jpg';

export const Wrap = styled('div')({
    maxWidth: '1440px',
    margin: '97px auto 0',
})

export const Section = styled('section')({
    padding: '100px 128px 150px',
})

export const Button = styled('button')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 274,
    height: 44,
    marginTop: 28,

    border: 'none',
    borderRadius: 12,
    backgroundColor: '#3470FF',

    fontSize: 14,
    fontWeight: 400,
    color: '#FCFCFC',

    cursor: 'pointer',

    transition: 'backgroundColor, linear, 250ms',

    '&:is(:hover, :focus)': {
        backgroundColor: '#0B44CD',
    },
})

// for HomePage
export const HomeWrap=styled('div')({
    maxWidth: '1440px',
    margin: '97px auto 0',
    color: '#FCFCFC',
})


export const HomeSection = styled('section')({
    padding: '200px 250px 278px',
    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    backgroundImage: `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${img})`,
})
