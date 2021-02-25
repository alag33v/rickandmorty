import styled from 'styled-components';

export const StyledCharacters = styled.div`
  .characters__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;

    li {
      text-align: center;
      list-style: none;
      cursor: pointer;
    }

    h4 {
      font-size: 16px;
      max-width: 275px;
    }

    img {
      width: 275px;
      height: 275px;
      display: block;
      border-radius: 5px;
    }
  }
`;
