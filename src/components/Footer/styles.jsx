import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const Container = styled.div`
  display: flex;
  height: 40vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #003641;
  color: #ffffff;
  border-radius: 20px 20px 0 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 100%;

  h2{
    margin-top: 2rem;
  }
`;

export const VerticalLine = styled.div`
  height: 80%;
  border: 2px solid #131d1fb5;
  border-radius: 5px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  gap: 1rem;

  #redes{
    width: 50%;
    height: 20%;
    
    h4{
      font-weight: 400;
    }

    #redesIcons{
      display: flex;
      justify-content: space-evenly
    }
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  gap: 0.5rem;

  #NossosCanaisContent{
    p{
      text-indent: 1rem;
      margin: 5px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  gap: 1rem;
`;

export const QrCode = styled.img`
  width: 50%;
  height: auto;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 2rem;
`;

export const StyledIconLink = styled(Icon)`
  color: white;
  width: 1rem;
  height: auto;
`;