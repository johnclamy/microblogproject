import { useState } from 'react'
import { type EmployeeStatus } from './types/employee'
import Employee from './components/Employee'
import { capitalizeFirstLetter } from './helper/'


function App() {
  let showEmployee = true; // This can be replaced with actual logic to determine if the employee should be shown
  const [status, setStatus] = useState<EmployeeStatus>('Inactive')

  return (
    <div>
    {showEmployee ? (
      <div>
        <input
          type="text"
          placeholder="manage employee status..."
          value={status}
          onChange={(e) => setStatus(e.target.value as EmployeeStatus)}
        />
        <Employee
          id="1"
          firstName="John"
          lastName="Doe"
          email="john.doe@example.com"
          phoneNumber="123-456-7890"
          hireDate="2023-01-01"
          jobId="job-1"
          salary={50000}
          commissionPct={0.1}
          managerId="manager-1"
          departmentId="dept-1"
          status={capitalizeFirstLetter(status)}
        />
      </div>) : (<p>Employee not found or unavailable for your profile.</p>
      )}
    </div>
  )
}

export default App
