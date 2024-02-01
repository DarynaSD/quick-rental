import styled from "styled-components";


export const Wrap = styled('div')({
    maxWidth: '1440px',
    margin: '97px auto 0',
})

export const Section = styled('section')({
    padding: '100px 128px 150px',
})

export const Button = styled.button(({width}) => `
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${width ? width : '274'}px;
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
`)


