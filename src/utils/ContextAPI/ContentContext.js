import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { BREAKING_BAD_BASE_URL } from "../Constants";

export const ContentContext = createContext()

export const ContentProvider = ({ children }) => {
    const [characters, setCharacters] = useState([])
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)

    const hasMore = useRef(true)

    const getCharacters = async (_name) => {
        setLoading(true);
        const response = await axios.get(BREAKING_BAD_BASE_URL + `/characters`, {
            params: {
                limit: 12,
                offset: offset,
                name: _name
            }
        })
        if (response.status === 200) {
            setCharacters(prev => [...prev, ...response.data])
            if (!response.data.length) hasMore.current = false;
            else hasMore.current = true
        }
        setLoading(false)
    }

    const getCharacter = async char_id => {
        const response = await axios.get(BREAKING_BAD_BASE_URL + `/characters/${char_id}`);
        if (response.status === 200) {
            return response.data[0]
        }
    }

    const getQuotes = async (_author) => {
        const response = await axios.get(BREAKING_BAD_BASE_URL + '/quote', {
            params: {
                author: _author
            }
        });
        if (response.status === 200) {
            return response.data
        }
    }

    useEffect(() => {
        if (!hasMore.current || loading) return;
        getCharacters()
    }, [offset])

    return <ContentContext.Provider value={{ characters, setOffset, loading, getCharacter, getQuotes, getCharacters, setCharacters }}>
        {children}
        <div id='preloader-v2' className={loading && 'opacity-1'}/>
    </ContentContext.Provider>
}