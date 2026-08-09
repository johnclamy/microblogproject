
/****************************
 *    Employee Interfaces      
 * 
 ****************************/

export const EMPLOYEE_STATUSES = ['Active', 'Inactive', 'On Leave'] as const
export type EmployeeStatus = typeof EMPLOYEE_STATUSES[number]


// Define the EmployeeProps interface
export default interface EmployeeProps {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    hireDate: string
    jobId: string
    salary: number
    commissionPct: number | null
    managerId: string | null
    departmentId: string | null
    status: EmployeeStatus
    avatarUrl?: string | null
    onViewDetails?: (id: string) => void
}


// Props required on a dropdown input field that's used for changing employee status
export interface StatusSelectProps {
    value: EmployeeStatus
    onChange: (newStatus: EmployeeStatus) => void
    disabled?: boolean
}
