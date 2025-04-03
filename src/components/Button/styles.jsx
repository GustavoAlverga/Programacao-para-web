import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled(NavLink)`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  border: 1px solid #0c564f;
  border-radius: 5px;
  &:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;