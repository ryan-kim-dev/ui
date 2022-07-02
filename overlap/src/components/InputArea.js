import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const StyledInput = styled.input``;

function InputArea({ clicked }) {
  const [currentText, setCurrentText] = useState('');
  const handleInputChange = e => {
    setCurrentText(e.target.value);
  };

  return (
    <div>
      <div>
        <StyledInput
          type="text"
          onChange={handleInputChange}
          count={clicked}
        ></StyledInput>
        <p>내용 : {currentText}</p>
      </div>
    </div>
  );
}

export default InputArea;
