import Header from "../../../components/Header/Header";
import { Balaozinho, Fundo, Comentario, Titulo, UsuarioNome, Divisao, IconePerfil, TextoMain, AddPostBalao, AddBotton, Problema, SecaoComentario, TituloSecao, ContainerV, ComentariosV } from "./PaginaComentario4Styled";
import Balao from "../../../assets/Balao.png";
import iconePerfil from "../../../assets/iconePerfil.svg";
// import Comentar from "../../../components/Comentarios/Comentar";
import styled from "styled-components";
import React, { useState } from 'react';
import axios from "axios";
import plantalittleze from "../../../assets/plantalittleze.png"

const InputComentario = styled.input`
    color: black;
    position: relative;
    left: -2%;
    font-size: 15px;
    top: 5%;
    width: 50vw;
    height: 5vh;
    border: none;
    padding-left: 10px;

`

const ButtonComentario = styled.button`
    background-color: #2eab5a;
    margin: 5px;
    border: none;
    color: white;
    font-weight: bold;
    position: absolute;
    margin-right: 100%;
    left: 96.8%;
    top: -15%;
    height: 5.3vh;
    cursor: pointer;
`

const postId = 1;

function PaginaComentário4() {
    const [comentarios, setComentarios] = useState([]);
    const [novoComentario, setNovoComentario] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const criarComentario = () => {
        axios
            .post('http://localhost:3306/comment/create', { postId: postId, Comment: novoComentario })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    alert('Comentário Enviado com Sucesso!');
                    setComentarios([...comentarios, { text: novoComentario }]);
                    setNovoComentario('');
                }
            })
            .catch((error) => {
                console.error('Erro na requisição:', error);
            });
    };

    return (
        <>
            <Header />
            <Balaozinho src={Balao}></Balaozinho>
            <TextoMain>Main</TextoMain>
            <IconePerfil src={iconePerfil}></IconePerfil>
            <Comentario >
            <Titulo>Espaço para home office</Titulo>

            <UsuarioNome>Por Diogo</UsuarioNome>

            <Problema>
                Para realizar as tarefas no notebook separei um espaço que também pode ser adequado para gravar vídeos, tendo um quadro móvel e espaço o suficiente pra que o Little Zé possa ficar tanto sentado como em pé, em frente a esse espaço há uma área onde tem uma parte confortável para os gatinhos de Little Zé e com um armário para guardar livros e etc...<br></br>
                <br></br>
                Para ter um lugar de descanso e aconchegante, separei uma parte do quarto onde o piso será de carpete e haverá um grande armário para guardar jogos e coisas no geral, também terá uma televisão, um videogame e um Puff para que Little Zé possa relaxar legal depois de um dia cansativo de trabalho. <br></br>
            </Problema>

            <plantaZé src={plantalittleze} />

        </Comentario >

            <Divisao />

            <AddPostBalao onClick={() => setMostrarFormulario(!mostrarFormulario)} src={Balao}></AddPostBalao>

            <AddBotton onClick={() => setMostrarFormulario(!mostrarFormulario)}>+</AddBotton>
            <SecaoComentario>

                <TituloSecao>Comentários</TituloSecao>

                {mostrarFormulario && (
                    <ContainerV>
                        <InputComentario
                            type="text"
                            placeholder="Digite seu comentário"
                            value={novoComentario}
                            onChange={(e) => setNovoComentario(e.target.value)}
                        />
                        <ButtonComentario type="button" onClick={criarComentario}>
                            Comentar
                        </ButtonComentario>
                    </ContainerV>
                )}
                <ComentariosV>
                    {comentarios.length > 0 && (
                        <ul>
                            {comentarios.map((comentario, comentarioIndex) => (
                                <li key={comentarioIndex}>{comentario.text}</li>
                            ))}
                        </ul>
                    )}
                </ComentariosV>
            </SecaoComentario>
        <Fundo />
        </>
    );
}

export default PaginaComentário4;