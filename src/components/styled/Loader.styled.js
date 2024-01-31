import { styled } from 'styled-components';
import { keyframes } from 'styled-components';

const loaderColor = '#0B44CD';

export const shadowRolling = keyframes`
    0% {
        box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    
    12% {
        box-shadow: 100px 0 ${loaderColor}, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    
    25% {
        box-shadow: 110px 0 ${loaderColor}, 100px 0 ${loaderColor}, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
    }
    
    36% {
        box-shadow: 120px 0 ${loaderColor}, 110px 0 ${loaderColor}, 100px 0 ${loaderColor}, 0px 0 rgba(255, 255, 255, 0);
    }
    
    50% {
        box-shadow: 130px 0 ${loaderColor}, 120px 0 ${loaderColor}, 110px 0 ${loaderColor}, 100px 0 ${loaderColor};
    }
    
    62% {
        box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0${loaderColor}, 120px 0 ${loaderColor}, 110px 0 ${loaderColor};
    }
    
    75% {
        box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 ${loaderColor}, 120px 0 ${loaderColor};
    }
    
    87% {
        box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 ${loaderColor};
    }
    
    100% {
        box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
    }
    `;

export const LoaderWrap = styled('div')({
    paddingTop: '40px',
});

export const LoaderBody = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #0B44CD;
  left: -100px;
  box-sizing: border-box;
  animation: ${shadowRolling} 2s linear infinite;
`
