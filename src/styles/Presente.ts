import styled from "styled-components";

export const PresenteDiv = styled.div`
    margin: auto;
    margin-top: 10%;
    padding: 30px;
    display: grid ;
    grid-template-columns: repeat(auto-fit, minmax(230px,1fr));
    width: 65%;
    border: 1px solid white;
    border-radius: 10px;
    gap: 30px;
`

export const PresenteContainer = styled.div`
    background: orange;
    height: 200px;
    width: 100% ;
    border: 2px solid white;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding:10px ;
`

export const ImgPresenteContainer = styled.img`
    
    border: 2px solid white;
    height: 100px;
    width: 100px;
    border-radius: 10%;
    align-items: center;
    
    
    
`
export const NomePresente = styled.h2`
    color: white;
`

export const BotaoPresente = styled.button`
    height: 25px;
    width: 100px;
    color: white;
    background-color: green;
    border:1px solid white;
    border-radius: 15%;
`


