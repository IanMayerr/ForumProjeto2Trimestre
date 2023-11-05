import Header from "../../../components/Header/Header"
import {Balaozinho, Fundo, Comentário, Titulo, UsuarioNome, Divisao, IconePerfil, TextoMain, AddPostBalao, AddBotton, Problema, SecaoComentario, TituloSecao} from "./PaginaComentário3Styled"
import Balao from "../../../assets/Balao.png"
import iconePerfil from "../../../assets/iconePerfil.svg"

function PaginaComentário3 () {
    return(
    <>

        <Header/>
    
        <Balaozinho src={Balao}></Balaozinho>

            <TextoMain>Main</TextoMain>

            <IconePerfil src={iconePerfil}></IconePerfil>

                <Comentário>

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
                    E por último, a garantia da segurança descrita pelo artigo 6° da constituição brasileira é uma das mais importantes desse caso, pois o empresário ameaça à segurança de todos, com as ameaças de violência, despejo, táticas intimidadoras, etc. Além de claro, a segurança das famílias estaria em um estado grave se elas fossem despejadas de casa, pois elas ficariam extremamente vulneráveis a qualquer tipo de problema.  E com base nessa lei, a Juliana e as famílias podem processar o empresário, por crime de ameaças, que podem levar a 1 ano de prisão e uma multa de 120 reais por dia. <br></br>
                    </Problema>

                </Comentário>

        <Divisao/>

        <AddPostBalao src={Balao}></AddPostBalao>

        <AddBotton>+</AddBotton>

        <SecaoComentario>
            <TituloSecao>Comentários</TituloSecao>


        </SecaoComentario>

            
        <Fundo/>
    
    </>
    )
}

export default PaginaComentário3