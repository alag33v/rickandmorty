import styled from 'styled-components';

export const StyledEpisodeItem = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: relative;

  .episode__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid #ccc;
    width: 500px;
    height: 250px;

    span {
      font-size: 20px;
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
