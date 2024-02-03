import { styled } from 'styled-components';

 export const LoadMoreButton = styled('button')({
    display: 'block',
     minWidth: 80,
    width: 'fit-content',
     padding: '10px 20px',
     margin: '0 auto',

     border: 'none',
     background: 'none',
     color: '#3470FF',
     textDecoration: 'underline',
     fontSize: 16,
     fontWeight: 500,
     cursor: 'pointer',

    transition:  'color linear 250ms',

    '&:is(:hover, :focus)': {
       color: '#0B44CD',
    },
 })