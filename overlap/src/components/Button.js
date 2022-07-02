import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const StyledButton = styled.button``;

function Button() {
  const [clicked, setClicked] = useState(0);
  const handleButtonClick = () => {
    setClicked(clicked + 1);
  };
  return (
    <div>
      <StyledButton onClick={handleButtonClick}>입력</StyledButton>

      <p>버튼 클릭 횟수: {clicked}</p>
    </div>
  );
}

export default Button;
