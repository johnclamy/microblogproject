import type DefinitionData from "../types/definition"


const API = `https://api.dictionaryapi.dev/api/v2/entries/en/`


const getData = async (
    word: string,
    setData: React.Dispatch<React.SetStateAction<DefinitionData | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
    setLoading(true)
    setError(null)

        try {
            // Add timeout to handle slow requests
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

            const url = `${API}${encodeURIComponent(word.trim())}`
            const res = await fetch(url, {
                signal: controller.signal
            })

            clearTimeout(timeoutId)

            if (!res.ok) {
                if (res.status === 404) {
                    throw new Error(`Word "${word}" not found`)
                }
                throw new Error(`Response status: ${res.status}`)
            }

            const rslt = await res.json()

            // The API returns an array, we want the first item
            if (Array.isArray(rslt) && rslt.length > 0) {
                setData(rslt[0])
            } else {
            throw new Error('No definition found')
            }       
        }

        catch (err: any) {
            if (err.name === 'AbortError') {
                setError('Request timed out. Please try again.')
            } else {
                setError(err.message || 'An error occurred')
            }
            console.error('Error fetching definition:', err)
        }
        
        finally {
            setLoading(false)
        }
    }


    export default getData
