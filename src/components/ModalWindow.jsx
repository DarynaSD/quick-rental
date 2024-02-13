import { formatModalAddress } from '../helpers/formatModalAddress';
import { formatModalFuel } from '../helpers/formatModalFuel';
import { formatAccessories } from '../helpers/formatAccessories';
import sprite from '../img/sprite.svg';
import { Span } from './styled/List.styled';
import {
  Backdrop,
  CondItem,
  ConditionsList,
  Gradient,
  InfoWrapper,
  LinkButton,
  Modal,
  ModalImg,
  Regular,
  SvgClose,
  Title,
  UnderTitle,
  WrapForScroll,
} from './styled/Modal.styled';
import { nanoid } from '@reduxjs/toolkit';

const defaultImg =
  'https://www.gavalimotors.com/adminpanel/assets/images/carnotfound.jpg';

export const ModalWindow = ({ modalData, onClose }) => {
  const conditions = modalData.rentalConditions.split('\n');
  const age = conditions[0].split(': ');
  conditions.shift();

  const fixMileage = modalData.mileage.toString().replace(/^(\d)/, '$1,');
  document.body.style.overflow = 'hidden';

  const handleEscapeKey = event => {
    if (event.code === 'Escape') {
      onClose();
      document.body.style.overflow = 'scroll';
      return document.removeEventListener('keydown', handleEscapeKey);
    }
  };

  document.addEventListener('keydown', handleEscapeKey);

  const handleClose = e => {
    if (
      e.target.dataset.type === 'backdrop' ||
      e.target.dataset.type === 'close-modal'
    ) {
      document.body.style.overflow = 'scroll';
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleClose} data-type="backdrop">
      <Modal>
        <SvgClose onClick={handleClose} data-type="close-modal">
          <use href={`${sprite}#icon-close-x`}></use>
        </SvgClose>

        <ModalImg
          src={modalData.img ? modalData.img : defaultImg}
          alt={modalData.make}
        />

        <Title>
          <span>{modalData.make} </span>
          <Span>{modalData.model}, </Span>
          <span>{modalData.year}</span>
        </Title>

        <WrapForScroll>

        <InfoWrapper>
          <p>{formatModalAddress(modalData)}</p>
          <p>{formatModalFuel(modalData)}</p>
        </InfoWrapper>

        <UnderTitle>{modalData.description}</UnderTitle>

        <Regular>Accessories and functionalities:</Regular>
        <InfoWrapper>
          <p>{formatAccessories(modalData)}</p>
        </InfoWrapper>

        <Regular>Rental Conditions: </Regular>
        <ConditionsList>
          <CondItem key={nanoid()}>
            {age[0]}: <Span>{age[1]}</Span>
          </CondItem>
          {conditions.map(item => (
            <CondItem key={nanoid()}>{item}</CondItem>
          ))}
          <CondItem key={nanoid()}>
            Mileage: <Span>{fixMileage}</Span>
          </CondItem>
          <CondItem key={nanoid()}>
            Price: <Span>{modalData.rentalPrice.replace(/[^0-9]/g, '')}$</Span>
          </CondItem>
          </ConditionsList>
        <Gradient/>
        </WrapForScroll>

        <LinkButton href="tel:+380730000000">
        Rental car
        </LinkButton>
      </Modal>
    </Backdrop>
  );
};
