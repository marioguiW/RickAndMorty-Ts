import { useContext } from "react"
import styled from "styled-components"
import { CharactersContext } from "../../context/personagensContext"


const ContainerPassarPagina = styled.div`
    display: flex;
    gap: 20px;
`

const BotaoEstilizado = styled.button`
    font-size: 20px;
    width: 200px;
    padding: 15px;
    background-color: #ffb938;
    color: white;
    border: none;
    &:hover{
        background-color: #ffa600;
        cursor: pointer;
    }
`

export default function PassarPagina(){

    
    const {characters ,setCharacters} = useContext(CharactersContext)!
    
    function verificaAntProx(event : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const botao = event.currentTarget.value

        if(botao == 'ant'){
            if(characters.info.prev !== null) 
        }else{
            console.log(characters.info.next)
        }
    }

    return(
        <ContainerPassarPagina>
            <BotaoEstilizado value="ant" onClick={(event)=> verificaAntProx(event)}>anterior</BotaoEstilizado>
            <BotaoEstilizado value="prox" onClick={(event)=> verificaAntProx(event)}>próximo</BotaoEstilizado>
        </ContainerPassarPagina>
    )
}