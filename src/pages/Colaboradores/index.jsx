import { Container, Image, CardsContainer, FormContainer, FormColaborador } from "./styles";
import CardVantagens from '../../components/Cards/PageColaboradoresCard'

export default function Colaboradores() {
    return (
        <Container>
                <Image>
                    <div id="content">
                        <h1 id="frase1">Venha Fazer parte da Nossa Cooperativa Estudantil</h1>
                        <h2 id="frase2">Estamos espalhados por todo o Brasil</h2>
                    </div>
                </Image>
                <CardsContainer>
                    <CardVantagens icon={'tabler:map-2'} text={'Mais de 2 milhões de estudantes'}/>
                    <CardVantagens icon={'game-icons:brazil'} text={'Estamos Em todo o Brasil'}/>
                    <CardVantagens icon={'icon-park-outline:local'} text={'Encontre a sede mais prósxima'}/>
                </CardsContainer>
                <CardsContainer>
                    <CardVantagens icon={'uil:university'} text={'Certificado por intituições financeiras'}/>
                    <CardVantagens icon={'basil:university-outline'} text={'Sempre justos com você'}/>
                    <CardVantagens icon={'bi:phone'} text={'Entre em contato com a nossa ouvidoria'}/>
                </CardsContainer>
                <FormContainer>
                    <h1>Juntos, podemos alcançar resultados extraordinários. Seja um colaborador e faça a diferença!</h1>
                    <FormColaborador />
                </FormContainer>
        </Container>
    );
}