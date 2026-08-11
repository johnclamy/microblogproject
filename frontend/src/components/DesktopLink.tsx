import React from 'react'
import type { NavLinkProps } from '../types/navigation'


const DesktopLink: React.FC<NavLinkProps> = ({
    item,
    active,
    onNavigate,
}) => {
    const Icon = item.icon
    const hRef = item.href

    return (
        <a
            href={hRef}
            aria-current={active ? 'page' : undefined}
            onClick={() => onNavigate(hRef)}
            className={`flex h-8 select-none items-center gap-1.5 rounded-md px-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-white ${
                active
                    ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800/70 dark:text-white"
                    : "text-neutral-600 hover:bg-neutral-100/70 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:text-white"
            }`}
        >
        <Icon className="h-4 w-4" aria-hidden />
        {item.label}
        </a>
    )
}


export default DesktopLink
