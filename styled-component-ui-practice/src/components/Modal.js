import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: 'Raleway', sans-serif;
`;

const ModalBtn = styled.button`
  /* position: relative; */
  width: 100px;
  height: 40px;
  background-color: blue;
  border-radius: 30px;
  cursor: pointer;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-size: 12px;
`;

const ModalBackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalView = styled.div`
  position: relative; // 추가
  background-color: #fff;
  width: 150px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 14px;

  > .closeBtn {
    background-color: transparent;
    position: absolute;
    top: 3px;
    right: 3px;
  }
`;

export const Modal = () => {
  // * 오픈 상태 State 생성
  const [isOn, setIsOn] = useState(false);

  const handleOpenModal = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={handleOpenModal}>
          {isOn ? 'Opened!' : 'Open Modal'}
        </ModalBtn>
        {isOn ? (
          <ModalBackDrop onClick={handleOpenModal}>
            <ModalView onClick={e => e.stopPropagation()}>
              <button className="closeBtn" onClick={handleOpenModal}>
                ✕
              </button>
              <p>이것은 모달창이요.</p>
            </ModalView>
          </ModalBackDrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
