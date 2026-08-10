import React from 'react'
import { type EmployeeGridProps } from '../types/employee' 
import Employee from './Employee'


// Responsive container component for employee data
const EmployeeGrid: React.FC<EmployeeGridProps> = ({ employees }) => (
    <div className="w-full bg-zinc-50/50 dark:bg-zinc-900/40 rounded-3xl p-4 sm:p-6 md:p-8 border border-zinc-100 dark:border-zinc-900">
        {/* Responsive Grid Core System */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 w-full justify-items-center">
            {employees.map(employee => (
                <article key={employee.id} className="w-full flex justify-center animate-fade-in">
                    <Employee { ...employee } />
                </article>
            ))}
        </div>
    </div>
)


export default EmployeeGrid
