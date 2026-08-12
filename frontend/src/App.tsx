import { useState } from 'react'
import { TriangleAlert, Users, UserPlus } from 'lucide-react'
import type EmployeeProps from './types/employee'
import AddEmployeeModal from './components/AddEmployeeModal'
import EmplyeeGrid from './components/EmployeeGrid'
import Navbar from './components/Navbar'
import Button from './components/Button'
import MOCK_EMPLOYEES from './assets/data'


export default function App() {
    const [ employees, setEmployees ] = useState<EmployeeProps[]>(MOCK_EMPLOYEES)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    // Triggered when modal submits a successful structured payload
    const handleAddEmployee = (newEmployee: EmployeeProps) => {
        setEmployees(prev => [newEmployee, ...prev])
        console.log("Newly registered UUID data array payload:", newEmployee)
    }

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors">
            {/* Navbar — full width, flush at the top */}
            <Navbar />
            <div className="p-4 sm:p-6 md:p-8">
                <div className="mx-auto max-w-5xl">
                    {/* Main Consolidated Dashboard (add-btn and employees grid) container */}
                    <div className="w-full bg-white dark:bg-zinc-950 rounded-3xl p-5 sm:p-6 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs">                       
                        
                        {/* Header Block Nested Inside for Tight Alignment */}
                        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-zinc-100 dark:border-zinc-900">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900/5 text-zinc-800 dark:bg-zinc-50/10 dark:text-zinc-200">
                                    <Users className="h-5 w-5" />
                                </div>    
                                <div>
                                    <h1 className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                                        Staff Matrix Directory
                                    </h1>
                                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                                        Managing {employees.length} corporate records across system divisions.
                                    </p>
                                </div>
                            </div>

                            {/* Trigger Button Integration */}
                            <Button
                                className="sm:w-auto w-full"
                                variant="primary" 
                                size="sm" 
                                leftIcon={<UserPlus className="h-3.5 w-3.5" />}
                                onClick={() => setIsModalOpen(true)}
                            >
                                Add Employee
                            </Button>
                        </header>

                        {/* Collection of employee grid cards  */}
                        <main>
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
                        </main>
                    </div>

                    {/* Modal Overlay Component layer */}
                    <AddEmployeeModal 
                        isOpen={isModalOpen} 
                        onClose={() => setIsModalOpen(false)} 
                        onSave={handleAddEmployee} 
                    />
                </div>
            </div>  
        </div>
    )
}
