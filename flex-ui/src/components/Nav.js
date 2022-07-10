import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  width: 100%;
  height: 55px;
  background-color: #ecf0f1;
`;

const StyledUl = styled.ul`
  /* row 방향 정렬 + 공백 균일하게 정렬 */
  display: flex;
  justify-content: space-around;

  /* column 방향 중앙 정렬 */
  height: 100%;
  align-items: center;

  /* list 기본 스타일 제거 */
  list-style: none;
`;

const StyledLi = styled.li`
  background-color: #3498db;
  padding: 0.3em 0.5em;
  border-radius: 7px;
  flex-basis: 100px;
  text-align: center;

  > .list-item {
    color: #fff;
    text-decoration: none;
  }
`;

const Nav = () => {
  const menuArr = ['login', 'Music', 'Movie'];

  //   <StyledLi>
  //   <Link to="/">홈</Link>
  // </StyledLi>
  // <StyledLi>
  //   <Link to="/login">로그인</Link>
  // </StyledLi>
  // <StyledLi>
  //   <Link to="/music">Music</Link>
  // </StyledLi>
  // <StyledLi>
  //   <Link to="/movie">Movie</Link>
  // </StyledLi>
  return (
    <>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <Link to="/" className="list-item">
              Home
            </Link>
          </StyledLi>
          {menuArr.map(el => (
            <StyledLi>
              <Link to={`/${el}`} className="list-item">
                {el}
              </Link>
            </StyledLi>
          ))}
        </StyledUl>
      </StyledNav>
    </>
  );
};

export default Nav;
