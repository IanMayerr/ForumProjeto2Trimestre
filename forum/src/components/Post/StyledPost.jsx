import styled from "styled-components"

export const ContainerPost = styled.div`
    height: 470px;
    width: 150vh;
    background-color: #DBFAD0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding:10px;
    display:flex;
    flex-direction: column;
    gap: 5px;
`
export const Label = styled.label`
    margin: 10px;
    margin-left: 20px;
    margin-bottom: 2px;
    font-size: 20px;
`
export const TituloPost = styled.textarea`
    margin-top: 2px;
    width: 95%;
    height: 25px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 30px;
    resize: none;
`

export const Texto = styled.textarea`
    height: 250px;
    width: 90%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 30px;
    padding: 20px;
    resize: none;
`
export const DivSelector =styled.div`
    flex-direction: row;
    align-self: end;
    margin-right: 30px;
    margin-top: 20px;
    margin-bottom: auto;
`

export const LabelAssunto = styled.label`
    margin: 10px;
`
export const SelectAssunto = styled.select`
    border: none;
    width: 120px;
    height: 30px;
    border-radius: 30px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
`

export const BotaoPost = styled.button`
    width: 60px;
    height: 30px;
    align-self: end;
    margin-top: 5px;
    margin-right: 30px;
    border:none;
    background-color: #89C37E;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        background-color: #7ab86e;
    }
`