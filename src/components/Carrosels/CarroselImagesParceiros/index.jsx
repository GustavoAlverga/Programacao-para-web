import { Container } from './styles';
import CardParceiros from '../../Cards/ParceriasCarroselCard';
import Carrosel from '../CarroselSwiper';

export default function CarouselParceirosPage({ arrayImages }) {

  const cards = arrayImages.map((item, index) => (
    <CardParceiros key={index} path={item.image} text={item.text} />
  ));

  return (
    <Container>
      <Carrosel cards={cards} />
    </Container>
  );
}