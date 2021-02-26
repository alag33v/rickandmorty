import styled from 'styled-components';

export const StyledLocationItem = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: relative;

  .location__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    background-color: #87cefa;
    border: 3px solid blue;
    border-radius: 50%;
    width: 350px;
    height: 350px;
    margin-left: 20px;

    span {
      font-size: 18px;
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
