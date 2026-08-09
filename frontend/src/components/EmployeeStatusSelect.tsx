import React from 'react'
// import { ShieldAlert } from 'lucide-react'
import { type EmployeeStatus } from '../types/employee'
import { type StatusSelectProps } from '../types/employee'
import { EMPLOYEE_STATUSES } from '../types/employee'


// Select dropdown input field for changing an employee's status
const EmployeeStatusSelect: React.FC<StatusSelectProps> = ({
    value,
    onChange,
    disabled = false
}) => {
    // Custom theme for matching the card's active/inactive colors
    const statusStyles: Record<EmployeeStatus, string> = {
        Active: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400',
        Inactive: 'bg-zinc-500/10 text-zinc-600 border-zinc-500/20 dark:bg-zinc-500/20 dark:text-zinc-400',
        'On Leave': 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/20 dark:text-amber-400'
    }

    return (
        <div className="w-full max-w-xs">
            {/* Field Label */}
            <label className="block text-[11px] font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-1.5">
                Employee Status
            </label>

            {/* Input Relative Wrapper Container */}
            <div className="relative flex items-center group">
                {/* Dynamic status styles */}
                <span className={`absolute left-3.5 h-2 w-2 rounded-full transition-colors duration-300 pointer-events-none ${statusStyles[value]}`} />

                {/* The Core Select Field */}
                <select
                    value={value}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.value as EmployeeStatus)}
                    className="w-full appearance-none rounded-xl pl-8.5 pr-10 py-2.5 text-xs font-medium border transition-all duration-300 ease-out cursor-pointer outline-hidden"
                >
                    {EMPLOYEE_STATUSES.map(option => (
                    <option
                        key={option} 
                        value={option}
                        className="bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                    >
                        {option}
                    </option>
                    ))}
                </select>

                {/* Custom Custom Chevron Down Arrow */}
                <div className="absolute right-3.5 pointer-events-none text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-500 transition-colors">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    )
}


export default EmployeeStatusSelect
