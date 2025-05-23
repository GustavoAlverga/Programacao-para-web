import styled from 'styled-components';
import Carrosel from '../CarroselSwiper';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 20rem;
`;

export const CarroselImages = styled(Carrosel)`
    width: fit-content;
    height: fit-content;
`;