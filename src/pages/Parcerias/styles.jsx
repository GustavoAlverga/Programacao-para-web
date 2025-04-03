import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nokora:wght@100;300;400;700;900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
`;

export const ContainerCarroselHero = styled.div`
  margin-top: 5.7rem;
  display: flex;
  width: 100%;
  height: 70vh;

  #leftSide{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    background-color: #00AE9D;
    border-radius:  0 200px 200px 0;

    h1 {
      font-family: "Rubik", sans-serif;
      font-weight: 700;
      font-size: 3rem;
      color: #001c22;
    }
  }

  #rightSide{
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 40%;
    height: 100%;
    color: #1f9552;

    h1 {
      font-family: "Rubik", sans-serif;
      font-weight: 700;
      font-size: 3rem;
      margin: 4rem;
      color: #001c22;
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 90%;

  h2 {
      font-weight: 700;
      font-size: 1.8rem;
      color: #00756a;
    }

    p{
      margin-top: 1rem;
      margin-left: 2rem;
      width: 50%;
      font-family: "Rubik", sans-serif;
      font-weight: 700;
      font-size: 1.3rem;
      text-indent: 2rem;
      color: #001c22;
    }

    #secondBlockText{
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      align-self: end;
      width: 45%;


      p{
        width: 90%;
        margin-top: 1rem;
        text-align: center;
      }
    }

    #thirdBlockText{
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      width: 90%;

      h2{
        font-weight: 500;
        margin: 1rem
      }

      p{
        font-size: 1rem;
      }
    }
`;

