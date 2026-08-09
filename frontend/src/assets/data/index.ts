import type EmployeeProps from "../../types/employee";


const MOCK_EMPLOYEES: EmployeeProps[] = [
  {
    id: 'EMP-001',
    firstName: 'Sarah',
    lastName: 'Connor',
    email: 's.connor@company.com',
    phoneNumber: '+1 (555) 019-2834',
    hireDate: '2023-03-15',
    jobId: 'SR_ENG',
    salary: 125000,
    commissionPct: null, // No commission for engineering
    managerId: 'MGMT-101',
    departmentId: 'ENG_DEPT',
    status: 'Active',
    avatarUrl: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'EMP-002',
    firstName: 'Marcus',
    lastName: 'Vance',
    email: 'm.vance@company.com',
    phoneNumber: '+1 (555) 014-9921',
    hireDate: '2024-01-10',
    jobId: 'AE_SALES',
    salary: 85000,
    commissionPct: 0.15, // 15% commission rate
    managerId: 'MGMT-102',
    departmentId: 'SALES_DEPT',
    status: 'On Leave',
    avatarUrl: 'https://images.pexels.com/photos/694438/pexels-photo-694438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'EMP-003',
    firstName: 'Elena',
    lastName: 'Rostova',
    email: 'e.rostova@company.com',
    phoneNumber: '+1 (555) 017-4482',
    hireDate: '2025-08-01',
    jobId: 'JR_MARKETER',
    salary: 62000,
    commissionPct: null,
    managerId: null, // Top tier or unassigned manager
    departmentId: null, // Temporary bench / onboarding state
    status: 'Inactive',
    avatarUrl: null // Triggers fallback UI icon automatically
  }
];


export default MOCK_EMPLOYEES
