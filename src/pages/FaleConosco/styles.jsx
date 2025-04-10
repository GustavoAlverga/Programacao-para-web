import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Form from '../../components/Form/FaleConoscoForm';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 20rem;
  background-color: #003641;
`;

export const LeftSideBackgroundHeader = styled.div`
  width: 80%;
  height: 100%;
  background-color: #1f9552;
  clip-path: polygon( 0 0, 90% 0, 100% 100%, 0 100% );
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 5rem;
  gap: 5rem;
`;

export const StyledIconLink = styled(Icon)`
  color: #003641;
  width: 10rem;
  height: auto;
`;

export const Title = styled.div`
  display: flex; 
  width: 80%;
  align-items: center;
  gap: 3rem;
  color: #1f9552;
`;

export const ContentBlock = styled.div`
  width: 80%;
  #sections{
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const TitleContentBlock = styled.div`
  width: 100%;

  h1{
    border-bottom: 3px solid #1f9552;
    color: #1f9552;
    font-size: 2rem;
    padding: 1rem;
  }
`;

export const SectionContentBlock = styled.div` 
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;

  #titleSection{
    color: #003641;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: left;
  }

  h1{
    text-align: center;
    font-size: 2.5rem;
    color: #003641;
  }

  p{
    text-align: center;
    color: #003641;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
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
      font-size: 2.7rem;
      color: #ffffff;
    }
`;

export const FormContato = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 30%;
  padding: 20px;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: vertical;
  }

  input:focus,
  textarea:focus {
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

