import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CharactersContext } from "../context/personagensContext"

export function useFetch<T = unknown>() {

    const {characters,
            setCharacters,
            info,
            setInfo,
            endpoint,
            setEndpoint
        } = useContext(CharactersContext)!

    useEffect(()=> {
        axios.get(endpoint)
            .then(resp => { 
            setCharacters(resp.data.results)
            setInfo(resp.data.info)
            console.log(characters)
        })
    },[endpoint])
}