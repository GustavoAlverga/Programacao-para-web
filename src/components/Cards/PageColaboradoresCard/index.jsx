import { Container, Informations, IconCard } from "./styles";

export default function ColaboradoresCard({icon, text}) {
  return (
    <Container>
        <IconCard icon={icon}/>
        <Informations>
            <p>{text}</p>
        </Informations>
    </Container>
  );
}
