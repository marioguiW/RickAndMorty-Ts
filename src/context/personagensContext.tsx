import { ReactNode, useState } from "react";
import { createContext } from "react";
import { CharacterType } from "../type/Character";

interface CharactersContextType {
    characters: ApiResponse;
    setCharacters: React.Dispatch<React.SetStateAction<ApiResponse>>; 
}

interface CharactersProviderProps {
    children: ReactNode; 
}

interface ApiResponse {
    results: CharacterType[]; 
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
  }

export const CharactersContext = createContext<CharactersContextType | null>(null);

const CharactersProvider: React.FC<CharactersProviderProps> = ({ children }) => {

    const initialCharacters: ApiResponse = {
        results: [],
        info: {
            count: 0,
            pages: 0,
            next: null,
            prev: null,
        },
    };

    const [characters, setCharacters] = useState<ApiResponse>(initialCharacters)

    return(
        <CharactersContext.Provider value={{characters, setCharacters}}>
            {children}
        </CharactersContext.Provider>
    )
}

export default CharactersProvider