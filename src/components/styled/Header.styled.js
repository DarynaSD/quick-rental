import { styled } from 'styled-components';

export const HeaderWrap = styled('div')({
    display: 'block',
    width: '100%',
    margin: '0px auto',
    padding: '30px',
    position: 'fixed',
    top: 0,
    borderBottom: '1px solid transparent',
    borderImage: 'linear-gradient(0.25turn, rgba(56,2,155,0), rgba(82, 133, 255), rgba(0, 49, 164), rgba(56,2,155,0))',
    borderImageSlice: 1,
})

export const NavLinkWrap = styled('nav')({
    margin: '0 auto',
    maxWidth: 1440,
    display: 'flex',
    flexWrap: 'nowrap',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
})