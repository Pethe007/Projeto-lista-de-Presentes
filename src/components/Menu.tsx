import { SlHome } from "react-icons/sl";
import { ImgUser, MenuContainer, NomeUserContainer } from "../styles/Menu";

const Menu = () => {
    return (
        <MenuContainer>
            <SlHome color={"white"} size={50} />
            <h1>Lista de Presentes</h1>
            <NomeUserContainer>
                <span>Lucas</span>
                <ImgUser src="./vite.svg" />
            </NomeUserContainer>

        </MenuContainer>
    )
}

export default Menu