import { Container, Image, Informations} from "./styles";
import Img from '/images/imgNoticia1.jpg'

export default function NoticiasCard({path, text}) {
  return (
    <Container>
        <Image>
          <img src = {path} alt="ImageCard"/>
        </Image>
        <Informations>
            <p>{text}</p>
        </Informations>
    </Container>
  );
}
