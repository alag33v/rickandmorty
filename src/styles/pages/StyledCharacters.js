import styled from 'styled-components';

export const StyledCharacters = styled.div`
  .search__wrapper {
    display: flex;
    justify-content: center;

    input {
      font-size: 18px;
      width: 310px;
      max-width: 100%;
      padding: 5px 15px;
      border: none;
      outline: none;
      cursor: pointer;

      @media (max-width: 400px) {
        width: 200px;
      }
    }

    button {
      font-size: 24px;
      color: rgb(255, 255, 255);
      background-color: #87cefa;
      padding: 7px 20px;
      border: none;
      outline-color: #87cefa;
      cursor: pointer;

      @media (max-width: 400px) {
        padding: 7px 10px;
      }
    }
  }

  .characters__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;

    @media (max-width: 1200px) {
      justify-content: center;
    }

    li {
      text-align: center;
      list-style: none;

      @media (max-width: 1200px) {
        margin: 0 15px;
      }
    }

    h4 {
      font-size: 16px;
      max-width: 275px;
    }

    img {
      width: 275px;
      max-width: 100%;
      display: block;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
