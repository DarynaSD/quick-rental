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
	background-color: #FFFFFF;
	border-radius: 24px;
	padding: 40px;
    width: 540px;
    max-height: 90vh;
`

export const SvgClose = styled.svg`
position: absolute;
	top: 16px;
	right: 16px;
	width: 24px;
	height: 24px;
	fill: var(--color-primary-dark);
	stroke: var(--color-primary-dark);
	cursor: pointer;
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
export const InfoWrapper = styled.div`
	margin-bottom: 14px;
	max-width: 460px;
    font-size: 12px;
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
color: #FFFFFF;
font-weight: 500;
`