import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const ImageHero = styled.div`
  margin-top: 9.5vh; 
  display: flex;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    overflow: hidden;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 6vh;
    background-color: black;
    opacity: 0.5;
    z-index: 0;
  }

  h1{
    position: absolute;
    color: white;
    font-size: 7rem;
    font-weight: 700;
    align-self: center;
    margin-left: 35%;
  }
`;

export const NoticiasContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  width: 50%;
  height: auto;

  #cardsNoticias {
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 3rem;
    width: 100%;
    margin: 2rem 0;
  }

  h1 {
    color: #1f9552;
  }

  p {
    font-size: 0.9rem;
  }
`;


