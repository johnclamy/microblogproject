export interface Definition {
    definition: string
    example?: string
    synonyms?: string[]
    antonyms?: string[]
}


export interface Meaning {
    partOfSpeech: string
    definitions: Definition[]
    synonyms?: string[]
    antonyms?: string[]
}


export interface Phonetic {
    text?: string
    audio?: string
    sourceUrl?: string
}


export default interface DefinitionData {
    word: string
    phonetic?: string
    phonetics?: Phonetic[]
    meanings: Meaning[]
    sourceUrls?: string[]
}