import { useEffect, useState } from 'react'
import type { To } from 'react-router'
import type NavItemProps from '../types/navigation'
import type { NavbarProps } from '../types/navigation'
import { Users, Briefcase, BookA, Ad } from 'lucide-react'
import Logo from './Logo'
import MobileLink from './MobileLink'
import DesktopLink from './DesktopLink'


const NAV_ITEMS: NavItemProps[] = [
    { id: "nav-employees", label: "Employees", to: "/employee", icon: Users },
    { id: "nav-customers", label: "Customers", to: "/customer", icon: Briefcase },
    { id: "nav-dictionary", label: "Dictionary", to: "/dictionary", icon: BookA },
    { id: "nav-definition", label: "Definition", to: "/definition", icon: Ad },
]


const Navbar = ({ activePath }: NavbarProps) => {
    const [active, setActive] = useState(activePath ?? "/employees")
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Blur + border intensity once the page scrolls under the header
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 4)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close the mobile menu on Escape
    useEffect(() => {
        if (!menuOpen) return        
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
        window.addEventListener('keydown', onKey)

        return () => window.removeEventListener('keydown', onKey)
    }, [menuOpen])

    const navigate = (to: To) => {
        // Convert to string if needed, or handle both cases
        setActive(typeof to === 'string' ? to : to.pathname || '/')
        setMenuOpen(false)
    }

    return (
        <header
            className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
                scrolled
                    ? "border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80"
                    : "border-neutral-200/60 bg-white dark:border-neutral-800/60 dark:bg-neutral-950"
            }`}
        >
            {/* a11y: keyboard skip link */}
            <a
                href='/employee'
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-60 focus:rounded-md focus:bg-neutral-900 focus:px-3 focus:py-1.5 focus:text-sm focus:text-white"
            >
                Skip to content
            </a>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-14 items-center">
                    <Logo />

                    {/* Desktop links */}
                    <nav aria-label="Primary" className="ml-6 hidden items-center gap-0.5 md:flex">
                        {NAV_ITEMS.map(item => (
                            <DesktopLink
                                key={item.id}
                                item={item}
                                active={active === item.to}
                                onNavigate={() => navigate(item.to)}
                            />
                        ))}
                    </nav>

                    {/* Desktop auth */}
                    <div className="ml-auto hidden items-center gap-2 md:flex">
                        <span aria-hidden className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />
                        <a
                            href="/login"
                            className="flex h-8 items-center rounded-md px-3 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-white dark:focus-visible:outline-white"
                        >
                            Log in
                        </a>
                        <a
                            href="/register"
                            className="flex h-8 items-center rounded-md bg-neutral-900 px-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 active:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:outline-white"
                        >
                            Register
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 md:hidden dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-white dark:focus-visible:outline-white"
                    >
                        <span className="sr-only">Toggle navigation menu</span>
                        <span className="relative block h-3 w-4" aria-hidden>
                            <span
                                className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-200 ${
                                    menuOpen ? "top-1.25 rotate-45" : "top-0"
                                }`}
                            />
                            <span
                                className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-200 ${
                                    menuOpen ? "bottom-1.25 -rotate-45" : "bottom-0"
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile panel — grid-rows trick for smooth height animation */}
            <div
                id="mobile-menu"
                aria-hidden={!menuOpen}
                className={`grid overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
                    menuOpen ? "grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="border-t border-neutral-200/70 dark:border-neutral-800/70">
                        <nav aria-label="Mobile" className="space-y-0.5 px-3 pb-2 pt-2">
                            {NAV_ITEMS.map((item) => (
                                <MobileLink
                                    key={item.id}
                                    item={item}
                                    active={active === item.to}
                                    onNavigate={() => navigate(item.to)}
                                />
                            ))}
                        </nav>
                        <div className="mx-3 mb-4 grid grid-cols-2 gap-2 border-t border-neutral-200/70 pt-3 dark:border-neutral-800/70">
                            <a
                                href="/login"
                                className="flex h-9 items-center justify-center rounded-md border border-neutral-200 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                            >
                                Log in
                            </a>
                            <a
                                href="/register"
                                className="flex h-9 items-center justify-center rounded-md bg-neutral-900 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Navbar
