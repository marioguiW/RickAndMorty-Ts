import { useContext, useState } from "react";
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

    useFetch()

    const {characters, info} = useContext(CharactersContext)!
    const [gender, setGender] = useState('')

    return(
        <Container>
            <Formulario gender={gender} setGender={setGender} />
            <Personagens personagens={characters} />
            <PassarPagina/>
        </Container>
    )
}