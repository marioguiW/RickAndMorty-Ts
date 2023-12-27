import { useContext } from "react";
import Formulario from "../../components/Formulario";
import Personagens from "../../components/Personagens";
import { useFetch } from "../../hooks/useFetch";
import { CharactersContext } from "../../context/personagensContext";
import styled from "styled-components";
import PassarPagina from "../../components/PassarPagina";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
`


export default function Home(){

    useFetch("https://rickandmortyapi.com/api/character")

    const {characters} = useContext(CharactersContext)!

    console.log(characters)

    return(
        <Container>
            <Formulario />
            <Personagens personagens={characters.results} />
            <PassarPagina/>
        </Container>
    )
}