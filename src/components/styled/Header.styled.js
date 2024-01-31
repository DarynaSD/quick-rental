import { styled } from 'styled-components';

export const HeaderWrap = styled('div')({
    display: 'block',
    width: '100%',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 74.64%, #F7F7FB 100%)',
    padding: '30px',
    position: 'fixed',
})

export const NavLinkWrap = styled('nav')({
    margin: '0 auto',
    maxWidth: 400,
    display: 'flex',
    flexWrap: 'nowrap',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
})