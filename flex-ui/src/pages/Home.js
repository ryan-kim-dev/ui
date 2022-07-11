import React, { useRef } from 'react';
import land from './land.png';
import cat from './cat.gif';
import moon from './moon.png';
import styled from 'styled-components';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const StyledText = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 50px;
`;

const Home = () => {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        >
          <h2>안녕하세요</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: 'cover' }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} alt="cat" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <StyledText>고양이 내려온다</StyledText>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <StyledText>Bye Bye</StyledText>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
