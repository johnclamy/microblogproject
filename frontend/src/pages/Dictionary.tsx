import { useState } from 'react'
import { useNavigate } from 'react-router'


const Dictionary: React.FC = () => {
    const [word, setWord] = useState<string>('')
    const navigate = useNavigate()

    const handleSearch = () => {
        if (!word.trim()) return
        navigate('/definition/' + word.trim(), { replace: true })
    }
 
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
            <div className="w-full max-w-md">
                {/* header */}
                <header className="text-center">
                    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium tracking-wide text-zinc-500">
                        Dictionary
                    </span>
                    <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
                        Look up a word
                    </h1>
                    <p className="mt-2 text-sm text-zinc-500">
                        Enter a word below to view its definition.
                    </p>
                </header>    
                    
                {/* search form */}
                <form
                    className="mt-8 flex gap-3"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSearch()
                    }}
                >
                    <input
                        type="text"
                        value={word}
                        autoFocus
                        onChange={(e) => setWord(e.target.value)}
                        placeholder="e.g. serendipity"
                        className="w-full flex-1 rounded-md border border-zinc-300 bg-white px-3.5 py-2 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                    />
                    <button
                        type="submit"
                        disabled={!word.trim()}
                        className="shrink-0 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:shadow-none"
                    >
                        Search
                    </button>   
                </form>    
                <p className="mt-4 text-center text-xs text-zinc-400">
                    Press{' '}
                    <kbd className="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[11px] text-zinc-500">
                        Enter
                    </kbd>{' '}
                    to search
                </p>
            </div>
        </div>
    )
}


export default Dictionary
