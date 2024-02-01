import styled from "styled-components";


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


