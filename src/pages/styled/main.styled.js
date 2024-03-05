import styled from "styled-components";


export const Wrap = styled('div')({
    maxWidth: '1440px',
    margin: '97px auto 0',
})

export const Section = styled('section')({
    padding: '80px 128px 150px',
})

export const Button = styled.button(({ width, margin, height, reset, del }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: ${width ? width : '274'}px;
    width: 100%;
    height: ${height ? height : '44'}px;
    margin-top: ${margin ? margin : '28'}px;

    border-style: ${reset ? 'solid' : 'none'};
    border-color: ${reset && '#ECECF2'};
    border-width: ${reset && '1px'};
    border-radius: 12px;

    background-color: ${reset ? '#FCFCFC' : del ? '#579df7' : '#3470FF'};

    font-size: 14px;
    font-weight: 300px;
    color: ${reset ? '#747474' : '#FCFCFC'};

    cursor: pointer;

    transition: 
    ${reset ? 'color, linear, 250ms; border-color, linear, 250ms' : 'background-color linear 250ms'};

    &:is(:hover, :focus) {
       background-color: ${!reset && '#0B44CD'};
       color: ${reset && '#0B44CD'};
       border-color: ${reset && '#0B44CD'};
    };

    &:disabled {
        cursor: no-drop;
        border-color: ${reset && '#ECECF2'};
        color: ${reset && '#ECECF2'};
    }
`)

export const HeartButton = styled.button(({isli}) => `
    position: absolute;
    width: 50px;
    height: 50px;
    top: 14px;
	right: 14px;
    padding: 15px;
	border-radius: 5px;
	background: none;
    border: none;
    background-color: none;

    cursor: pointer;

    &::before,  &::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 0px;
    width: 10px;
    height: 18px;
    background: ${isli ? '#3470FF' : '#CCCCCC'};
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    transition: background-color 0.5s ease;
    }

    &::after {
    right: 10px;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    }

    &:is(:hover, :focus)::after,
    &:is(:hover, :focus)::before {
        background: ${isli ? '#0B44CD' : '#FCFCFC'};
    };
`)

