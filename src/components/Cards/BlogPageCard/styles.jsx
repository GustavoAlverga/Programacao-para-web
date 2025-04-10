import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 2rem;
`;

export const Image = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const Informations = styled.div`
    width: 50%;
    h2{
        color: #1f9552;
        text-align: center;
    }
`;