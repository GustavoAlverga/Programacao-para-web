import { Container, Image, Informations} from "./styles";

export default function BlogCard({path, text, link}) {
  return (
    <Container to={link}>
        <Image>
          <img src = {path} alt="ImageCard"/>
        </Image>
        <Informations>
            <h2>{text}</h2>
        </Informations>
    </Container>
  );
}
