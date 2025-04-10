import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import Form from '../../components/Form/VemSerParceiroForm';

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
  margin: 3rem;
  width: 100%;
  align-self: flex-start;

  #fistrtBlockText{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;

    h2 {
      margin: 1rem;
      font-weight: 700;
      font-size: 1.8rem;
      color: #00756a;
    }

    p{
      width: 100%;
      font-family: "Rubik", sans-serif;
      font-weight: 600;
      font-size: 1.3rem;
      text-indent: 2rem;
      color: #001c22;
    }
  }

  #secondrtBlockText{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;  
    width: 100%;
    height: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-top: 1rem;
  padding: 10rem;
  width: 100%;
  background-color: #00AE9D;

  h1{
      width: 100%;
      font-family: "Rubik", sans-serif;
      font-weight: 700;
      font-size: 3rem;
      color: #ffffff;
    }

    p{
      font-family: "Rubik", sans-serif;
      font-weight: 500;
      font-size: 1.3rem;
      text-indent: 1rem;
      color: #ffffff;
      margin-top: 3rem;
    }

    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
`;

export const FormParceiro = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 50%;
    padding: 20px;
    border: 2px solid white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    input:focus {
        outline: none;
        border-color: #007bff;
    }

    button {
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }
`;