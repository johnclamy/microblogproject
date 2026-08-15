import { useState, useEffect } from 'react'
import type DefinitionData from '../types/definition'
import getData from '../api'


const Definition = () => {
    const [word, setWord] = useState<string>('hello')
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<DefinitionData | null>(null)    

    useEffect(() => {
        getData(word, setData, setLoading, setError)
    }, [])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h1>Here is the definition</h1>
                    <p>{data.word === word ? word : ''}</p>
                    {data.meanings.map((meaning, i) => (
                    <div key={i}>
                        <h2>{meaning.partOfSpeech}</h2>
                        {meaning.definitions && meaning.definitions.map((def: any, j: number) => (
                        <p key={j}>{def.definition}</p>
                        ))}
                    </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Definition
