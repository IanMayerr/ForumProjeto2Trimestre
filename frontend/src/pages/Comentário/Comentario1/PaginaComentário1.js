import Header from "../../../components/Header/Header"
import {Balaozinho, Fundo, Comentário, Titulo, container_comment, UsuarioNome, Divisao, IconePerfil, TextoMain, AddPostBalao, AddBotton, Problema} from "./PaginaComentário1Styled"
import Balao from "../../../assets/Balao.png"
import iconePerfil from "../../../assets/iconePerfil.svg"

function PaginaComentário1 () {
    return(
    <>

        <Header/>
    
        <Balaozinho src={Balao}></Balaozinho>

        <container_comment>
            <TextoMain>Main</TextoMain>
            <IconePerfil src={iconePerfil}></IconePerfil>
                <Comentário>

                    <Titulo>Burnout no Ambiente de Trabalho </Titulo>

                    <UsuarioNome>Por Raquel</UsuarioNome>

                    <Problema>
                    O Clonazepam ou mais conhecido como Rivotril é uma medicação de tarja preta que é utilizada na ansiedade ou transtornos de humor.<br></br> Ele afeta a serotonina, o neurotransmissor que é responsável pelo humor e as emoções, e muitas vezes a baixa serotonina pode causar a ansiedade. O medicamento atua no sistema nervoso central causando inibição no sistema nervoso, tal sistema que é constituído pela medula espinal e encéfalo. Consequentemente o remédio atua no tronco encefálico, onde há o bulbo raquidiano que participa no processo do batimento cardíaco, o que o auxilia nas palpitações. O medicamento é composto por clonazepam(0,5mg), o que de fato ajuda no sono e outros compostos como lactose, amido de milho, amido pré-gelatinizado, óxido de ferro amarelo, óxido férrico, talco e estearato de magnésio.<br></br>
                    <br></br>
                    O Zolpidem é um remédio tarja preta utilizado para o tratamento de curta duração da insônia e sua ação começa 30 minutos após o consumo do medicamento. O medicamento pode afetar a serotonina a qual produz melatonina, hormônio e neurotransmissor responsável pelo sono. O remédio também afeta o sistema nervoso central, mais especificamente o cérebro onde há a atividade do sono. O medicamento é comporto por hemitartarato de zolpidem (10mg), o composto que de fato ajuda no sono e outros como lactose monoidratada, celulose microcristalina, amidoglicolato de sódio, dióxido de silício, ácido succínico, estearato de magnésio, hipromelose, dióxido de titânio, macrogol.<br></br>
                    <br></br>
                    Os dois medicamentos são tarja preta, tal categoria que precisa de muito mais controle para a venda e o consumo pois afetam diretamente o sistema central, o que pode causar morte ou dependência. Dependência essa que está na própria bula dos dois remédios. Os medicamentos deveriam ser um auxílio caso extremamente necessário após uma revisão com psicólogos. Acredito que no caso de João a terapia iria ajudá-lo a entender seus sentimentos de ansiedade e pressão sobre o trabalho. <br></br> Além disso técnicas de massagens ou saunas são conhecidas por relaxar o corpo. João também pode buscar um atestado médico que indica que está com Burnout para se ausentar no trabalho por um tempo. 
                    <br></br>
                    O Burnout, a falta de descanso apropriado e ansiedade são problemas evidentes da nossa sociedade. Colocar o trabalho acima de si e de sua saúde muitas vezes é um comportamento esperado e normal atualmente. Médicos residentes podem ficar até mais de 24 horas ininterruptas acordados trabalhando, o que deveria ser inaceitável para um ser humano suportar. No início da revolução industrial os trabalhadores não havia direitos, assim poderiam desenvolver variados problemas de saúde. Mesmo atualmente havendo direitos é possível observar que desenvolver problemas de saúde por conta do trabalho ainda ocorre nos dias de hoje. .
                    </Problema>
                    
                </Comentário>
            </container_comment>
            <Divisao/>
            <AddPostBalao src={Balao}></AddPostBalao>
                 <AddBotton>+</AddBotton>
        <Fundo/>
    
    </>
    )
}

export default PaginaComentário1