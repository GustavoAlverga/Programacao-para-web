import { Container, CardsContainer, Line} from "./styles";
import BlogCard from "../../components/Cards/BlogPageCard";
import Noticia1 from "/images/imgNoticia1.jpg";
import Noticia2 from '/images/imgNoticia2.jpg'
import Noticia3 from '/images/imgNoticia3.jpg'

export default function Blog() {
    return (
        <Container>
            <h1>Noticias</h1>
            <CardsContainer>
                <BlogCard path={Noticia1} link={"https://g1.globo.com/sp/campinas-regiao/educacao/noticia/2024/11/21/forum-dialogos-na-educacao-roda-de-conversa-para-educadores-discute-tema-da-edicao-2025.ghtml"} text={"Ciência e cerveja, uma combinação de ideias! O Pint of Science transforma bares em palcos para pesquisadores compartilharem descobertas com o público de forma descontraída e acessível."}/>
                <Line/>
                <BlogCard path={Noticia2} link={"https://g1.globo.com/pb/paraiba/noticia/2025/03/13/ufcg-divulga-1a-chamada-da-lista-de-espera-do-sisu-2025.ghtml"} text={"Está aberto o processo seletivo para novos alunos! Confira as vagas disponíveis e garanta sua chance de começar um novo ciclo acadêmico com a gente."}/>
                <Line/>
                <BlogCard path={Noticia3} link={"https://g1.globo.com/educacao/noticia/2025/01/02/fies-112-mil-novas-vagas-em-2025.ghtml"} text={"O FIES é o programa do governo que oferece financiamento para estudantes cursarem o ensino superior em instituições privadas. Saiba como se inscrever e estudar sem pesar no bolso."}/>
            </CardsContainer>
        </Container>
    );
}