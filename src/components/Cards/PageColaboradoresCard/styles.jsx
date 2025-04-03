import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 20rem;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #3e9f95;
  border: 4px solid #c0d630;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const IconCard = styled(Icon)`
  width: 70%;
  height: 50%;
  margin: 1rem;
  color: #c0d630;
`;

export const Informations = styled.div`
  width: 80%;
  height: 40%;

  p{
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
  }
`;
