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

    const {characters, setCharacters, info, error} = useContext(CharactersContext)!
    const [gender, setGender] = useState('')
    const [name, setName] = useState('')
    const [specie, setSpecie] = useState('')
    const [status, setStatus] = useState('')
 
    return(
        <Container>
            <Formulario
                gender={gender}
                setGender={setGender}
                name={name}
                setName={setName}
                specie={specie}
                setSpecie={setSpecie}
                status={status}
                setStatus={setStatus}
            />
            <Personagens
                personagens={characters}
                setPersonagens={setCharacters}
                gender={gender}
                name={name}
                specie={specie}
                status={status}
                error={error}
                />
            <PassarPagina/>
        </Container>
    )
}