import { styled } from 'styled-components';

 export const List = styled('ul')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: 1440,
    rowGap: 50,
    columnGap: 29,
    
    scrollBehavior: 'smooth',
 })

export const Item = styled('li')({
    width: 'calc((100% / 4) - 29px)',
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

