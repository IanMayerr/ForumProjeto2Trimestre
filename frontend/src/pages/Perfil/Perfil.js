import { Container, Botao, Fonte, CampoEscrita, Fundo, PrimeiraDiv, SegundaDiv, TerceiraDiv, QuartaDiv, Bloco1, Bloco2 } from "./Perfil.jsx"
import Header from "../../components/Header/Header.js"
import iconeEditarPerfil from "../../assets/iconeEditarPerfil.svg"

function Perfil() {
    // const [nome, setNome] = useState('');
    // //const [password, setPassword] = useState('')

    // const hadleSubmit = (e)=>{
    //     e.preventDefault()

    //     const data = {
    //         nome,
    //         data_nascimento
    //     };

    //     //recupearar id do usuario
    //     const idUser = localStorage.getItem('@auth:id');

    //     axios.put('http://localhost:3005/user/' + idUser , data, {
    //         headers:{
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then(response =>{
    //         alert(response.data.message)
    //         saveUserInfoLocalStorage(response.data.token)
    //         goToPaginaprincipal()
            
    //     })
    //     .catch(error => console.log(error))
    // }

    return (

        <>
            <Header />

            <Fundo>
                <Container>
                
                    <Botao onClick={''}>Voltar</Botao>
                    {/* <Botao onSubmit={ hadleSubmit } onClick={''}>Salvar</Botao> */}
                    <img src={iconeEditarPerfil} alt='' />
                    <Fonte>Sua foto de Perfil</Fonte>

                    <QuartaDiv>
                        <Bloco1>
                            <Fonte>Nome de usuário</Fonte>
                        </Bloco1>
                        <Bloco2>
                            <Fonte>Data de nascimento</Fonte>
                        </Bloco2>
                    </QuartaDiv>

                    <QuartaDiv>
                        {/* <Barra type="texte" 
                            value={ nome } 
                            onChange={(e) => setNome(e.target.value)}                       
                        /> */}

                        <CampoEscrita />
                        <CampoEscrita />
                    </QuartaDiv>
                </Container>
            </Fundo>
        </>
    )
}

export default Perfil