import styled from "styled-components";

export const Card = styled.section`

  background-color: var(--secondary-color);
  width: 90vw;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 600px) {
    width: 580px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    min-height: 270px;
  }

  h3 {
    color: var(--text-secondary-color);
    letter-spacing: 6px;
    font-size: 12px;
    padding-top: 20px;
  }

  p {
    color: var(--text-primary-color);
    text-align: center;
    font-size: 25px;
    width: 320px;
  }

  img {
    width: 320px;
    padding-bottom: 10px;
  }

  button {
    position: relative;
    bottom: -28px;
    height: 70px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    background-color: var(--btn-color);
    cursor: pointer;
    :hover {
      box-shadow: 0px 0px 50px var(--btn-color);
    }

    img {
      width: 30px;
      height: 30px;
      padding-bottom: 0;
    }
  }
`;
