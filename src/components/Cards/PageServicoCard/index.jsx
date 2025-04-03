import { Container, Image, Informations } from './styles'

export default function PageServicoCard ({path, text}){
    return(
        <Container>
            <Image>
                <img src={path} />
            </Image>

            <Informations>
                <p>{text}</p>
            </Informations>

        </Container>
    );
}