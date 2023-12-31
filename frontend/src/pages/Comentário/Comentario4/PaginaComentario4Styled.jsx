import styled from "styled-components"

export const Fundo = styled.body`
    min-height: 135vh;
    width: 98.8vw;
    background-color: rgba(113, 163, 156, 1);
    display: flex;
    z-index: auto;
    position: relative;
`

export const Comentario = styled.div`
    position: absolute;
    top: 25%;
    left: 23%;
    width: 50rem;
    background-color: #B0FF94;
    padding-bottom: 5vh;
    padding-right: 0rem;
    padding-left: 3rem;
    box-shadow: 1vh 1vh white;
    z-index: 1;
`

export const container_comment = styled.p`
    position: absolute;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3vw;
    z-index: 2;
    margin-left: 10vh;
    margin-top: 2.5vh;

`
export const Titulo = styled.p`
    font-size: 273%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
`
export const UsuarioNome = styled.p`
    font-size: 84%;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebfuchet MS',sans-serif;
    font-weight: bold;
    position: absolute;
    left: 86%;
    top: 25%;
`
export const Problema = styled.p`
    font-size: 97%;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebfuchet MS',sans-serif;
    position: relative;
    left: 1%;
    top: 14%;
    width: 52vw;
`
export const plantaZé = styled.img`
    background-image: url(../../../assets/plantalittleze.png);
    position: absolute;
    height: 50%;
    width:50%;
    top: 10%;
    left: 10%;
    width: 50vw;
    height: 50vh;
    z-index: 10;
`
export const Balaozinho = styled.img`
    position: absolute;
    z-index: 3;
    width: 17vh;
    height: 17vh;
    top: 24%;
    left: 18%;
`
export const Divisao = styled.div`
    width: 1px;
    height: 34rem;
    padding: 1px;
    background-color: white;
    position: absolute;
    left: 13%;
    top: 17%;
`

export const IconePerfil = styled.img`    
    position: absolute;
    z-index: 3;
    width: 17vh;
    height: 9vh;
    top: 38%;
    left: 15%;
`
export const TextoMain = styled.p`
    font-size: 200%;
    color: blue;
    position: absolute;
    top: 22.3%;
    left: 19.5%;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebfuchet MS',sans-serif;
    z-index: 10;
`
export const AddPostBalao = styled.img`
    position: absolute;
    z-index: 3;
    width: 29vh;
    height: 29vh;
    bottom: 7%;
    left: 81%;
`
export const AddBotton = styled.p`
    position: absolute;
    bottom: 10%;
    right: 10.6%;
    font-size: 350%;
    font-weight: bold;
    z-index: 10;
`

export const SecaoComentario = styled.div`
    position: absolute;
    top: 93%;
    left: 23%;
    width: 50rem;
    height: 50vh;
    background-color: #B0FF94;
    padding-bottom: 5vh;
    padding-right: 0rem;
    padding-left: 3rem;
    box-shadow: 1vh 1vh white;
    z-index: 1;
    overflow-y: auto;
`

export const TituloSecao = styled.p`
    color: black;
    text-align: center;
    font-family: sans-serif;
    font-size: 273%;
`
export const ContainerV = styled.div`
    position: absolute;
    top: 30%;

`
export const ComentariosV = styled.div`
    position: absolute;
    top: 49%;
    width: 51vw;
    min-height: 24vh;
    left: 13%;
    background-color: #9ceb60;
    color: black;
    overflow-y: auto;
`

export const ComentariosEscrita = styled.p`
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
    font-size: 100%;
    color: black;
    position: relative;
    left: 4%;
    width: 42vw;
`