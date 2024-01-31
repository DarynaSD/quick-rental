import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrap, NavLinkWrap } from './styled/Header.styled';

const Header = () => {
  return (
    <HeaderWrap>
      <NavLinkWrap>
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="catalog" className="nav-item">
          Catalog
        </NavLink>
        <NavLink to="favorites" className="nav-item">
          Favorites
        </NavLink>
      </NavLinkWrap>
    </HeaderWrap>
  );
};

export default Header;
