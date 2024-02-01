import React from 'react';
import { Button } from './styled/main.styled';
import {
  HomeSection,
  HomeWrap, HeroHeader,
  InfoWrap,
} from './styled/HomePage.styled';
import { useNavigate } from 'react-router';

export const HomePage = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
      navigate('/catalog');
  };

  return (
    <HomeWrap>
      <HomeSection>
        <HeroHeader>Quick search for a car for rent</HeroHeader>
        <InfoWrap>
          <p>
            You can quickly find a car for rent on our website. Just choose the
            desired option using filters, save to favorites and make an order.
          </p>
          <Button type="button" onClick={handleClick}>
            Choose car
          </Button>
          {/* <Button width={200} type="button" onClick={handleClick}>
            Little but
          </Button> */}
        </InfoWrap>
      </HomeSection>
    </HomeWrap>
  );
};
