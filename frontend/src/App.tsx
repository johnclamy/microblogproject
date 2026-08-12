import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Employee from './pages/Employee'
import Customer from './pages/Customer'
import Project from './pages/Project'
import Calendar from './pages/Calendar'


const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/employee" element={<Layout />}>
                <Route index element={<Employee />} />
                <Route path="customer" element={<Customer />} />
                <Route path="project" element={<Project />} />
                <Route path="calendar" element={<Calendar />} />
            </Route>
        </Routes>
    </BrowserRouter> 
)


export default App
