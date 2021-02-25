import styled from 'styled-components';

export const StyledCharacterItem = styled.div`
  position: relative;

  .title {
    font-size: 24px;
    text-align: center;
    margin: 50px 0 25px;
  }

  .character__wrapper {
    display: flex;
    justify-content: center;
  }

  img {
    border-radius: 5px;
  }

  .character__info {
    margin-left: 20px;

    span {
      font-size: 16px;
      margin-bottom: 10px;
      display: block;
    }
  }

  .back {
    fill: #ccc;
    width: 30px;
    height: 30px;
    top: 0;
    left: 0;
    position: absolute;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      fill: #fff;
    }
  }
`;
