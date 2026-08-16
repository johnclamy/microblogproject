import { useState, useEffect } from 'react'
import { BookA } from 'lucide-react'
import type DefinitionData from '../types/definition'
import getData from '../api'


const SUGGESTIONS = ['hello', 'serendipity', 'ephemeral']


const Definition = () => {
    const [word, setWord] = useState<string>(SUGGESTIONS[0])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<DefinitionData | null>(null)    

    useEffect(() => {
        if (word.trim()) {
            getData(word, setData, setLoading, setError)
        }
    }, [word])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        const input = (e.target as HTMLFormElement).querySelector('input')
        if (input?.value.trim()) {
            setWord(input.value.trim())
        }
    }

    return (
        <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased">
            <main className="mx-auto w-full max-w-2xl px-6 pb-24 pt-16 sm:pt-24">
                {/* Header section */}
                <header className="mb-10 text-center">
                    <div className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm">
                        <BookA className="h-5 w-5" />
                    </div>
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Dictionary
                    </h1>
                    <p className="mt-3 text-sm text-zinc-500 sm:text-base">
                        Look up definitions, pronunciations, and usage examples.
                    </p> 
                </header>

                {/* Search form */}
                <form onSubmit={handleSearch} className="flex flex-col gap-2 sm:flex-row">
                    <input 
                        type="text" 
                        placeholder="Enter a word..." 
                        defaultValue={word}
                        className="h-11 flex-1 rounded-xl border border-zinc-200 bg-white px-4 text-sm shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-4 focus:ring-zinc-900/5"
                    />
                    <button
                        type="submit"
                        className="h-11 rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                    >
                        Search
                    </button>
                </form>

                {/* Quick suggestions */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    {SUGGESTIONS.map((s) => (
                        <button
                            key={s}
                            type="button"
                            onClick={() => setWord(s)}
                            className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-900"
                        >
                            {s}
                        </button>
                    ))}
                </div>

                {/* Loading */}
                {loading && (
                <div className="flex flex-col items-center justify-center gap-3 py-20 text-sm text-zinc-400">
                    <svg
                        className="h-5 w-5 animate-spin text-zinc-900"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>
                    Looking up definition…
                </div>
                )}

                {/* Error */}
                {error && !loading && (
                <div className="mt-8 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm">
                    <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <div>
                        <p className="font-medium text-red-800">Couldn't fetch definition</p>
                        <p className="mt-0.5 text-red-600">{error}</p>
                    </div>
                </div>
                )}
                
                {/* Results */}           
                {data && !loading && !error && (
                <article className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                    {/* Word header */}
                    <div className="border-b border-zinc-100 p-6 sm:p-8">
                        <h2 className="text-4xl font-bold tracking-tight">{data.word}</h2>

                        {data.phonetic && (
                            <p className="mt-2 text-sm font-medium text-indigo-600">
                                {data.phonetic}
                            </p>
                        )}

                        {data.phonetics && data.phonetics.length > 0 && data.phonetics[0]?.audio && (
                            <div className="mt-4">
                                <audio controls className="h-10 w-full max-w-xs">
                                    <source src={data.phonetics[0].audio} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        )}
                    </div>

                    {/* Meanings */}
                    <div className="divide-y divide-zinc-100">
                        {data.meanings && data.meanings.map((meaning, i) => (
                            <section key={i} className="p-6 sm:p-8">
                                <div className="flex items-center gap-4">
                                    <h3 className="inline-flex shrink-0 items-center rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                                        {meaning.partOfSpeech}
                                    </h3>
                                    <div className="h-px w-full bg-zinc-100" />
                                </div>

                                <ol className="mt-5 space-y-5">
                                    {meaning.definitions && meaning.definitions.map((def, j) => (
                                        <li key={j} className="flex gap-3.5">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-zinc-50 text-[11px] font-semibold text-zinc-400 ring-1 ring-zinc-200">
                                                {j + 1}
                                            </span>
                                            <div className="min-w-0">
                                                <p className="text-sm leading-relaxed text-zinc-700">
                                                    {def.definition}
                                                </p>
                                                {def.example && (
                                                    <blockquote className="mt-2 border-l-2 border-zinc-200 pl-3 text-sm italic leading-relaxed text-zinc-500">
                                                        "{def.example}"
                                                    </blockquote>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        ))}
                    </div>       
                </article>
                )}
                <footer className="mt-12 text-center text-xs text-zinc-400">
                    Powered by the Free Dictionary API
                </footer>             
            </main>
        </div>
    )
}

export default Definition
