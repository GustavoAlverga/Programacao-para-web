import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const ImageHero = styled.div`
  position: relative;
  margin-top: 3.9rem;
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
`;

export const CardsServicoHome = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 20rem;
  display: flex;
  gap: 1rem;
  width: 70%;
  height: auto;
  justify-content: space-between;

  h1{
    display: flex;
    align-self: flex-start;
    color: #1f9552;

  }

  #servicoCardContent{
    display: flex;
    gap: 1.5rem;
  }
`;

export const SobreNosHome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 5rem;
  width: 100%;
  background-color: #00AE9D;
  #content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;
    height: auto;
    h1{
      color: #003641;
      text-indent: 1rem;
    }

    p{
      margin: 1rem;
      color: white;
      text-indent: 1.5rem;
    }
  }
`;

export const SobreNosButtonHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 2rem;
`;

export const Line = styled.div`
  margin: 2rem;
  width: 90%;
  border: 1px solid #1f9552;
  height: 1px;
`;

export const NoticiasContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: auto;

  #cardsNoticias{
    display: flex;
    justify-content:space-evenly;
    gap: 3rem;
    margin: 2rem;
  }

  h1{
    color: #1f9552;
  }

  p{
    font-size: 0.9rem;
  }
`;
