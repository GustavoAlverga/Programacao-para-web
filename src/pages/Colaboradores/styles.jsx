import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import Form from '../../components/Form/VemSerCoolaboradorForm'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nokora:wght@100;300;400;700;900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
  background-image: url('/images/colaboradoresImage.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 0;
  }

  #content {
    position: relative;
    width: 60%;
    z-index: 0;

    h1 {
      font-family: "Rubik", sans-serif;
      font-weight: 700;
      font-size: 5rem;
      color: #ffffff;
    }

    h2 {
      font-family: "Rubik", sans-serif;
      font-weight: 700;
      font-size: 3rem;
      color: #ffffff;
    }
  }
`;


export const CardsContainer = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  margin: 2rem;
  justify-content: space-evenly;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 1rem;
  padding: 10rem;
  width: 100%;
  background-color: #00AE9D;

  h1{
      width: 45%;
      font-family: "Rubik", sans-serif;
      font-weight: 700;
      font-size: 3rem;
      color: #ffffff;
    }
`;

export const FormColaborador = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 30%;
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