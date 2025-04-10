import { Container, CarroselImages } from './styles';
import CardParceiros from '../../Cards/ParceriasCarroselCard';


export default function CarouselParceirosPage({ arrayImages }) {

  const cards = arrayImages.map((item, index) => (
    <CardParceiros key={index} path={item.image} text={item.text} />
  ));

  return (
    <Container>
      <CarroselImages cards={cards} />
    </Container>
  );
}