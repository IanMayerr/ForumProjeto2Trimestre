import { Container, BotaoVoltar, Fonte, CampoEscrita, Fundo, QuartaDiv, Bloco1, Bloco2, Img, FonteSuaFotoDePerfil, ContainerDiv } from "./Perfil.jsx"
import Header from "../../components/Header/Header.js"
import iconeEditarPerfil from "../../assets/iconeEditarPerfil.svg"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function Perfil() {
    const [editarNome, setEditarNome] = useState('');
    const [senhaNova, setSenhaNova] = useState('');
    // const [novaSenha, setNovaSenha] = useState('');
    const [dadosUsuario, setDadosUsuario] = useState([]);
    


    // useEffect(() => {
    //     //recuperar id do usuario
    //     const idUser = localStorage.getItem('@Auth:id');

    //     const fetchData = async () => {
    //         await axios.get('http://localhost:3005/api/userById/' + idUser, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //             .then((response) => {
    //                 console.log(response.data.data[0].nome);
    //                 console.log(response.data);

    //                 if (response.data.success) {
    //                     setDadosUsuario(response.data.data[0]);
    //                 } else {
    //                     alert('Deu erro');
    //                 }
    //             })
    //             .catch((erro) => {
    //                 alert(erro);
    //             })
    //     }
    //     fetchData();
    // }, []);



    const fetchData = async () => {

        const idUser = localStorage.getItem('@Auth:id');

        await axios.get('http://localhost:3005/api/userById/' + idUser, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                setDadosUsuario(response.data.data);
                // if (response.data.success) {
                //     setDadosUsuario(response.data.data[0]);
                // } else {
                //     alert('Deu erro');
                // }
            })
            .catch((erro) => {
                alert(erro);
            })
    }

    useEffect(()=>{
        
    },[])


    const hadleSubmit = async (editarNome,senhaNova) => {
        // e.preventDefault()

        const idUser = localStorage.getItem('@Auth:id');

        const data = {
            "nome": editarNome,
            "senha": senhaNova
        };

        console.log()

        await axios.put(`http://localhost:3005/api/user/${idUser}`,data, {
            headers: {
                'Content-Type': 'application/json',
            }
            
        })
            .then((response) => {
                fetchData()

                if (response.data.success) {
                    // setDadosUsuario(response.data.data);
                } else {
                    alert('Deu erro');
                }
            })
            .catch((erro) => {
                alert(erro);
            })
    }

    const  editarUsuarios = dadosUsuario.map((dado)=>{
        return(
            <div>
                {dado.nome}
                {/* <CampoEscrita
                                type="text"
                                // className={nome !== "" ? "has-val input" : "input"}
                                value={dado.nome}
                                onChange={(e) => setEditarNome(e.target.value)}
                            /> */}
                {dado.senha}
            </div>
        )
    })


    return (
        <>
        
            <Header />
               
            <Fundo>
                <Container>
                    <ContainerDiv>
                        <Link to="/paginaprincipal"><BotaoVoltar>Voltar</BotaoVoltar></Link>
                        <BotaoVoltar onClick={()=>{hadleSubmit(editarNome, senhaNova)}}>Salvar</BotaoVoltar>
                    </ContainerDiv>
                    <Img src={iconeEditarPerfil} alt='' />

                    <FonteSuaFotoDePerfil>Edite suas informações</FonteSuaFotoDePerfil>

                    <QuartaDiv>
                        <Bloco1>
                            <Fonte>Nome de usuário:</Fonte>
                            <CampoEscrita
                                type="text"
                                value={editarNome}
                                onChange={(e) => setEditarNome(e.target.value)}
                            />
                        </Bloco1>
                            { editarUsuarios}


                        <Bloco2>
                            <Fonte>Senha:</Fonte>
                            <CampoEscrita
                                type="text"
                                value={senhaNova}
                                onChange={(e) => setSenhaNova(e.target.value)}
                            />
                        </Bloco2>
                    </QuartaDiv>
                </Container>
            </Fundo>
        </>
    )
}

export default Perfil