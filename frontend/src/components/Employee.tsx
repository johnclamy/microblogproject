import React from 'react'
import {
    Mail,
    Phone,
    Calendar,
    Briefcase,
    PoundSterling,
    Percent,
    ShieldCheck,
    User
} from 'lucide-react'
import type EmployeeProps from '../types/employee'
import MessageButton from './MessageButton'


const Employee: React.FC<EmployeeProps> = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    hireDate,
    jobId,
    salary,
    commissionPct,
    managerId,
    departmentId,
    status,
    avatarUrl,
}) => {
    // Safe formatting for currencies
    const formattedSalary = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        maximumFractionDigits: 0
    }).format(salary);

    // Format date natively
    const formattedDate = new Date(hireDate).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <section className="w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            <header className="flex items-start justify-between gap-4 border-b border-zinc-100 pb-4 dark:border-zinc-900">
                <div className="flex items-center gap-3.5">
                    {avatarUrl ? (
                    <img 
                        src={avatarUrl} 
                        alt={`${firstName} ${lastName}`} 
                        className="h-14 w-14 rounded-full border border-zinc-200 object-cover dark:border-zinc-800"
                    />) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600">
                        <User className="h-6 w-6" />
                    </div>
                    )}
                    <div>
                        <h3 className="text-base font-semibold tracking-tight">
                            {firstName} {lastName}
                        </h3>
                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mt-0.5">
                            <Briefcase className="h-3 w-3 inline text-zinc-400" /> {jobId}
                        </p>
                    </div>
                </div>
                {/* Status Badge */}
                <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold £ {statusStyles[status]}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {status}
                </span>
            </header>

            {/* Main Core Metadata Grid */}
            <section className="grid grid-cols-2 gap-x-4 gap-y-3 py-4 text-xs">
                {/* Salary details */}
                <div className="flex flex-col gap-1 rounded-xl bg-zinc-50/50 p-2.5 dark:bg-zinc-900/30">
                    <span className="text-[10px] font-medium tracking-wide uppercase text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
                        <PoundSterling className="h-2.5 w-2.5" /> Base Compensation
                    </span>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">{formattedSalary}</span>
                </div>

                {/* Dynamic Commission Handling */}
                <div className="flex flex-col gap-1 rounded-xl bg-zinc-50/50 p-2.5 dark:bg-zinc-900/30">
                    <span className="text-[10px] font-medium tracking-wide uppercase text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
                        <Percent className="h-2.5 w-2.5" /> Commission
                    </span>
                    <span className={`font-semibold ${commissionPct ? 'text-zinc-800 dark:text-zinc-200' : 'text-zinc-400 italic font-normal'}`}>
                        {commissionPct ? `${(commissionPct * 100).toFixed(0)}%` : 'No commission'}
                    </span>
                </div>

                {/* Department Info */}
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 col-span-1">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-zinc-400" />
                    <span className="truncate">
                        Dept: <strong className="font-medium text-zinc-800 dark:text-zinc-200">{departmentId || 'Unassigned'}</strong>
                    </span>
                </div> 

                {/* Manager Details */}
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 col-span-1">
                    <User className="h-4 w-4 shrink-0 text-zinc-400" />
                    <span className="truncate">
                        Reports to: <strong className="font-medium text-zinc-800 dark:text-zinc-200">{managerId || 'None'}</strong>
                    </span>
                </div>       
            </section>

            <footer>
                {/* Footer top */}
                <div className="mt-1 flex flex-col gap-2 border-t border-zinc-100 pt-4 text-xs text-zinc-500 dark:border-zinc-900 dark:text-zinc-400">
                    <a href={`mailto:${email}`} className="flex items-center gap-2.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                        <Mail className="h-3.5 w-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                        <span className="truncate">{email}</span>    
                    </a>
                    <a href={`tel:${phoneNumber}`} className="flex items-center gap-2.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                        <Phone className="h-3.5 w-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                        <span>{phoneNumber}</span>
                    </a>
                    <div className="flex items-center gap-2.5 pt-1 text-[11px] text-zinc-400 dark:text-zinc-500">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Joined {formattedDate}</span>
                    </div>     
                </div>

                {/* Footer bottom */}
                <div className="mt-3">
                    <MessageButton onClick={() => console.log(`Messaging ${firstName}`)} />
                </div>
            </footer>            
        </section>
    )
}


export default Employee;
