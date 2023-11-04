import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/login"
import Paginaprincipal from "../pages/Paginaprincipal/Paginaprincipal"
import Registro from "../pages/Registro/registro"
import Perfil from "../pages/Perfil/Perfil"

function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="paginaprincipal" element={<Paginaprincipal/>}/>
            <Route path="registro" element={<Registro/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="perfil" element={<Perfil/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas