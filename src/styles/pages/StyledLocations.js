import styled from 'styled-components';

export const StyledLocations = styled.div`
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
    }

    button {
      font-size: 24px;
      color: rgb(255, 255, 255);
      background-color: #87cefa;
      padding: 7px 20px;
      border: none;
      outline-color: #87cefa;
      cursor: pointer;
    }
  }

  .locations__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 125px;
      max-width: 100%;
      text-align: center;
      list-style: none;
      margin-bottom: 25px;
      padding: 5px 10px;
      border: 1px dashed #ccc;
      border-radius: 5px;
      cursor: pointer;
    }

    h4 {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;
