import styled from 'styled-components';

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
    height: 80%;
    overflow: hidden;

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
    bottom: 0;
    width: 80%;
    height: 20%;
    p{
        margin-top: 10%;
        font-size: 0.9rem;
    }
`;
