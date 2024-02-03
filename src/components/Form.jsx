import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/slice';
import { Button } from 'pages/styled/main.styled';
import { Input, InputLabelWrapper, Select } from './styled/Form.styled';
import toast from 'react-hot-toast';

const Form = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  console.log(brand, price, mileageFrom, mileageTo);

  const dispatch = useDispatch();

  //wrong value
  const handleWrongValue = (value, form) => {
    if (form === 'mileageFrom') {
      setMileageFrom(value);
    } else {
      setMileageTo(value);
    }

    setTimeout(() => {
      toast.error('"From" should be less than "To"', {
        position: 'bottom-center',
      });
    }, 500);
  };

  //change
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

  //blur
  const handleBlur = () => {
    mileageFrom !== '' &&
      Number(mileageFrom) > mileageTo &&
      handleWrongValue(mileageFrom);
  };

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
    <form onSubmit={handleSubmit}>
      <InputLabelWrapper>
        <label htmlFor="brandInput">Car brand</label>
        <Input
          type="text"
          name="brand"
          id="brandInput"
          value={brand}
          onChange={handleChange}
          placeholder="Enter the text"
        />
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

      <InputLabelWrapper>
        <label htmlFor="mileageInput">Car mileage / km</label>
        <Input
          type="number"
          name="mileageFrom"
          id="mileageInput"
          value={mileageFrom}
          onChange={handleChange}
          placeholder="From"
        />
        <Input
          type="number"
          name="mileageTo"
          id="mileageInput"
          value={mileageTo}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="To"
        />
      </InputLabelWrapper>

      <Button type="submit" width={136}>
        Search
      </Button>
    </form>
  );
};
export default Form;
