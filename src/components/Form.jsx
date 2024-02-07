import React from 'react';
import toast from 'react-hot-toast';
import sprite from '../img/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/slice';
import { Button } from '../pages/styled/main.styled';
import {
  FilterList,
  FilterListWrapper,
  Input,
  InputLabelWrapper,
  MileageWrap,
  StyledForm,
} from './styled/Form.styled';
import { brandsArray } from '../helpers/brandsArray';
import { priceArray } from '../helpers/priceArray';
import { Svg, SvgWrap } from './styled/Arrows.styled';

const initOpen = { brand: false, price: false };

const Form = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [isOpen, setOpen] = useState(initOpen);

  const dispatch = useDispatch();

  //handle open dropdowm
  const handleOpen = e => {
    const type = e.currentTarget.dataset.type;
    setOpen(prev => ({ ...initOpen, [type]: !prev[type] }));
  };

  // handle close dropdown on click on arrow
  //  const handleClose = e => {
  //    const type = e.currentTarget.dataset.type;
  //    setOpen({ ...initOpen, [type]: false });
  //  };

  //handle close dropdown on click outside
  const handleCloseDropdown = e => {
    if (e.target.dataset.type !== 'brand' &&
    e.target.dataset.type !== 'price') {
      setOpen(initOpen)
      return document.removeEventListener('click', handleCloseDropdown);
    }
  };
  
  document.addEventListener('click', handleCloseDropdown);

  //wrong value in mileage
  const handleWrongValue = (value, form) => {
    if (form === 'mileageFrom') {
      setMileageFrom(value);
    } else {
      setMileageTo(value);
    }

    setTimeout(() => {
      toast.error('"From" should be less or equal "To"', {
        position: 'top-center',
      });
    }, 1000);
  };

  //change on input
  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'brand':
        setBrand(value);
        break;

      case 'price':
        setPrice(value.toString());
        break;

      case 'mileageFrom':
        mileageTo !== '' && Number(mileageTo) <= value
          ? handleWrongValue(mileageTo, 'mileageFrom')
          : setMileageFrom(value.toString());
        break;

      case 'mileageTo':
        setMileageTo(value.toString());
        break;

      default:
        console.log('looks like you use inputs wrong');
    }
  };

  //blur on mileage
  const handleBlur = () => {
    mileageFrom !== '' &&
      Number(mileageFrom) > mileageTo &&
      handleWrongValue(mileageFrom);
  };

  // ckick on brand category
  const handleBrandClick = e => {
    if (e.target.nodeName !== 'LI') return;
    const value = e.target.textContent;
    setBrand(value.toString());
    setOpen(initOpen);
  };

  //click on price
  const handlePriceClick = e => {
    if (e.target.nodeName !== 'LI') return;
    const value = e.target.textContent;
    setPrice(value.toString());
    setOpen(initOpen);
  };

  //submit
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFilters({ brand, price, mileageFrom, mileageTo }));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputLabelWrapper exec={'brand'}>
        <SvgWrap onClick={handleOpen} data-type="brand">
          <Svg direct={isOpen.brand ? 'up' : 'down'} data-type="brand">
            <use href={`${sprite}#icon-chevron-down`}></use>
          </Svg>
        </SvgWrap>
        <label htmlFor="brandInput">Car brand</label>
        <Input
          type="text"
          name="brand"
          id="brandInput"
          value={brand}
          onChange={handleChange}
          onFocus={handleOpen}
          placeholder="Enter the text"
          data-type="brand"
          autoComplete="off"
        />
        {isOpen.brand && (
          <FilterListWrapper>
            <FilterList data-type="brand" onClick={handleBrandClick}>
              {brandsArray
                .filter(one =>
                  one
                    .toLocaleLowerCase()
                    .includes(brand.toLocaleLowerCase().trim())
                )
                .map((one, index) => {
                  return <li key={index}>{one}</li>;
                })}
            </FilterList>
          </FilterListWrapper>
        )}
      </InputLabelWrapper>

      <InputLabelWrapper>
        <SvgWrap onClick={handleOpen} data-type="price" type="button">
          <Svg direct={isOpen.price ? 'up' : 'down'} data-type="price">
            <use href={`${sprite}#icon-chevron-down`}></use>
          </Svg>
        </SvgWrap>

        <label htmlFor="priceInput">Price / 1 hour</label>
        <Input
          type="number"
          name="price"
          id="priceInput"
          value={price}
          onChange={handleChange}
          onFocus={handleOpen}
          placeholder="To $"
          data-type="price"
          autoComplete="off"
          min={0}
          max={150}
          step={10}
        />

        {isOpen.price && (
          <FilterListWrapper>
            <FilterList data-type="price" onClick={handlePriceClick}>
              {priceArray.map((one, index) => {
                return <li key={index}>{one}</li>;
              })}
            </FilterList>
          </FilterListWrapper>
        )}
      </InputLabelWrapper>

      <InputLabelWrapper exec={'mileage'}>
        <label htmlFor="mileageInput">Car mileage / km</label>
        <MileageWrap>
          <Input
            type="number"
            name="mileageFrom"
            id="mileageInput"
            value={mileageFrom}
            onChange={handleChange}
            min={1}
            placeholder="From"
          />
          <Input
            type="number"
            name="mileageTo"
            id="mileageInput"
            value={mileageTo}
            onChange={handleChange}
            onBlur={handleBlur}
            min={1}
            placeholder="To"
          />
        </MileageWrap>
      </InputLabelWrapper>

      <Button type="submit" width={136} margin={0}>
        Search
      </Button>
    </StyledForm>
  );
};
export default Form;
