import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/login"
import Paginaprincipal from "../pages/Paginaprincipal/Paginaprincipal"
import Login from "../pages/Login/login"
import Registro from "../pages/Registro/registro"


function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="paginaprincipal" element={<Paginaprincipal/>}/>
            <Route path="registro" element={<Registro/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas