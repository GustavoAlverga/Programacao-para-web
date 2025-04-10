import styled from 'styled-components';
import Carrosel from "../../components/Carrosels/CarroselTextParceiros";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200vh;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const TextContent = styled(Carrosel)`
  width: 500px;
  height: 500px;
`;

