import React from 'react'
import type ButtonProps from '../types/button'
import type { ButtonVariant, ButtonSize } from '../types/button'
import { Loader2 } from 'lucide-react'; // Light spinner icon


const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    className = '',
    ...props
}) => {

    // 1. Structural base utilities applied to every button variant
    const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wide border rounded-xl transition-all duration-200 ease-out cursor-pointer active:scale-[0.99] disabled:opacity-40 disabled:pointer-events-none disabled:transform-none'

    // 2. High-density theme mapping synchronized with Tailwind v4 variables
    const variantStyles: Record<ButtonVariant, string> = {
        primary: 'bg-zinc-900 border-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:border-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-2xs',
        secondary: 'bg-zinc-100 border-zinc-100 text-zinc-800 hover:bg-zinc-200/70 dark:bg-zinc-900 dark:border-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800/70',
        outline: 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/40 shadow-3xs',
        danger: 'bg-rose-600 border-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400 dark:hover:bg-rose-500/20',
        ghost: 'border-transparent bg-transparent text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900/50'
    }

    // 3. Dimensional sizing variations
    const sizeStyles: Record<ButtonSize, string> = {
        sm: 'px-3 py-1.5 text-[11px] gap-1.5 rounded-lg',
        md: 'px-4 py-2.5 text-xs gap-2 rounded-xl',
        lg: 'px-5 py-3 text-sm gap-2.5 rounded-2xl'
    }

    return (
        <button
            disabled={disabled || isLoading}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {/* Loading State Override */}
            {isLoading ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin text-current" />
            ) : (
                <>
                    {leftIcon && <span className="shrink-0">{leftIcon}</span>}
                    <span>{children}</span>
                    {rightIcon && <span className="shrink-0">{rightIcon}</span>}
                </>
            )}
        </button>
    )
}


export default Button
