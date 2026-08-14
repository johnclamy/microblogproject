import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Default from './pages/Default'
import Employee from './pages/Employee'
import Customer from './pages/Customer'
import Dictionary from './pages/Dictionary'
import Calendar from './pages/Calendar'


const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Default />} />
                <Route path="employee" element={<Employee />} />
                <Route path="customer" element={<Customer />} />
                <Route path="dictionary" element={<Dictionary />} />
                <Route path="calendar" element={<Calendar />} />
            </Route>   
        </Routes>
    </BrowserRouter> 
)


export default App
