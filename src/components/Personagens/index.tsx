import styled from "styled-components"
import { CharacterType } from "../../type/Character"

interface PersonagensType {
    personagens: CharacterType[]
}

const MainEstilizada = styled.main`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

const DivEstilizada = styled.div`
    display: flex;   
    flex-direction : column;
    border-radius: 40px;
`

export default function Personagens({ personagens }: PersonagensType) {

    return (
        <MainEstilizada>
            {personagens.map(a=>(
                <DivEstilizada key={a.id}>
                    <img src={a.image} alt="" />
                    <h2>{a.name}</h2>
                </DivEstilizada>
            ))}
        </MainEstilizada>
    )
}