import Header from "../../../components/Header/Header";
import { Balaozinho, Fundo, Comentario, Titulo, UsuarioNome, Divisao, IconePerfil, TextoMain, AddPostBalao, AddBotton, Problema, SecaoComentario, TituloSecao, ContainerV, ComentariosV } from "./PaginaComentario1Styled";
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

function PaginaComentário1() {
    const [comentarios, setComentarios] = useState([]);
    const [novoComentario, setNovoComentario] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const criarComentario = () => {
        axios
            .post('http://localhost:3005/comment/create', { "postId": postId, "Comment": novoComentario })
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    alert('Comentário Enviado com Sucesso!');
                    setComentarios([...comentarios, { "text": novoComentario }]);
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
                <Titulo>Burnout no Ambiente de Trabalho</Titulo>
                <UsuarioNome>Por Raquel</UsuarioNome>
                <Problema>
                    O Clonazepam ou mais conhecido como Rivotril é uma medicação de tarja preta que é utilizada na ansiedade ou transtornos de humor.<br></br> Ele afeta a serotonina, o neurotransmissor que é responsável pelo humor e as emoções, e muitas vezes a baixa serotonina pode causar a ansiedade. O medicamento atua no sistema nervoso central causando inibição no sistema nervoso, tal sistema que é constituído pela medula espinal e encéfalo. Consequentemente o remédio atua no tronco encefálico, onde há o bulbo raquidiano que participa no processo do batimento cardíaco, o que o auxilia nas palpitações. O medicamento é composto por clonazepam(0,5mg), o que de fato ajuda no sono e outros compostos como lactose, amido de milho, amido pré-gelatinizado, óxido de ferro amarelo, óxido férrico, talco e estearato de magnésio.<br></br>
                    <br></br>
                    O Zolpidem é um remédio tarja preta utilizado para o tratamento de curta duração da insônia e sua ação começa 30 minutos após o consumo do medicamento. O medicamento pode afetar a serotonina a qual produz melatonina, hormônio e neurotransmissor responsável pelo sono. O remédio também afeta o sistema nervoso central, mais especificamente o cérebro onde há a atividade do sono. O medicamento é comporto por hemitartarato de zolpidem (10mg), o composto que de fato ajuda no sono e outros como lactose monoidratada, celulose microcristalina, amidoglicolato de sódio, dióxido de silício, ácido succínico, estearato de magnésio, hipromelose, dióxido de titânio, macrogol.<br></br>
                    <br></br>
                    Os dois medicamentos são tarja preta, tal categoria que precisa de muito mais controle para a venda e o consumo pois afetam diretamente o sistema central, o que pode causar morte ou dependência. Dependência essa que está na própria bula dos dois remédios. Os medicamentos deveriam ser um auxílio caso extremamente necessário após uma revisão com psicólogos. Acredito que no caso de João a terapia iria ajudá-lo a entender seus sentimentos de ansiedade e pressão sobre o trabalho. <br></br> Além disso técnicas de massagens ou saunas são conhecidas por relaxar o corpo. João também pode buscar um atestado médico que indica que está com Burnout para se ausentar no trabalho por um tempo.
                    <br></br>
                    O Burnout, a falta de descanso apropriado e ansiedade são problemas evidentes da nossa sociedade. Colocar o trabalho acima de si e de sua saúde muitas vezes é um comportamento esperado e normal atualmente. Médicos residentes podem ficar até mais de 24 horas ininterruptas acordados trabalhando, o que deveria ser inaceitável para um ser humano suportar. No início da revolução industrial os trabalhadores não havia direitos, assim poderiam desenvolver variados problemas de saúde. Mesmo atualmente havendo direitos é possível observar que desenvolver problemas de saúde por conta do trabalho ainda ocorre nos dias de hoje.
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

export default PaginaComentário1;