import { Container, Image, Informations} from "./styles";

export default function NoticiasCard({path, text}) {
  return (
    <Container to={"/blog"}>
        <Image>
          <img src = {path} alt="ImageCard"/>
        </Image>
        <Informations>
            <p>{text}</p>
        </Informations>
    </Container>
  );
}
