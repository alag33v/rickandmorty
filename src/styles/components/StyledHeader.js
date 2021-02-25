import styled from 'styled-components';

export const StyledHeader = styled.header`
  .title {
    font-size: 42px;
    text-align: center;
  }

  .nav__list {
    display: flex;
    justify-content: center;
    padding: 0;

    li {
      font-size: 24px;
      font-weight: 700;
      list-style: none;
      margin: 0 20px;
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        color: gold;
      }
    }

    .active {
      color: gold;
    }
  }
`;
