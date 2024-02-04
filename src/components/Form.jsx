import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/slice';
import { Button } from '../pages/styled/main.styled';
import {
  FilterList,
  FilterListWrapper,
  Input,
  InputLabelWrapper,
  Select,
  StyledForm,
} from './styled/Form.styled';
import toast from 'react-hot-toast';
import { brandsArray } from '../helpers/brandsArray';

const initOpen = { brand: false, price: false };

const Form = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const [isOpen, setOpen] = useState(initOpen);

  const handleOpen = (e) => {
  	const type = e.currentTarget.dataset.type;
  	setOpen((prev) => ({ ...initOpen, [type]: !prev[type] }));
  };

  // console.log(brand, price, mileageFrom, mileageTo);

  const dispatch = useDispatch();

  //wrong value in mileage
  const handleWrongValue = (value, form) => {
    if (form === 'mileageFrom') {
      setMileageFrom(value);
    } else {
      setMileageTo(value);
    }

    setTimeout(() => {
      toast.error('"From" should be less or equal "To"', {
        position: 'bottom-center',
      });
    }, 500);
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
  const handleBrandClick = (e) => {
    if (e.target.nodeName !== 'LI') return;
    const value = e.target.textContent;
    setBrand(value);
    console.log("its click on brand");
    setOpen(initOpen);
  }

  //submit
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFilters({ brand, price, mileageFrom, mileageTo }));

    setBrand('');
    setPrice('');
    setMileageFrom('');
    setMileageTo('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputLabelWrapper exec={'brand'}>
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
                .filter(one => one.toLocaleLowerCase().includes(brand.toLocaleLowerCase().trim()))
                .map((one, index) => {
                  return <li key={index}>{one}</li>;
                })}
            </FilterList>
          </FilterListWrapper>
        )}
      </InputLabelWrapper>

      <InputLabelWrapper>
        <label htmlFor="priceSelect">Price / 1 hour</label>
        <Select
          name="price"
          id="priceSelect"
          value={price}
          onChange={handleChange}
        >
          <option value="">To $</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
          <option value="110">110</option>
        </Select>
      </InputLabelWrapper>

      <InputLabelWrapper exec={'mileage'}>
        <label htmlFor="mileageInput">Car mileage / km</label>
        <Input
          type="number"
          name="mileageFrom"
          id="mileageInput"
          value={mileageFrom}
          onChange={handleChange}
          min={1}
          placeholder="From"
          step={100}
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
          step={100}
        />
      </InputLabelWrapper>

      <Button type="submit" width={136}>
        Search
      </Button>
    </StyledForm>
  );
};
export default Form;
