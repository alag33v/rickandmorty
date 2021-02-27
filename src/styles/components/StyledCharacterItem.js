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

    @media (max-width: 550px) {
      flex-direction: column;
    }
  }

  img {
    width: 300px;
    max-width: 100%;
    border-radius: 5px;
    display: block;

    @media (max-width: 550px) {
      margin: 0 auto 20px;
    }
  }

  .character__info {
    margin-left: 20px;

    @media (max-width: 550px) {
      margin-left: 20%;
    }

    @media (max-width: 425px) {
      margin-left: 10%;
    }

    @media (max-width: 375px) {
      margin-left: 5%;
    }

    @media (max-width: 320px) {
      margin-left: 1%;
    }

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
