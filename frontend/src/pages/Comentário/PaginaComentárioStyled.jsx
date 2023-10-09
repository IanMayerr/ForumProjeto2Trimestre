import styled from "styled-components"

export const Fundo = styled.body`
    height: 100vh;
    width: 100vw;
    background-color:rgba(113, 163, 156, 1);
    display: flex;
    z-index: auto;

`

export const Comentário = styled.div`
    position:fixed;
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
    position: fixed;
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebfuchet MS', sans-serif;
    font-weight: bold;
    position: fixed;
    left: 78%;
    top: 40%;
`

export const Balaozinho = styled.img`
    position: fixed;
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
    position: fixed;
    left: 13%;
    top: 17%;
`

export const IconePerfil = styled.img`    
    position: fixed;
    z-index: 3;
    width: 17vh;
    height: 9vh;
    top: 38%;
    left: 15%;
`
export const TextoMain = styled.p`
    font-size: 200%;
    color: blue;
    position: fixed;
    top: 22.9%;
    left: 19.7%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebfuchet MS', sans-serif;
    z-index: 10;
`
export const AddPostBalao = styled.img`
    position: fixed;
    z-index: 3;
    width: 29vh;
    height: 29vh;
    bottom: 6%;
    left: 81%;
`
export const AddBotton = styled.p`
    position: fixed;
    bottom: 10%;
    right: 10.9%;
    font-size: 350%;
    font-weight: bold;
    z-index: 10;
`