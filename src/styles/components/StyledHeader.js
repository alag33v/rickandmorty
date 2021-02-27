import styled from 'styled-components';

export const StyledHeader = styled.header`
  .logo {
    width: 300px;
    max-width: 100%;
    margin: 20px auto 50px;
    display: block;
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

      @media (max-width: 500px) {
        font-size: 20px;
      }

      @media (max-width: 400px) {
        font-size: 18px;
        margin: 0 10px;
      }
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
