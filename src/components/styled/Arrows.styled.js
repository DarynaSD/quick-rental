import { styled } from 'styled-components';

export const SvgWrap = styled.div`
width: 20px;
height: 20px;
background-color: #F7F7FB;

position: absolute;
top: 32px;
right: 18px;
z-index: 90;

`

export const Svg = styled.svg(({direct}) => `
display: block;
width: 20px;
height: 20px;
/* background-color: #F7F7FB; */
cursor: pointer;
pointer-events: none;

rotate: ${direct === 'up' && '180deg'};
`);