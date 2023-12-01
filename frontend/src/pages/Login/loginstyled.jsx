import styled from "styled-components"
import { Link } from "react-router-dom"
//Parte da coluna azul
export const FundoLogin = styled.body`
    background: linear-gradient(#338138,#C6EDE7, #C6EDE7,#C6EDE7, #C6EDE7, #338138);
    height: 100vh;
    width: 100vw;
    display: flex;
`

export const SubTitulo = styled.h2`
    color: White;
    margin-left: 15vh;
`

export const Coluna = styled.div`
    background: linear-gradient(#061331,#1F1D42, #1F1D42,#1F1D42, #1F1D42, #061331);
    height: 100vh;
    width: 43vw;
    display: flex;
    align-items: center;
`

export const Barra = styled.input`
    background: transparent;
    padding: 4px;
    width: 28vw;
    border-bottom: solid #89C37E;
    border-width: 0 0 3px;
    border-radius: 4px;
    margin-left: 15vh;
    color: white;
    box-shadow: 0 0 0 0;
    outline: 0;
`

export const BarraTitulo = styled.div`
    width: 20vw;
    height: 3px;
    margin-left: 10.5vw;
    margin-top: 1vh;
    position: absolute;
    background-color: #89C37E;
    border-radius: 10px;
    
`

export const Alinhamento = styled.form`
    margin-bottom: 15vh;
`

export const Texto = styled.p`
    color: #485b86;
    margin-left: 15vh;
    font-size: 13px;
`

export const LinkMudarPage = styled(Link)`
    color: white;
`

export const Botao = styled.button`
    width: 29vw;
    height: 8vh;
    margin-left: 7vw;
    margin-top: 5vh;
    border-radius: 10px;
    background-color: #89C37E;
    color: white;
    font-size: 25px;
    font-weight: bold;
    position: relative;
    cursor: pointer;

`   


export const Titulo = styled.h1`
    text-align: center ;
    color: white;
    font-size: 8vh;
    margin-left: 3vh;
`

// -=-=-=--=-==-=-==-=-=-==-=

//Parte da direita

export const ForumLogo = styled.img`
    height: 70vh;
    width: 40vw;
    margin-left: 8vw;
    margin-bottom: 50vh;
    display: relative;

`

export const SubTituloLogo = styled.h2`
    color: black;
    margin-top: 50vh;
    position: absolute;
    margin-left: 67%;

`
export const MiniSubTituloLogo = styled.h3`
    color: black;
    margin-top: 55vh;
    position: absolute;
    margin-left: 68.5%;
`

export const Paragrafo = styled.p`
    color: black;
    position: absolute;
    margin-top: 65vh;
    margin-left:60%;
    font-weight: bold;
`

