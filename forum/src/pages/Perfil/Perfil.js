import { Container, Botao, Fonte, CampoEscrita, Fundo, PrimeiraDiv, SegundaDiv, TerceiraDiv, QuartaDiv, Bloco1, Bloco2 } from "./Perfil.jsx"
import Header from "../../components/Header/Header.js"
import iconeEditarPerfil from "../../assets/iconeEditarPerfil.svg"

function Perfil() {
    return (
        <Fundo>
            <Header />

            <Container>
                <PrimeiraDiv>
                    <Botao onClick={''}>Voltar</Botao>

                    <Botao onClick={''}>Salvar</Botao>
                </PrimeiraDiv>

                <SegundaDiv>
                    <img src={iconeEditarPerfil} alt='' />
                </SegundaDiv>

                <TerceiraDiv>
                    <Fonte>Sua foto de Perfil</Fonte>
                </TerceiraDiv>

                <QuartaDiv>
                    <Bloco1>
                        <Fonte>Nome de usuário</Fonte>
                    </Bloco1>
                    <Bloco2>
                        <Fonte>Data de nascimento</Fonte>
                    </Bloco2>
                </QuartaDiv>

                <QuartaDiv>
                    <CampoEscrita />
                    <CampoEscrita />
                </QuartaDiv>
            </Container>
        </Fundo>
    )
}

export default Perfil