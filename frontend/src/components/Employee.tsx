import React from 'react';
import type EmployeeProps from '../types/employee';


const Employee: React.FC<EmployeeProps> = ({
    id,
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
    return (
        <div className="employee-card">
            <h2>{firstName} {lastName} with id ref. {id}</h2>
            <p>Manager ID: {managerId || 'N/A'} / Department ID: {departmentId || 'N/A'}</p>
            <p>Email: {email}</p>
            <p>Phone: {phoneNumber}</p>
            <p>Hire Date: {hireDate}</p>
            <p>Job ID: {jobId}</p>
            <p>Salary: ${salary}</p>
            <p>Commission: {commissionPct ? `${commissionPct * 100}%` : 'N/A'}</p>
            <p>Status: {status}</p>
            {avatarUrl && <img src={avatarUrl} alt={`${firstName} ${lastName}`} />}
        </div>
    );
}


export default Employee;
