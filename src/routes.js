import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import CharactersProvider from "./context/personagensContext";

export default function Rotas(){
    return(
        <BrowserRouter>
            <CharactersProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </CharactersProvider>
        </BrowserRouter>
    )
}