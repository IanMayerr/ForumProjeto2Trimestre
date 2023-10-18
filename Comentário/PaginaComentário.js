import Header from "../../components/Header/Header"
import {Balaozinho, Fundo, Comentário, Titulo, container_comment, UsuarioNome, Divisao, IconePerfil, TextoMain, AddPostBalao, AddBotton} from "./PaginaComentárioStyled"
import Balao from "../../assets/Balao.png"
import iconePerfil from "../../assets/iconePerfil.svg"

function PaginaComentário () {
    return(
    <>
    <Fundo>
        <Header/>
    
        <Balaozinho src={Balao}></Balaozinho>

        <container_comment>
            <TextoMain>Main</TextoMain>
            <IconePerfil src={iconePerfil}></IconePerfil>
                <Comentário>

                    <Titulo>Meu chefe é malvado comigo</Titulo>

                    <UsuarioNome>Por Usuário1</UsuarioNome>

                    Meu chefe fez Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel porttitor velit. Sed consequat pellentesque tellus, non tincidunt neque commodo quis. Donec sed rutrum justo, quis mattis lectus. Praesent rutrum quam vitae arcu malesuada euismod. In hendrerit bibendum nibh, molestie tristique turpis placerat a. Vestibulum dignissim facilisis elementum. Fusce eget rhoncus nisi, eget ultrices lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean a pellentesque magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ac diam arcu. Integer odio libero, vulputate eu nibh sit amet, posuere commodo es comigo :(.
                </Comentário>
            </container_comment>
            <Divisao/>
            <AddPostBalao src={Balao}></AddPostBalao>
            <AddBotton>+</AddBotton>
    </Fundo>
    
    </>
    )
}

export default PaginaComentário