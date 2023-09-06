import { Alinhamento, Barra, BarraTitulo, Botao, Coluna, ForumLogo, FundoLogin, LinkMudarPage, MiniSubTituloLogo, Paragrafo, SubTitulo, SubTituloLogo, Texto, Titulo } from "./loginstyled"
import Logo from "../../assets/Logo.png"

function Login(){
    return(
        <>
            <FundoLogin>
                <Coluna>
                    <Alinhamento>
                        <Titulo>
                            Login
                            <BarraTitulo/>
                        </Titulo>

                        <SubTitulo>Email</SubTitulo>
                        <Barra type="email" placeholder="SeuEmail@gmail.com"></Barra>
                        <SubTitulo>Senha</SubTitulo>
                        <Barra type="password" placeholder="SuaSenhaAqui"></Barra>
                        <Botao onClick={'#'}>ENTRAR</Botao>
                        <Texto>Não tem uma conta? <LinkMudarPage href="#">Clique aqui!</LinkMudarPage></Texto>
                    </Alinhamento>
                </Coluna>
                <ForumLogo src={Logo}/>
                <SubTituloLogo>DIÁLOGO</SubTituloLogo>
                <MiniSubTituloLogo>ABERTO</MiniSubTituloLogo>
                <Paragrafo>
                    Um forúm feito no intuito de dar voz a<br/>
                    problemas sociais decorrentes no Brasil.
                </Paragrafo>
            </FundoLogin>
        </>
    )
}

export default Login