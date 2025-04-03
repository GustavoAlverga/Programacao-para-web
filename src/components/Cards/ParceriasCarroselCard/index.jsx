import { Container, Image, Informations} from "./styles";

export default function ParceriasCard({ path, text }) {
  return (
    <Container>
        <Image>
          <img src = {path}/>
        </Image>
        <Informations>
            <p>{text}</p>
        </Informations>
    </Container>
  );
}
