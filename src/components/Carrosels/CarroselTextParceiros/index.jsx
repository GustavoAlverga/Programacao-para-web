import { Container, CardTextParceiros } from './styles';
import Carrosel from '../CarroselSwiper'

export default function CarouselTextParceirosPage({ arrayTexts }) {

  const cards = arrayTexts.map( item => (
    <CardTextParceiros>
      <p>{item.text}</p>
    </CardTextParceiros>
  ));

  return (
    <Container>
      <Carrosel cards={cards}/>
    </Container>
  );
}