import React from 'react'
import { NavLink as RouterNavLink } from 'react-router'
import type { NavLinkProps } from '../types/navigation'


const MobileLink: React.FC<NavLinkProps> = ({
    item,
    active,
    onNavigate,
}) => {
    const Icon = item.icon
    const hRef = item.to

    return (
        <RouterNavLink
            to={hRef}
            aria-current={active ? "page" : undefined}
            onClick={() => onNavigate(hRef)}
            className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors ${
                active
                ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800/70 dark:text-white"
                : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
            }`}
        >
            <Icon className="h-4 w-4" aria-hidden />
            {item.label}
        </RouterNavLink>
    )
}

export default MobileLink
