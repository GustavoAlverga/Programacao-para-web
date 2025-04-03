import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: #003641;
  color: #ffffff;
  display: flex;
  height: 9.5vh;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
`;

export const LinkComponent = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2rem;
  border-radius: 5px;
  font-size: 0.9rem;

  &:hover,
  &:active {
    cursor: pointer;
    background-color: #24292e;
    font-size: 0.95rem;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #2b3137;
  min-width: 8rem;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const DropdownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.9rem;
  gap: 10px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

export const Logo = styled(NavLink)`
  width: 10rem;

  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      overflow: hidden;
    }
`;

