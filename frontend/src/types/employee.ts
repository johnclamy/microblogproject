
/****************************
 *  EmployeeProps Interface
 * 
 ****************************/

export const EMPLOYEE_STATUSES = ['Active', 'Inactive', 'On Leave'] as const;
export type EmployeeStatus = typeof EMPLOYEE_STATUSES[number];


// Define the EmployeeProps interface
export default interface EmployeeProps {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    hireDate: string;
    jobId: string;
    salary: number;
    commissionPct: number | null;
    managerId: string | null;
    departmentId: string | null;
    status: EmployeeStatus;
    avatarUrl?: string | null;
    onViewDetails?: (id: string) => void;
}
