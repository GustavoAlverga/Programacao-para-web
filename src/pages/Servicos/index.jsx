import { Container, Header, CardsContainer, VenhaParticiparContainer, LinkBox } from "./styles";
import Button from '../../components/Button'
import Card from '../../components/Cards/PageServicoCard'
import Servico1 from '/images/imgServico1.jpeg'
import Servico2 from '/images/imgServico2.jpeg'
import Servico3 from '/images/imgServico3.jpeg'
import Servico4 from '/images/imgServico4.jpeg'
import Servico5 from '/images/imgServico5.jpeg'
import Servico6 from '/images/imgServico6.jpeg'

export default function Servico() {
    return (
        <Container>
            <Header>
                <h2>Veja nossa gama</h2>
                <h2>Completa de serviços</h2>
                <p>Em caso de duvida entre em contato</p>
            </Header>

            <CardsContainer>
                <Card path={Servico1} text={'A ideia de alunos ajudarem outros alunos, com remuneração, cria um ambiente de aprendizado colaborativo e vantajoso para todos. Alunos que ensinam aprofundam seus conhecimentos e desenvolvem habilidades valiosas, enquanto os que aprendem recebem atenção personalizada e flexível. A remuneração motiva os alunos que ensinam, e os formatos como monitoria e aulas particulares tornam o aprendizado mais acessível.'}/>
                <Card path={Servico2} text={'Um grupo de alunos da cooperativa se organiza para criar momentos de lazer e alegria no ambiente escolar. Através de atividades criativas e divertidas, eles promovem o bem-estar e o espírito de comunidade. O grupo planeja eventos, jogos e apresentações, buscando envolver todos os alunos. Eles valorizam a colaboração e a participação de todos, criando um ambiente acolhedor e inclusivo. O objetivo principal é proporcionar momentos de descontração e leveza, contribuindo para um ambiente escolar mais feliz e positivo.'}/>
                <Card path={Servico3} text={'A oportunidade de os estudantes participarem de atividades práticas em laboratórios é crucial para o desenvolvimento de habilidades e o aprofundamento do conhecimento em diversas áreas. Essa experiência proporciona um aprendizado mais eficaz, pois permite que os alunos apliquem a teoria em situações reais, desenvolvendo o pensamento crítico e a capacidade de resolução de problemas.'}/>   
            </CardsContainer>
            
            <VenhaParticiparContainer>
                <Button path={'/colaboradores'}>
                    <LinkBox>Venha Cooperar</LinkBox>
                </Button>
            </VenhaParticiparContainer>

            <CardsContainer>
                <Card path={Servico4} text={'A Roda de Conversa, idealizada pela Pedagogia, é um espaço dinâmico para debates construtivos. Alunos e professores se unem para discutir temas relevantes, promovendo a troca de ideias e o desenvolvimento do pensamento crítico. O objetivo é criar um ambiente de aprendizado colaborativo e enriquecedor. A Roda de Conversa busca fortalecer os laços entre a comunidade escolar e incentivar a reflexão sobre questões importantes.'}/>
                <Card path={Servico5} text={'A figura do "Orientador de Trabalhos" representa um suporte crucial para estudantes em etapas decisivas de sua jornada acadêmica, como a elaboração de trabalhos de conclusão de curso (TCCs) e outros projetos de pesquisa. Essa função pode ser desempenhada tanto por professores experientes quanto por alunos de mestrado qualificados, cada um trazendo suas próprias contribuições valiosas.'}/>
                <Card path={Servico6} text={'A iniciativa "Acolhimento de Feras" cria um ambiente acolhedor para novos alunos universitários. O grupo oferece suporte prático e emocional, facilitando a adaptação à vida acadêmica. Através de atividades sociais e informativas, os veteranos promovem a integração e reduzem o isolamento dos novatos. A mentoria individualizada e os grupos de apoio ajudam os "feras" a superar desafios e a construir confiança. O objetivo principal é garantir que os novos alunos se sintam bem-vindos e apoiados em sua jornada universitária.'}/>
            </CardsContainer>
           
        </Container>
    );
}