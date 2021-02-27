import styled from 'styled-components';

export const StyledEpisodes = styled.div`
  .search__wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

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

  .episodes__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;

    @media (max-width: 1200px) {
      justify-content: center;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      list-style: none;
      width: 275px;
      height: 100px;
      margin-bottom: 25px;
      padding: 5px 10px;
      border: 2px solid #ccc;
      cursor: pointer;

      @media (max-width: 1200px) {
        margin: 0 20px 20px;
      }
    }

    h4 {
      font-size: 16px;
      line-height: 1.5;
      max-width: 275px;
    }
  }
`;
