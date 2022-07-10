import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #222831;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0 30px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: max-content;
    padding: 20px 0;

    span {
      display: none;
    }
  }
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;

  /* column-gap: 열 방향 여백, row-gap: 행 방향 여백 지정 */
  column-gap: 10px;

  > h1 {
    color: #fff;
  }

  > span {
    color: #00adb5;

    /* % 단위로 폰트사이즈 지정 가능 */
    font-size: 85%;
  }
`;

const StyledSearch = styled.div`
  input {
    width: 200px;
    height: 30px;
    padding: 0 10px;
    border: none;
    border-radius: 7px;
    /* border: 테두리, outline: 바깥 외곽선 */
    /* https://aboooks.tistory.com/228 */
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 7px;
  border: none;
  background-color: #2980b9;
  color: #fff;
  margin-left: 5px;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledTitle>
          <h1>알고리즘 파워 고릴라</h1>
          <span>누가 있을까</span>
        </StyledTitle>
        <StyledSearch>
          <form action="">
            <input type="text" placeholder="이름 검색하기" />
            <StyledButton>검색</StyledButton>
          </form>
        </StyledSearch>
      </StyledHeader>
    </>
  );
};

export default Header;
