import React from 'react'
import styled, {css, keyframes, ThemeProvider} from 'styled-components';

export default function ComponentesEstilizados () {
  let mainColor = '#db7093',
    mainAlphaColor80 = '#db709380';

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }  

    100% {
      opacity: 1;
    }
  `;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align:center;
    color: ${({ color }) => color || "#fff"};
    background-color: ${mainColor};
    transition: ${setTransitionTime(".5s")};
    animation: ${fadeIn} 2s ease-out;

    ${({ isButton}) => isButton && css`
      mardin: auto;
      max-width: 50%;
      border-radius: 1rem;
      cursor: pointer;
      background-color: #ccc;
      color: #000;
    `}

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  const light = {
    color: "#222",
    bgColor: "#DDD"
  }
  const dark = {
    color: '#DDD',
    bgColor: "#222"
  }

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;  
  `;

  return(
    <>
      <h2>Styled-Components</h2>
      <MyH3>un h4 estilizado</MyH3>
      <MyH3 color="#61dafb">un h4 estilizado</MyH3>
      <MyH3 isButton>Soy un h3 estilizado como botón</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy caja light</Box>
        <BoxRounded>Soy caja light con border radius</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy caja dark</Box>
        <BoxRounded>Soy caja dark con border radius</BoxRounded>
      </ThemeProvider>
    </>
  )
}