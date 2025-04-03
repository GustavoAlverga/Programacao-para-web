import { Container, Image, Informations, LinkButton} from "./styles";

export default function ServicosCard({path, title, text}) {
  return (
    <Container>
        <Image>
          <img id="Logo" src = {path} alt="ImageCard"/>
        </Image>
        <Informations>
            <h2>{title}</h2>
            <p>{text}</p>
        </Informations>
        <LinkButton to="/servicos">Saiba Mais</LinkButton>
    </Container>
  );
}
