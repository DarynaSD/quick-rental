import { device } from '../../helpers/breakpoints';
import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  align-items: flex-end;

  margin: 0 auto 70px;
  width: fit-content;

    @media ${device.lg} {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

export const WrapForMedia = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 18px;
`

export const InputLabelWrapper = styled.div(({ exec }) => `
	position: relative;
	display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: space-between;
	color: #8A8A89;
	font-size: 14px;
	
	height: 74px;
	width: ${exec === 'brand' ? '224px' : exec === 'mileage' ? '320px' : '125px'};

  &:is(:hover, :focus) svg {
    stroke: #3470ff; 
  };

        @media ${device.xs} {
	width: ${exec === 'brand' ? '166px' : exec === 'mileage' ? '260px' : '96px'};
  }
	`
);

//mileage
export const MileageWrap = styled.div`
position: relative;
display: flex;
background-color: #F7F7FB;
border-radius: 14px;

&::after {
	content: '';
	position: absolute;
	left: 50%;
	top: 0;
	width: 1px;
	height: 48px;
	background-color: rgba(138, 137, 137, 0.2);
}

& > input {width: 50%}
`

export const Input = styled.input`
  height: 48px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.12;
  font-size: 16px;

  padding: 14px 18px;
  background-color: #f7f7fb;
  border-radius: 14px;
  border: none;
  outline: none;

  cursor: text;

  &::placeholder {
    color: #121417;
  }

`;

//ul
export const FilterListWrapper = styled.div`
  position: absolute;
  z-index: 53;
  top: 70px;
  padding: 14px;
  padding-right: 7px;
  background-color: #fcfcfc;
  border-radius: 12px;
  z-index: 1;
  width: 100%;
  outline: 1px solid rgba(18, 20, 23, 0.05);
  font-size: 16px;
`;

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: auto;
  max-height: 272px;
  overflow-y: auto;

  cursor: pointer;
  transition: color, linear, 250ms;

  & > li:is(:hover, :focus) {
    color: #3470ff;
  }

  &::-webkit-scrollbar {
    position: absolute;
    top: 0;
    right: 7px;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 12px;
  }
`;
