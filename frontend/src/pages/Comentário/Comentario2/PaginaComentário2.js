import Header from "../../../components/Header/Header";
import { Balaozinho, Fundo, Comentario, Titulo, UsuarioNome, Divisao, IconePerfil, TextoMain, AddPostBalao, AddBotton, Problema, SecaoComentario, TituloSecao, ContainerV, ComentariosV } from "./PaginaComentario2Styled";
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

function PaginaComentário2() {
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
                <Titulo>Criatividade</Titulo>
                <UsuarioNome>Por Thiago</UsuarioNome>
                <Problema>
                Analisando a situação atual da empresa, é possível notar que, após um período de grandes ideias e desenvolvimento de inovações, a equipe se encontra em um tipo de bloqueio criativo. Depois de tantas ideias e esforço dos funcionários, é de se supor que estes trabalhadores se encontram em faltas de ideias e soluções. Além disso, o fato de a concorrência estar ganhando força desmotiva ainda mais os responsáveis pelo setor criativo da empresa, junto com a pressão imposta sobre eles, prejudica em demasiado a produção de algo novo.<br></br>
                    <br></br>
                    Como encarregado de reviver a cultura da empresa no intuito de auxiliar o estímulo criativo dos funcionários, a primeira tarefa a se fazer seria realizar um tipo de reforma no ambiente de trabalho. Seria proposto um design com cores mais vívida e um ambiente de lazer para que seja possível os trabalhadores tirarem um tempo de descanso físico e mental. Contendo equipamentos diversos de entretenimento, como: Televisões, jogos, tabuleiros, sofás, etc... Além disso, também seria proposto uma área na qual os funcionários possam sentar-se em círculo em volta de uma grande mesa redonda no intuito de dialogarem e discutirem suas ideias. Nessa sala, também seria possível usar projetores e notebooks para apresentar o que acham interessante para o decorrer da conversa. Com isso, o estresse seria reduzido e isso ajudará no processo criativo para a soluções de problemas e na criação de novos produtos. <br></br>
                    <br></br>
                    Junto do espaço de conversa, também será proposto eventos como workshops neste setor, justamente para incentivar ideias e apresentações de diferentes assuntos e pontos de vista. Além de ajudar no estímulo criativo, também irá auxiliar no desenvolvimento de novas habilidades e ferramentas de criação dentro da empresa. Com isso, os funcionários podem expandir seus pensamentos e habilidades, abrindo novas margens para futuras ideias e inovações.<br></br>
                    <br></br>
                    Após tudo isso, uma nova forma de mediação de qualidade e produção terá de ser criada, a fim de que seja possível avaliar o setor criativo e de desenvolvimento da empresa. Tal método pode ser avaliado por meio de pesquisas de satisfação de clientes, análise de desempenho de funcionários por parte dos supervisores, análise de vendas e/ou uso do produto estabelecido, comparação entre a concorrência e o mercado e, por fim, criar um espaço no qual os funcionários possam dialogar entre si e seus supervisores para que possam dialogar e criticar o produto final, afinal, a opinião de toda a equipe é importante para o progresso de uma empresa. Desta forma, o estímulo criativo dentro da empresa será melhor desenvolvido e, junto disso, também será possível elencar discussões a respeito do desempenho da equipe e da qualidade do produto a ser desenvolvido. <br></br>

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

export default PaginaComentário2;