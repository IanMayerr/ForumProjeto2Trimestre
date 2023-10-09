import styled from "styled-components"

export const Fundo = styled.body`
    height: 100vh;
    width: 100vw;
    background-color:rgba(113, 163, 156, 1);
    display: flex;
    z-index: auto;

`

export const Pergunta = styled.div`
    position:fixed;
    top: 25%;
    left: 5%;
    background-color: rgba(219, 250, 208, 1);
    padding-bottom: 20vh;
    padding-right: 90%;
    box-shadow: 1vh 1vh white;
    z-index: 1;
`

export const Problema = styled.p`
    position: fixed;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3vw;
    z-index: 2;
    margin-left: 10vh;
    margin-top: 2.5vh;
`

export const Balaozinho = styled.img`
    position: fixed;
    z-index: 3;
    width: 17vh;
    height: 17vh;
    top: 26%;
    left: 2%;
`