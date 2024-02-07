import { styled } from 'styled-components';

export const SvgWrap = styled.button`
width: 40px;
height: 40px;
background-color: #F7F7FB;

position: absolute;
top: 22px;
right: 8px;
z-index: 90;

display: flex;
align-items: center;
justify-content: center;
padding: 0;
border: none;

cursor: pointer;


&:is(:hover, :focus) svg {
    stroke: #3470ff; 
}
`

export const Svg = styled.svg(({direct}) => `
display: block;
width: 20px;
height: 20px;
stroke: #121417;

rotate: ${direct === 'up' && '180deg'};

transition: stroke 250ms linear, rotate 200ms linear;
`);