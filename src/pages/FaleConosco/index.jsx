import { Container, Header, LeftSideBackgroundHeader, ContentContainer, StyledIconLink, Title, ContentBlock, TitleContentBlock, SectionContentBlock, FormContainer, FormContato} from "./styles";

export default function EntreEmContato() {
    return (
        <Container>
            <Header>
                <LeftSideBackgroundHeader />
            </Header>
            <ContentContainer>
                <Title>
                    <StyledIconLink icon="flowbite:user-headset-solid" />
                    <h1>Dúvidas? Reclamações? Sugestões?</h1>
                </Title>

                <ContentBlock>
                    <TitleContentBlock><h1>Central de Atendimento</h1></TitleContentBlock>
                    <div id="sections">
                        <SectionContentBlock>
                            <p id="titleSection">Dúvidas, reclamações, sugestões, informações, suporte entrar em contato com a nossa equipe de atendimento, você pode utilizar os seguintes canais:</p>
                        </SectionContentBlock>

                        <SectionContentBlock>
                            <h1>0800 123 4567</h1>
                            <p>Capitais e regiões metropolitanas</p>

                            <h1>0800 123 4666</h1>
                            <p>Demais localidades</p>
                        </SectionContentBlock>

                        <SectionContentBlock>
                        <p>Confira o horário de atendimento exclusivo para cada solução</p>
                        </SectionContentBlock>
                    </div>
                </ContentBlock>

                <ContentBlock>
                    <TitleContentBlock><h1>Atendimento exclusivo para Contribuintes</h1></TitleContentBlock>
                    <div id="sections">
                        <SectionContentBlock>
                            <p id="titleSection">Entrar em contato com a nossa equipe de atendimento, em horario exclusivo para contrubuintes bronze, prata ou ouro.</p>
                        </SectionContentBlock>

                        <SectionContentBlock>
                            <h1>0800 123 4567</h1>
                            <p>Capitais e regiões metropolitanas</p>

                            <h1>0800 123 4666</h1>
                            <p>Demais localidades</p>
                        </SectionContentBlock>

                        <SectionContentBlock>
                        <p>Para mais informações entre em contato por email ou pela caixa de correio mais próxima em horário comercial. De segunda a sexta, das 8h às 20h</p>
                        </SectionContentBlock>
                    </div>
                </ContentBlock>

                <ContentBlock>
                    <TitleContentBlock><h1>Dúvidas relacionadas as parcerias</h1></TitleContentBlock>
                    <div id="sections">
                        <SectionContentBlock>
                            <p id="titleSection">Dúvidas, reclamações, sugestões, informações, suporte com relação as parcerias? Entre em contato ou procure as perguntas mais frequêntes</p>
                        </SectionContentBlock>

                        <SectionContentBlock>
                            <h1>0800 123 4567</h1>
                            <p>Capitais e regiões metropolitanas</p>

                            <h1>0800 123 4666</h1>
                            <p>Demais localidades</p>
                        </SectionContentBlock>

                        <SectionContentBlock>
                            <h1>(55 61) 3030 6767</h1>
                            <p>Exterior a cobrar</p>
                            <p>De segunda a sexta, das 8h às 20h</p>
                        </SectionContentBlock>
                    </div>
                </ContentBlock>

                <FormContainer>
                    <h1>Em caso de horários alternativos preencher o formulario! O mais breve possível vamos retornar o contato</h1>
                    <FormContato />
                </FormContainer>
            </ContentContainer>
        </Container>
    );
}