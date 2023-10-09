import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/login"
import Paginaprincipal from "../pages/Paginaprincipal/Paginaprincipal"


function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="paginaprincipal" element={<Paginaprincipal/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas