import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  width: 17rem;
  max-width: 17rem;
  max-height: 23rem;
  height: 23rem;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Image = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 45%;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      overflow: hidden;
    }
`;

export const Informations = styled.div`
    position: absolute;
    bottom: 2rem;
    width: 80%;
    height: 40%;
    h2{
        color: #1f9552;
        text-align: center;
    }
    p{
        margin-top: 3%;
        font-size: 0.9rem;
    }
`;

export const LinkButton = styled(NavLink)`
    display: flex;
    position: absolute;
    bottom: 1rem;
    width: 80%;
    height: 2rem;
    align-items: center;
    justify-content: center;
    border: 1px solid #0c564f;
    border-radius: 5px;
    &:hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
`;
