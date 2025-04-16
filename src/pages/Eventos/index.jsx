import { Container, ImageHero, NoticiasContainer } from "./styles";
import NoticiaCard from '../../components/Cards/NoticiaHomeCard';
import ImageHeroHome from '/images/imageHeroEventos.png';
import Evento1 from '/images/imgNoticia1.jpg';
import Evento2 from '/images/imgNoticia2.jpg';
import Evento3 from '/images/imgNoticia3.jpg';
import ProximoEvento1 from '/images/imagemEvento1.jpg';
import ProximoEvento2 from '/images/imagemEvento2.png';
import ProximoEvento3 from '/images/imagemEvento3.jpg';
import ProximoEvento4 from '/images/imagemEvento4.jpeg';
import ProximoEvento5 from '/images/imagemEvento5.png';


export default function Eventos() {
    return (
        <Container>            
            <ImageHero>
                <img src={ImageHeroHome} alt="ImageHero" />
                <h1>EVENTOS</h1>
            </ImageHero>

            <NoticiasContainer>
                <h1>Eventos Atuais</h1>
                <p>Eventos e Atualizações</p>
            
                <div id="cardsNoticias">
                    <NoticiaCard path={Evento1} text={'Roda de conversas pint of science.'} />
                    <NoticiaCard path={Evento2} text={'Atenção: Vagas abertas para o processo seletivo.'} />
                    <NoticiaCard path={Evento3} text={'Oportunidade para aproveitar o FIES programa do governo.'} />
                </div>
            </NoticiasContainer>

            <NoticiasContainer>
                <h1>Proximos Eventos</h1>
                <p>Confira nossos próximos eventos no nosso calendário calendário</p>
            
                <div id="cardsNoticias">
                    <NoticiaCard path={ProximoEvento1} text={'Júri simulado. Oportunidade única para estudantes aprenderem.'} />
                    <NoticiaCard path={ProximoEvento2} text={'Local para exposição de ideias e conversar.'} />
                    <NoticiaCard path={ProximoEvento3} text={'Evolução e ação: Evento voltado aos estudantes de Educação Fisica.'} />
                    <NoticiaCard path={ProximoEvento4} text={'Seminário de Direito: Apresentado por alunos do 8° periodo de Direito.'} />
                    <NoticiaCard path={ProximoEvento5} text={'Oportunidade para engajar em um grupo de atividade fisica.'} />
                </div>
            </NoticiasContainer>

        </Container>
    );
}