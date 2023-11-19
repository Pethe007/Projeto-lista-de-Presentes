import { BotaoPresente, ImgPresenteContainer, NomePresente, PresenteContainer, PresenteDiv } from "../styles/Presente"

const Presente = () => {
    return (
        <PresenteDiv>
            <PresenteContainer>
                <ImgPresenteContainer src="./vite.svg" />
                <NomePresente>Celular</NomePresente>
                <BotaoPresente>Presentear</BotaoPresente>
            </PresenteContainer>

            <PresenteContainer>
                <ImgPresenteContainer src="./vite.svg" />
                <NomePresente>Computador</NomePresente>
                <BotaoPresente>Presentear</BotaoPresente>
            </PresenteContainer>

            <PresenteContainer>
                <ImgPresenteContainer src="./vite.svg" />
                <NomePresente>Video Game</NomePresente>
                <BotaoPresente>Presentear</BotaoPresente>
            </PresenteContainer>

        </PresenteDiv>
    )
}

export default Presente