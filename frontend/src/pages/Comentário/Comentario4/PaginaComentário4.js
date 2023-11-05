import Header from "../../../components/Header/Header"
import {Balaozinho, Fundo, Comentário, Titulo, UsuarioNome, Divisao, IconePerfil, TextoMain, AddPostBalao, AddBotton, Problema, SecaoComentario, TituloSecao} from "./PaginaComentário4Styled"
import Balao from "../../../assets/Balao.png"
import iconePerfil from "../../../assets/iconePerfil.svg"
import plantalittleze from "../../../assets/plantalittleze.png";

function PaginaComentário4 () {
    return(
    <>

        <Header/>
    
        <Balaozinho src={Balao}></Balaozinho>

        <container_comment>
            <TextoMain>Main</TextoMain>
            <IconePerfil src={iconePerfil}></IconePerfil>
                <Comentário>

                    <Titulo>Espaço para home office</Titulo>

                    <UsuarioNome>Por Diogo</UsuarioNome>

                    <Problema>
                    Para realizar as tarefas no notebook separei um espaço que também pode ser adequado para gravar vídeos, tendo um quadro móvel e espaço o suficiente pra que o Little Zé possa ficar tanto sentado como em pé, em frente a esse espaço há uma área onde tem uma parte confortável para os gatinhos de Little Zé e com um armário para guardar livros e etc... <br></br>
                    <br></br>
                    Para ter um lugar de descanso e aconchegante, separei uma parte do quarto onde o piso será de carpete e haverá um grande armário para guardar jogos e coisas no geral, também terá uma televisão, um videogame e um Puff para que Little Zé possa relaxar legal depois de um dia cansativo de trabalho.<br></br>
                    </Problema>

                    <plantaZé src={plantalittleze}/>

                </Comentário>
            </container_comment>
            <Divisao/>
            <AddPostBalao src={Balao}></AddPostBalao>
                 <AddBotton>+</AddBotton>

    <SecaoComentario>
        <TituloSecao>Comentários</TituloSecao>
    </SecaoComentario>

        <Fundo/>

    
    </>
    )
}

export default PaginaComentário4