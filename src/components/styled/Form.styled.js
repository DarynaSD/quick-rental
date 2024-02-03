import { styled } from 'styled-components';

export const InputLabelWrapper = styled('div')({
    display: 'flex',
    gap: 4,
    flexDirection: 'column',
    marginBottom: 20,
})

export const Input = styled.input`
font-size: 18px;
	font-weight: 500;
	line-height: 1.12;
	padding: 14px 18px;
	background-color: #F7F7FB;
	border-radius: 14px;
	border: none;
	outline: none;
	cursor: text;`

export const Select = styled.select`
font-size: 18px;
	font-weight: 500;
	line-height: 1.12;
	padding: 14px 18px;
	background-color: #F7F7FB;
	border-radius: 14px;
	border: none;
	outline: none;
	cursor: pointer;`