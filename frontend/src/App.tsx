import { useState } from 'react'
import { TriangleAlert } from 'lucide-react'
import type EmployeeProps from './types/employee'
import EmplyeeGrid from './components/EmployeeGrid'
import MOCK_EMPLOYEES from './assets/data'


function App() {
    const [ employees, setEmployees ] = useState<EmployeeProps[]>(MOCK_EMPLOYEES)

    return (
        <>
            {employees.length ? <EmplyeeGrid employees={employees} /> : (     
                <div className="flex items-center gap-3 rounded-xl border border-zinc-200/60 bg-zinc-50/50 p-4 dark:border-zinc-800/60 dark:bg-zinc-900/30">
                    <TriangleAlert className="h-5 w-5" />
                    <div className="flex flex-col gap-0.5">
                        <p className="text-xs font-semibold tracking-tight text-zinc-800 dark:text-zinc-200">
                            Employees Unavailable
                        </p>
                        <p className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                            Employee not found or unavailable for your profile.
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}


export default App
