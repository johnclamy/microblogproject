import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Default from './pages/Default'
import Employee from './pages/Employee'
import Customer from './pages/Customer'
import Calendar from './pages/Calendar'
import Dictionary from './pages/Dictionary'
import Definition from './pages/Definition'


const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Default />} />
                <Route path="employee" element={<Employee />} />
                <Route path="customer" element={<Customer />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="dictionary" element={<Dictionary />} />
                <Route path="definition" element={<Definition />} />
            </Route>   
        </Routes>
    </BrowserRouter> 
)


export default App
