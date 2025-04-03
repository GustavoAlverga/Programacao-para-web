import { Container } from "./styles";
import Carrosel from '../../components/Carrosels/CarroselImagesParceiros'
import img1 from '/images/imgNoticia1.jpg'
import img2 from '/images/imgNoticia2.jpg'

export default function Blank() {
    const arrayImagesAndText = [
        { image: img1, text: "Parceiro 1" },
        { image: img2, text: "Parceiro 2" },
    ]
    return (
        <Container>
            <h1>Blank Page</h1>
            <Carrosel arrayImages={arrayImagesAndText}/>
        </Container>
    );
}