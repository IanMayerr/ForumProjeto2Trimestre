import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/login"
import Paginaprincipal from "../pages/Paginaprincipal/Paginaprincipal"
import Registro from "../pages/Registro/registro"
import Perfil from "../pages/Perfil/Perfil"
import PaginaComentário1 from "../pages/Comentário/Comentario1/PaginaComentário1"
import PaginaComentário2 from "../pages/Comentário/Comentario2/PaginaComentário2"
import PaginaComentário3 from "../pages/Comentário/Comentario3/PaginaComentário3"
import PaginaComentário4 from "../pages/Comentário/Comentario4/PaginaComentário4"

function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="paginaprincipal" element={<Paginaprincipal/>}/>
            <Route path="registro" element={<Registro/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="perfil" element={<Perfil/>}/>
            <Route path="comentario1/:id" element={<PaginaComentário1/>}/>
            <Route path="comentario2/:id" element={<PaginaComentário2/>}/>
            <Route path="comentario3/:id" element={<PaginaComentário3/>}/>
            <Route path="comentario4/:id" element={<PaginaComentário4/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas