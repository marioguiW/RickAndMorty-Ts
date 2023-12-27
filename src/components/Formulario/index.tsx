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

export default function Formulario(){
    return(
        <div>
            <InputEstilizado type="text" />
        </div>
    )
}
