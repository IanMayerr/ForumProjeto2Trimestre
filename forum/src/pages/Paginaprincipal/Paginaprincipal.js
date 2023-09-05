import Header from "../../components/Header/Header"
import {Balaozinho, Fundo, Pergunta, Problema} from "./Paginaprincipalstyled"
import Balao from "../../assets/Balao.png"

function Paginaprincipal(){
    return(
        <>
        <Fundo>
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