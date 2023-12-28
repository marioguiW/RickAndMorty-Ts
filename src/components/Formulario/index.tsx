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
}



export default function Formulario({gender, setGender} : FormularioProps){
    console.log(gender)
    return(
        <ContainerFormulario>
            <InputEstilizado type="text" />
            <SelectEstilizado name="Gender" value={gender} onChange={(event)=> setGender(event.target.value)}>
                <option value="A"></option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </SelectEstilizado>
            <SelectEstilizado name="Specie" id="">
                <option value=""></option>
                <option value="">Human</option>
                <option value="">Alien</option>
                <option value="">Mythological Creature</option>
                <option value="">Humanoid</option>
                <option value="">unknown</option>
                <option value="">Animal</option>
                <option value="">Robot</option>
            </SelectEstilizado>
            <SelectEstilizado name="Status" id="">
                <option value="">Any</option>
                <option value="">Alive</option>
                <option value="">Dead</option>
            </SelectEstilizado>
            <SelectEstilizado name="Genero" id="">
                <option value="">Any</option>
                <option value="">Male</option>
                <option value="">Female</option>
            </SelectEstilizado>
        </ContainerFormulario>
    )
}
