import { styled } from 'styled-components';

 export const List = styled('ul')({
    display: 'grid',
    maxWidth: '100%',
    gridTemplateColumns: 'repeat(auto-fill, minmax(274px, 274px))',
    gridColumnGap: 29,
     gridRowGap: 50,
    justifyContent: 'center',

    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',

    scrollBehavior: 'smooth',
 })

export const Item = styled('li')({
    height: 426, 
    overflow: 'hidden',
    transition: 'background, linear, 250ms',
    
    '&:is(:hover, :focus)': {
        background: '#F7F7FB',
    },

    cursor: 'default',
})

export const ImgThumb = styled('div')({
    position: 'relative',
    borderRadius: 14,
    overflow: 'hidden',
    minHeight: 268,
})

export const Overlay = styled('div')({
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundImage: 'linear-gradient( #121417, transparent)',
})

export const TextThumb = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 14,
    fontWeight: 500,
})

export const AddThumb = styled('div')({
    marginTop: 8,
    color: 'rgba(18, 20, 23, 0.5)',
    fontSize: 12,
    lineHeight: 1.5,
    height: 112,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

export const Span = styled('span')({
    color: '#3470FF',
})

