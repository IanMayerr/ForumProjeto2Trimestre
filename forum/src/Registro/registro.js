import { Barra, BarraParagrafo, BarraTitulo, Botao, Coluna, ForumLogo, FundoLogin, LinkMudarPage, MiniSubTituloLogo, Paragrafo, SubTitulo, SubTituloLogo, Texto, Titulo } from "./../Login/loginstyled"
import Logo from "../../src/Components/Img/Logo.png"
import { AlinhamentoRegistro } from "./registrostyled"

function Registro(){
    return(
        <>
            <FundoLogin>
                <Coluna>
                    <AlinhamentoRegistro>
                        <Titulo>
                            Cadastro
                            <BarraTitulo/>
                        </Titulo>
                        <SubTitulo>Nome</SubTitulo>
                        <Barra type="text" placeholder="Seu Nome Aqui"></Barra>
                        <SubTitulo>Email</SubTitulo>
                        <Barra type="email" placeholder="SeuEmail@gmail.com"></Barra>
                        <SubTitulo>Senha</SubTitulo>
                        <Barra type="password" placeholder="SuaSenhaAqui"></Barra>
                        <Botao onClick={'#'}>ENTRAR</Botao>
                        <Texto>Já tem uma conta? <LinkMudarPage href="#">Clique aqui!</LinkMudarPage></Texto>
                    </AlinhamentoRegistro>
                </Coluna>
                <ForumLogo src={Logo}/>
                <SubTituloLogo>DIÁLOGO</SubTituloLogo>
                <MiniSubTituloLogo>ABERTO</MiniSubTituloLogo>
                <Paragrafo>
                    Um forúm feito no intuito de dar voz a<br/>
                    problemas sociais decorrentes no Brasil.
                </Paragrafo>
                <BarraParagrafo/>
            </FundoLogin>
        </>
    )
}

export default Registro