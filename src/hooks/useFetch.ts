import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CharactersContext } from "../context/personagensContext"

export function useFetch<T = unknown>() {

    const {characters,
            setCharacters,
            info,
            setInfo,
            endpoint,
            setEndpoint,
            error,
            setError
        } = useContext(CharactersContext)!

    useEffect(()=> {
        axios.get(endpoint)
            .then(resp => { 
                setError(false)
            setCharacters(resp.data.results)
            setInfo(resp.data.info)
            console.log(characters)
        }).catch(error => {
            console.log(error)
            setError(true)
        })
    },[endpoint])
}