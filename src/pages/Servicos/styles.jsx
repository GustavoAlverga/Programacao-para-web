import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 5rem;
  margin-left: 10%;
  margin-top: 10rem;

  h2{
    color: #1f9552;
  }

  p{
    font-size: 0.7rem;
    color: #003641;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const VenhaParticiparContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 83.5%;
  height: 15rem;
  background-color: #003641;
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 3rem;
  color: black;
  border-radius: 5px;
  background-color: white;
  &:hover{
    width: 20.5rem;
    height: 3.2rem;
    box-shadow: rgba(255, 255, 255, 0.226) 0px 5px 15px;
  }
`;



