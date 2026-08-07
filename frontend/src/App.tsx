import Employee from './components/Employee';


function App() {
 

  return (
    <>
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
        status="Active"
      />
    </>
  )
}

export default App
