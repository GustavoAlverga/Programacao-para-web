import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.div`
  width: 100%;
  height: 70%;
    
  img {
    width: 100%;
    height: 100%;
    max-height: 13rem;
    object-fit: contain;
    object-position: center;
    overflow: hidden;
  }
`;

export const Informations = styled.div`
    width: 100%;
    height: 30%;
    p{
      margin-top: 1rem;
      text-align: center;
      font-size: 1.5rem;
      color: #ffff;
    }
`;

