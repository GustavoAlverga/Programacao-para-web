import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 32rem;
  height: 30rem;
  max-width: 32rem;
  max-height: 30rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 2px solid #00596b;
  &:hover{
    width: 33rem;
    max-width: 33rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Image = styled.div`
  display: flex;
  width: 80%;
  height: 55%;
  margin: 1rem;
  
  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      overflow: hidden;
    }
`;

export const Informations = styled.div`
  display: flex;
  width: 80%;
  height: 40%;

  p{
    font-size: 0.9rem;
  }
`;