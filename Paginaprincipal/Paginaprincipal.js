import Header from "../../components/Header/Header"
import {Balaozinho, Fundo, Pergunta, Problema} from "./Paginaprincipalstyled"
import Balao from "../../assets/Balao.png"
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

    return(
        <>
        <Fundo>
            {/* <button onClick={handleLogout}>Logout</button> Botão para dar logout */}
            <Header/>
              <Balaozinho src={Balao}></Balaozinho> 
                <Pergunta>
                    <Problema>
                        De que forma o direito a educação é colocado em jogo a partir do conflito habitacional?
                    </Problema>
                </Pergunta>
        </Fundo>
        
        </>
    )
}

export default Paginaprincipal