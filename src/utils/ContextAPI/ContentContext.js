import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BREAKING_BAD_BASE_URL } from "../Constants";

export const ContentContext = createContext()

export const ContentProvider = ({ children }) => {
    const [characters, setCharacters] = useState([])
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)

    const getCharacters = async () => {
        setLoading(true);
        const response = await axios.get(BREAKING_BAD_BASE_URL + `/characters?limit=12&offset=${offset}`)
        if (response.status === 200)
            setCharacters([...characters, ...response.data])
        setLoading(false)
    }

    useEffect(() => {
        getCharacters()
    }, [offset])

    return <ContentContext.Provider value={{ characters, setOffset }}>
        {children}
    </ContentContext.Provider>
}