import Header from "../../components/Header/Header"
import {Balaozinho1, Balaozinho2, Balaozinho3, Balaozinho4, Fundo, Pergunta1, Pergunta2, Pergunta3, Pergunta4, Problema1, Problema2, Problema3, Problema4} from "./Paginaprincipalstyled"
import Balao from "../../assets/Balao.png"
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom"
// import { useEffect } from "react"


function Paginaprincipal(){

    // Tudo isso aqui é para fazer um botão com a função de deslogar e voltar para a pag de login ;)
    
    // const navigate = useNavigate()

    // useEffect(() =>{

    //     const token = localStorage.getItem('token')
    //     if(!token){
    //         navigate('/')
    //     }

    // }, [navigate])

    // const handleLogout = () =>{
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('email')
    //     navigate('/')
    // }

    const navigate = useNavigate()
        const gotoComentario1 = () => {
          navigate('/comentario1')
        }
        const gotoComentario2 = () => {
          navigate('/comentario2')
        }

        const gotoComentario3 = () => {
            navigate('/comentario3')
        }

        const gotoComentario4 = () => {
            navigate('/comentario4')
        }

    return(
        <>
        <Fundo>
            {/* <button onClick={handleLogout}>Logout</button> Botão para dar logout */}
            <Header/>
              <Balaozinho1 onClick={gotoComentario1} src={Balao}></Balaozinho1> 

                <Pergunta1 onClick={gotoComentario1}>
                    <Problema1 onClick={gotoComentario1}>Burnout no Ambiente de Trabalho </Problema1>
                </Pergunta1>

                <Balaozinho2 onClick={gotoComentario2} src={Balao}></Balaozinho2> 

                <Pergunta2 onClick={gotoComentario2}>
                    <Problema2 onClick={gotoComentario2}>Criatividade</Problema2>
                </Pergunta2>

                <Balaozinho3 onClick={gotoComentario3} src={Balao}></Balaozinho3> 

                <Pergunta3 onClick={gotoComentario3}>
                    <Problema3 onClick={gotoComentario3}>Herança de Luta e Novo Desafio Urbano</Problema3>
                </Pergunta3>

                <Balaozinho4 onClick={gotoComentario4} src={Balao}></Balaozinho4> 

                <Pergunta4 onClick={gotoComentario4}>
                    <Problema4 onClick={gotoComentario4}>Espaço Para Home Office</Problema4>
                </Pergunta4>

        </Fundo>
        
        </>
    )
}

export default Paginaprincipal