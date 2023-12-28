import { ReactNode, useState } from "react";
import { createContext } from "react";
import { CharacterType } from "../type/Character";

interface CharactersContextType {
    characters: CharacterType[];
    setCharacters: React.Dispatch<React.SetStateAction<CharacterType[]>>; 
    info: InfoType;
    setInfo: React.Dispatch<React.SetStateAction<InfoType>>; 
    endpoint: string;
    setEndpoint: React.Dispatch<React.SetStateAction<string>>;
}

interface CharactersProviderProps {
    children: ReactNode; 
}

interface InfoType {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }

export const CharactersContext = createContext<CharactersContextType | null>(null);

const CharactersProvider: React.FC<CharactersProviderProps> = ({ children }) => {

    const initialCharacters: InfoType = {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    };

    const [characters, setCharacters] = useState<CharacterType[]>([])
    const [info, setInfo] = useState<InfoType>(initialCharacters)
    const [endpoint, setEndpoint] = useState<string>
        ("https://rickandmortyapi.com/api/character")

    return(
        <CharactersContext.Provider value={
                    {characters,
                    setCharacters,
                    info,
                    setInfo,
                    endpoint,
                    setEndpoint
                }
                }>
            {children}
        </CharactersContext.Provider>
    )
}

export default CharactersProvider