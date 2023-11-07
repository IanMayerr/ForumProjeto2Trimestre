import Header from "../../../components/Header/Header";
import { Balaozinho, Fundo, Comentario, Titulo, UsuarioNome, Divisao, IconePerfil, TextoMain, AddPostBalao, AddBotton, Problema, SecaoComentario, TituloSecao, ContainerV, ComentariosV } from "./PaginaComentario3Styled";
import Balao from "../../../assets/Balao.png";
import iconePerfil from "../../../assets/iconePerfil.svg";
// import Comentar from "../../../components/Comentarios/Comentar";
import styled from "styled-components";
import React, { useState } from 'react';
import axios from "axios";

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

function PaginaComentário3() {
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
            <Comentario>
                <Titulo>Herança de Luta e Novo Desafio Urbano</Titulo>
                <UsuarioNome>Por Giovanni</UsuarioNome>
                <Problema>
                    Analisando o contexto geral que a Juliana e as famílias afetadas estão enfrentando, existe diversos tipos de leis aplicáveis nesse contexto, que podem ajudar a trazer a validação da proposta que eles estão pedindo as autoridades locais.<br></br>
                    <br></br>
                    A principal lei que podemos utilizar para essa situação é o artigo 6° da constituição brasileira de 1988, que é a lei dos direitos sociais, onde ela garante moradia, saúde, educação, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados. No contexto desse problema, podemos pegar o direito da moradia, segurança e educação para analisarmos detalhadamente como cada uma se aplica nessa situação.<br></br> 
                    <br></br>
                    A garantia da moradia nesse contexto é de suma importância de ser analisado, pois segundo as informações do contexto do problema, o direito de moradia das famílias está sendo ameaçado pelo empresário, que está determinado a tirar essas famílias de suas próprias casas. Então nesse caso, pode ser argumentado que segundo o artigo 6° da constituição, garante o direito social de moradia, e que expulsar os moradores dessas casas seria uma grande quebra dos direitos humanos dessas pessoas, cujo provavelmente não teriam outro lugar para morar ou condições para comprar uma casa nova.<br></br>
                    <br></br>
                    O direito de educação garantido pela constituição nesse contexto já está sendo violado, pois o empresário está prejudicando o direito de ir e vir dos alunos de casa para a escola, consequentemente prejudica o ensino dessas crianças. Além de que, caso as famílias e as suas crianças sejam expulsas de suas casas, isso irá impossibilitar totalmente das crianças irem para a escola estudarem, o que já seria considerado outra quebra de direitos humanos por parte do empresário.<br></br>
                     <br></br>
                    E por último, a garantia da segurança descrita pelo artigo 6° da constituição brasileira é uma das mais importantes desse caso, pois o empresário ameaça à segurança de todos, com as ameaças de violência, despejo, táticas intimidadoras, etc. Além de claro, a segurança das famílias estaria em um estado grave se elas fossem despejadas de casa, pois elas ficariam extremamente vulneráveis a qualquer tipo de problema.  E com base nessa lei, a Juliana e as famílias podem processar o empresário, por crime de ameaças, que podem levar a 1 ano de prisão e uma multa de 120 reais por dia.<br></br> 
                </Problema>
            </Comentario>
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

export default PaginaComentário3;