import { Container, ContainerCarroselHero, ContainerText } from "./styles";
import Carrosel from '../../components/Carrosels/CarroselImagesParceiros'
import ImgParceiro1 from '/images/imgParceiro1.png'
import ImgParceiro2 from '/images/imgParceiro2.png'
import ImgParceiro3 from '/images/imgParceiro3.png'
import ImgParceiro4 from '/images/imgParceiro4.webp'
import ImgParceiro5 from '/images/imgParceiro5.png'

export default function Parcerias() {
    const arrayImagesAndText = [
            { image: ImgParceiro1, text: "Para compras dos cooperadores" },
            { image: ImgParceiro2, text: "Para trasnporte dos estudantes" },
            { image: ImgParceiro3, text: "Mais uma opção de transporte" },
            { image: ImgParceiro4, text: "Suporte completo de tecnologias e infraestrutura" },
            { image: ImgParceiro5, text: "Apenas para cooperadores um RU bem farto de alimentação saldável" },

        ]
    return (
        <Container>
            <ContainerCarroselHero>
                <div id="leftSide">
                    <h1>Nossas Parcerias Atuais</h1>
                    <Carrosel arrayImages={arrayImagesAndText}/>
                </div>
                <div id="rightSide">
                    <h1>Venha fazer parte da nossa familia de coolaboradores.</h1>
                </div>  
            </ContainerCarroselHero>
            <ContainerText>
                <h2>Por Que Se Tornar Parceiro da VIVA?</h2>
                <p>
                    A CooperUni é uma cooperativa gerida por estudantes universitários, com o objetivo de conectar negócios, instituições e iniciativas sociais
                    ao público acadêmico. Nossa rede atinge milhares de alunos, professores e pesquisadores, oferecendo uma plataforma única para divulgação, 
                    engajamento e crescimento mútuo.
                </p>

                <div id="secondBlockText">
                    <h2>Como Sua Parceria Pode Ajudar e Ser Ajudada</h2>
                    <p>Ao se associar à VIVA, sua empresa ou organização ganha acesso a uma série de benefícios estratégicos:</p>
                </div>

                <div id="thirdBlockText">

                <h2>Visibilidade Direcionada</h2>

                <p>
                Divulgação de marcas para um público qualificado: jovens universitários, futuros profissionais e tomadores de decisão.
                Presença em nossos canais (redes sociais, eventos, materiais institucionais).
                </p>

                <h2>Oportunidades de Networking</h2>

                <p>
                    Conexão com talentos em formação para programas de estágio, trainee e recrutamento.
                    Participação em feiras de carreiras, palestras e workshops exclusivos.  
                </p>

                <h2>Impacto Social e Branding</h2>

                <p>
                    Alinhamento com projetos de responsabilidade social e sustentabilidade apoiados por estudantes.
                    Fortalecimento da imagem institucional como apoiadora da educação e inovação.
                </p>

                <h2>Benefícios Exclusivos para Parceiros</h2>

                <p>
                    Descontos e vantagens em serviços oferecidos pela cooperativa (coworking, cursos, consultorias).
                    Dados e pesquisas de mercado voltados ao perfil do público universitário.
                </p>
                </div>
            </ContainerText>
        </Container>
    );
}