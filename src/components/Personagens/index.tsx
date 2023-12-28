import styled from "styled-components"
import { CharacterType } from "../../type/Character"

interface PersonagensType {
    personagens: CharacterType[]
}

const MainEstilizada = styled.main`

    display: flex;
    width: 80%;

    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

const DivEstilizada = styled.div`
    display: flex; 
    flex-direction  : column;
    border-radius: 20px;
    width: 300px;
    height: auto;
    box-shadow: 3px 3px 12px 0px;
`

const ImagemEstilizada = styled.img`
    border-radius: 20px 20px 0px 0px;
`

interface StatusProps{
    $status: string
}

const StatusEstilizado = styled.h4<StatusProps>`
    position: absolute;
    right : 15px;
    top: 1px;
    background-color: ${p => {
        switch (p.$status) {
            case 'Alive':
                return '#00b700';
            case 'Dead':
                return 'red';
            case 'unknown':
                return 'yellow';
            default:
                return 'gray';
        }
    }};
    padding: 10px;
    border-radius: 10px;
`
const DivImagemEstilizado = styled.div`
    position: relative;
`

const DivInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    
`

export default function Personagens({ personagens }: PersonagensType) {

    return (
        <MainEstilizada>
            {personagens.map(a=>(
                <DivEstilizada key={a.id}>
                    <DivImagemEstilizado>
                        <ImagemEstilizada src={a.image} alt="" />
                        <StatusEstilizado $status={a.status}>{a.status}</StatusEstilizado>
                    </DivImagemEstilizado>
                    <DivInfos>
                        <h2>{a.name}</h2>
                        <h3>{a.species}</h3>
                    </DivInfos>
                </DivEstilizada>
            ))}
        </MainEstilizada>
    )
}