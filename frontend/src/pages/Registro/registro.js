import { Barra, BarraParagrafo, BarraTitulo, Botao, Coluna, ForumLogo, FundoLogin, LinkMudarPage, MiniSubTituloLogo, Paragrafo, SubTitulo, SubTituloLogo, Texto, Titulo } from "./../Login/loginstyled"
import Logo from "../../assets/Logo.png"
import { AlinhamentoRegistro } from "./registrostyled"
import axios from 'axios';
import { useState } from 'react'

function Registro(){
    const [email, setEmail] = useState("");
    const [senha, setPassword] = useState("");
    const [nome, setName] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        nome,
        email,
        senha,
      };
      console.log(data);
      const response = await axios.post("http://localhost:3005/api/user/create", data);
      console.log(response);
      if (response.data.success) {
        alert("Usuário criado com sucesso!");
      } else {
        alert("Usuário não criado com sucesso!");
      }
      
      
    };
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
                        <Barra type="text"
                        className={nome !== "" ? "has-val input" : "input"}
                        placeholder="SeuNome"
                        value={nome}
                        onChange={(e) => setName(e.target.value)}
                        />

                        <SubTitulo>Email</SubTitulo>
                        <Barra type="email"
                        className={email !== "" ? "has-val input" : "input"}
                        placeholder="exemplo@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}             
                        />
                        <SubTitulo>Senha</SubTitulo>
                        <Barra type="password"
                        className={senha !== "" ? "has-val input" : "input"}
                        placeholder="sua senha"
                        value={senha}                                                                       
                        onChange={(e) => setPassword(e.target.value)}            
                        />

                        <Botao onClick={handleSubmit}>ENTRAR</Botao>
                        <Texto>Já tem uma conta? <LinkMudarPage to="login">Clique aqui!</LinkMudarPage></Texto>
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