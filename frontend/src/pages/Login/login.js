import { Alinhamento, Barra, BarraTitulo, Botao, Coluna, ForumLogo, FundoLogin, LinkMudarPage, MiniSubTituloLogo, Paragrafo, SubTitulo, SubTituloLogo, Texto, Titulo } from "./loginstyled"
import Logo from "../../assets/Logo.png"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){

    //configuração de Login e rotas

    const saveUserInfoLocalStorage = (token)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const goToPaginaprincipal = ()=>{
        navigate('paginaprincipal')
    }

    const hadleSubmit = (e)=>{
        e.preventDefault()

        const credentials = {email, password}

        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(response =>{
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            localStorage.setItem('@auth:id', response.data.data.id)
            goToPaginaprincipal()
            
        })
        .catch(error => console.log(error))
    }

    return(
        <>
            <FundoLogin>
                <Coluna>
                    <Alinhamento onSubmit={hadleSubmit}>
                        <Titulo>
                            Login
                            <BarraTitulo/>
                        </Titulo>
                        <SubTitulo>Email</SubTitulo>
                        <Barra type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="SeuEmail@gmail.com"
                        
                        />
                        <SubTitulo>Senha</SubTitulo>
                        <Barra type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="SuaSenhaAqui"
                        />
                        <Botao type="submit">ENTRAR</Botao>
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