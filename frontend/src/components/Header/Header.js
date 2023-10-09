import { BarraSuperior, Img } from "./Header.jsx"
import logoSite from "../../assets/logoSite.svg"
import iconPerfil from "../../assets/iconePerfil.svg"

function Header() {
    return (
        <>
            <BarraSuperior>
                    <Img src={logoSite} alt='' />
                
                    <Img src={iconPerfil} alt='' />
            </BarraSuperior>
        </>
    )
}

export default Header