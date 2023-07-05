import React, { memo } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/display-name
const NumberBall = memo(({number}) => {
    let background;
  if (number < 10) {
    background = 'red';
  } else if (number < 20) {
    background = 'orange';
  } else if (number < 30) {
    background = 'yellow';
  } else if (number < 40) {
    background = 'aqua';
  } else {
    background = 'green';
  }

  const Ball = styled.div`
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    font-size: 5vh;
    line-height: 10vh;
    margin: 0 1vh 0 1vh;
    color: #444;
    font-weight: bold;
    text-align: center;
  `

  return (
    <Ball style={{ backgroundColor: background }}>
      {number}
    </Ball>
  );
});

export default NumberBall;


