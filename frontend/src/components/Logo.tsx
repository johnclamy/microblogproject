import React from 'react'


const Logo = (): React.JSX.Element => (
    <a
        href="/"
        className="flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-white"
    >
        <span className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
            <img src="../assets/icons/logo.png" alt="logo" />
        </span>
        <span className="text-[15px] font-semibold tracking-tight text-neutral-950 dark:text-white">
            CRM Plus
        </span>
    </a>
)


export default Logo
