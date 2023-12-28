import styled from "styled-components"

const ContainerFormularioEstilizado = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputEstilizado = styled.input`
    padding: 15px;
    margin-top: 25px;
    font-size: 25px;
    border-radius: 8px;
`

const SelectEstilizado = styled.select`
    padding: 15px;
    margin-top: 25px;
    font-size: 25px;
    border-radius: 8px;
`

const ContainerFormulario = styled.div`
    display: flex;
    gap: 25px;
`

interface FormularioProps{
    gender: string;
    setGender: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    specie: string;
    setSpecie: React.Dispatch<React.SetStateAction<string>>;
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}



export default function Formulario(
    {gender,
    setGender,
    name,
    setName,
    specie,
    setSpecie,
    status,
    setStatus} : FormularioProps){

    console.log(gender)

    return(
        <ContainerFormulario>
            <InputEstilizado type="text" value={name} onChange={(evento)=> setName(evento.target.value)} />
            <SelectEstilizado value={gender} onChange={(event)=> setGender(event.target.value)}>
                <option value="">Genero</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </SelectEstilizado>
            <SelectEstilizado value={specie} onChange={(event)=> setSpecie(event.target.value)}>
                <option value="">Especie</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Mythological Creature">Mythological Creature</option>
                <option value="Humanoid">Humanoid</option>
                <option value="unknown">unknown</option>
                <option value="Animal">Animal</option>
                <option value="Robot">Robot</option>
            </SelectEstilizado>
            <SelectEstilizado value={status} onChange={(event)=> setStatus(event.target.value)}>
                <option value="">Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
            </SelectEstilizado>
        </ContainerFormulario>
    )
}
