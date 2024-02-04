import { styled } from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
    gap: 18px;

	margin: 0 auto 50px;
	width: fit-content;

`

export const InputLabelWrapper = styled.div(({exec}) => `
	position: relative;
	display: flex;
    gap: 4px;
    flex-direction: column;
	margin-bottom: 20px;
	
	width: ${exec === 'brand' ? '224px' : exec ===  'mileage' ? '320px' : '125px'};
	height: 48px;
	`
)

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

export const Datalist = styled.datalist`
 position: absolute;
 top: -60px;
 left: 0;
  /* max-height: 20em;
  border: 0 none;
  overflow-x: hidden;
  overflow-y: auto; */
`