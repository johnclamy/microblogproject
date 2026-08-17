import { Link, useNavigate } from 'react-router'


const NotFound: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
            {/* badge */}
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium tracking-wide text-zinc-500">
                Error 404
            </span>

            {/* heading */}
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                Page not found
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                Sorry, we couldn't find the page you're looking for. It may have been
                moved or deleted.
            </p>

            {/* actions */}
            <div className="mt-8 flex items-center gap-3">
                <Link
                    to="/"
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                    >
                    Back to dashboard
                </Link>
                <button
                onClick={() => navigate(-1)}
                className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                >
                Go back
                </button>
            </div>

            {/* help */}
            <p className="mt-10 text-xs text-zinc-400">
                Think this is a mistake?{" "}
                <a href="mailto:support@example.com" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Contact support
                </a>
            </p>
        </div>
    )
}


export default NotFound
