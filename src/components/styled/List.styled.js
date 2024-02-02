import { styled } from 'styled-components';

 export const List = styled('ul')({
    display: 'flex',
     flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: 1440,
    rowGap: 50,
    columnGap: 29,
    
    scrollBehavior: 'smooth',
 })

export const Item = styled('li')({
    width: 'calc((100% / 4) - 29px)',
    boxShadow: '0px 15px 30px 0px rgba(0, 0, 0, 0)',
    borderRadius: 14,
    overflow: 'hidden',

    transition: 'boxShadow, linear, 250ms',
    
    '&:is(:hover, :focus)': {
        boxShadow: '0px 15px 30px 0px rgba(0, 0, 0, 0.2)',
    },
})

export const ImgThumb = styled('div')({
    position: 'relative',
    borderRadius: 14,
    overflow: 'hidden',
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
})

export const AddThumb = styled('div')({
    marginTop: 8,
    color: 'rgba(18, 20, 23, 0.5)',
    fontSize: 12,
})