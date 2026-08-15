import type DefinitionData from "../types/definition"


const API = `https://corsproxy.io/?https://api.dictionaryapi.dev/api/v2/entries/en/`


const getData = async (
    word: string,
    setData: React.Dispatch<React.SetStateAction<DefinitionData | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
    setLoading(true)
    setError(null)

        try {
            const url = `${API}${word}`
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`)
            }

            const rslt = await res.json()
            console.log(rslt[0])
            setData(rslt[0])

        } catch (err: any) {
            console.log(err.message)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }


    export default getData
