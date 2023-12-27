import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CharactersContext } from "../context/personagensContext"

export function useFetch<T = unknown>(endpoint: string) {

    const {characters, setCharacters} = useContext(CharactersContext)!

    useEffect(()=> {
        axios.get(endpoint)
            .then(resp => { 
            setCharacters(resp.data)
        })
    },[])
}