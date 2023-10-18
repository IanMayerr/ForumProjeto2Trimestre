import { Alinhamento, Barra, BarraTitulo, Botao, Coluna, ForumLogo, FundoLogin, LinkMudarPage, MiniSubTituloLogo, Paragrafo, SubTitulo, SubTituloLogo, Texto, Titulo } from "./loginstyled"
import Logo from "../../assets/Logo.png"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){

    const [email, setEmail] = useState("");
    const [senha, setPassword] = useState("");
    const { signed } = useState("");
    const navigate=useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email,
        senha
      };
      const response = await axios.post('http://localhost:3008/api/auth/login', data)
  
      localStorage.setItem("@Auth:user", JSON.stringify(response.data.data[0].nome));
      localStorage.setItem("@Auth:token", response.data.data[0].token);
      
      return navigate("/home")
  
    };
    console.log(signed);
    if (!signed) {

    return(
        <>
            <FundoLogin>
                <Coluna>
                    <Alinhamento onSubmit={handleSubmit}>
                        <Titulo>
                            Login
                            <BarraTitulo/>
                        </Titulo>
                        <SubTitulo>Email</SubTitulo>
                        <Barra type="email" 
                        className={email !== "" ? "has-val input" : "input"}
                        placeholder="seuEmail@gmail.com"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}   
                        />

                        <SubTitulo>Senha</SubTitulo>
                        <Barra type="password" 
                        className={senha !== "" ? "has-val input" : "input"}
                        placeholder="suaSenha"
                        value={senha} 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <Botao type="submit">ENTRAR</Botao>
                        <Texto>Não tem uma conta? <LinkMudarPage to="registro">Clique aqui!</LinkMudarPage></Texto>
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
    } else {
        return <navigate to="paginaprincipal" />;
    }
}

export default Login