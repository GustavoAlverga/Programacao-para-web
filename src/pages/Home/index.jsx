import { Container, ImageHero, CardsServicoHome, SobreNosHome, SobreNosButtonHome, Line,NoticiasContainer } from "./styles";
import ImageHeroHome from '/images/homePageImageHero.jpeg';
import ServicoCard from '../../components/Cards/ServicosHomeCard'
import NoticiaCard from '../../components/Cards/NoticiaHomeCard'
import { Flex } from "antd";
import Button from '../../components/Button'
import Noticia1 from '/images/imgNoticia1.jpg'
import Noticia2 from '/images/imgNoticia2.jpg'
import Noticia3 from '/images/imgNoticia3.jpg'
import Servico1 from '/images/imgServico1.jpeg'
import Servico2 from '/images/imgServico2.jpeg'
import Servico3 from '/images/imgServico3.jpeg'
import Servico4 from '/images/imgServico4.jpeg'
import Servico5 from '/images/imgServico5.jpeg'
import Servico6 from '/images/imgServico6.jpeg'

export default function Home() {
    return (
        <Container>
            <ImageHero>
                <img src={ImageHeroHome} alt="ImageHero" />
            </ImageHero>
            
            <CardsServicoHome>
                <h1>Nossos Serviços</h1>
                <div id="servicoCardContent">
                    <ServicoCard path={Servico1} title={'Monitoria Remunerada'} text={"Oportunidade para alunos ajudarem outros alunos e ganhar uma remueração."}/>
                    <ServicoCard path={Servico2} title={'Grupo de Jogos '} text={"Grupo organizado pelos alunos da cooperativa para levar entretenimento e felicidade para os alunos."}/>
                    <ServicoCard path={Servico3} title={'Vagas em Laboratórios'} text={"Oportunidade para os estudantes participarem de atividades práticas."}/>
                </div>
                <div id="servicoCardContent">
                    <ServicoCard path={Servico4} title={'Roda de Conversa'} text={"Grupo organizado pelo departamento de Pedagogia para levar temas para debates construtivos."}/>
                    <ServicoCard path={Servico5} title={'Orientador de Trabalhos'} text={"Professores ou alunos de mestrado qualificados para auxiliar os alunos em trabalhos e TCC`s"}/>
                    <ServicoCard path={Servico6} title={'Acolhimento de Feras'} text={"Grupo dedicado a ajudar novos alunos novatos da universidade"}/>
                </div>
                </CardsServicoHome>

            <SobreNosHome>
                <div id="content">
                    <h1>Sobre a Cooperativa VIVA</h1>
                    <div style={{ display: Flex }}>
                        <p>
                            A VIVA é uma cooperativa estudantil vibrante e inovadora, criada por estudantes de todo o Brasil com o objetivo de promover o empreendedorismo, desenvolver projetos sociais, oferecer serviços aos estudantes.
                        </p>
                        <p>
                            Acreditamos no poder da colaboração e da união para construir um futuro melhor para nossa comunidade acadêmica e para a sociedade em geral.
                            Somos movidos pela paixão em sustentabilidade, inovação, responsabilidade social e buscamos constantemente novas formas de impactar positivamente o mundo ao nosso redor.
                        </p>
                    </div>
                    <p>
                        Através de projetos e iniciativas inovadoras, oferecemos aos nossos membros a oportunidade de desenvolver habilidades, expandir seus conhecimentos e fazer a diferença.
                        Conheça mais sobre a nossa história, missão e valores aqui.
                    </p>
                    <Button path="/colaboradores">
                        <SobreNosButtonHome>Saiba Mais</SobreNosButtonHome>
                    </Button>
                </div>
            </SobreNosHome>

            <Line />

            <NoticiasContainer>
                <h1>Noticias</h1>
                <p>Noticias e Atualizações</p>

                <div id="cardsNoticias">
                    <NoticiaCard path={Noticia1} text={'Roda de conversas pint of science.'} />
                    <NoticiaCard path={Noticia2} text={'Atenção: Vagas abertas para o processo seletivo.'} />
                    <NoticiaCard path={Noticia3} text={'Oportunidade para aproveitar o FIES programa do governo.'} />
                </div>
            </NoticiasContainer>

            <Line />
        </Container>
    );
}