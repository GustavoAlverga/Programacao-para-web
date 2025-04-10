import { Container, Content, VerticalLine, LeftSide, Center, RightSide, Links, StyledIconLink, QrCode } from "./styles";
import Button from "../Button";
import qrcode from '../../assets/qrCodeFooter.svg'

export default function Footer() {

    return (
        <Container>
            <Content>
                <LeftSide>
                    <h2>Links Úteis</h2>
                    <Button path={"/parcerias"}>
                        <Links>Parcerias</Links>
                    </Button>
                    <Button path={"/blog"}>
                        <Links>Noticias</Links>
                    </Button>
                    <Button path={"/eventos"}>
                        <Links>Eventos</Links>
                    </Button>
                    <div id="redes">
                        <h4>Redes Sociais</h4>
                        <div id="redesIcons">
                            <StyledIconLink icon={'pixel:instagram'}/>
                            <StyledIconLink icon={'prime:twitter'}/>
                            <StyledIconLink icon={'ri:linkedin-fill'}/>
                            <StyledIconLink icon={'hugeicons:spotify'}/>
                            <StyledIconLink icon={'ic:outline-facebook'}/>
                            <StyledIconLink icon={'iconoir:youtube-solid'}/>
                        </div>
                    </div>
                </LeftSide>

                <VerticalLine />

                <Center>
                    <h2>Nossos Canais</h2>
                    <div id="NossosCanaisContent">
                        <Button path={"/faleConosco"}>
                            <Links>Fale Conosco</Links>
                        </Button>
                        <p>Entre em contato a qualquer hora em horário comercial de segunda a sexta, das 8h às 20h.</p>
                        <p>Informações, dúvidas, reclamações e comunicação de ocorrência.</p>
                    </div>
                    <div id="NossosCanaisContent">
                        <Button path={"/"}>
                            <Links>Liderança</Links>
                        </Button>
                        <p>Entre em contato para mais informações da cooperativa.</p>
                
                    </div>
                </Center>

                <VerticalLine />

                <RightSide>
                    <h2>Baixe Nosso App</h2>
                    <QrCode src={qrcode}/>
                </RightSide>
            </Content>
        </Container>
    );
}