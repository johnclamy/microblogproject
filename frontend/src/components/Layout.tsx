import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout: React.FC = () => (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors">
      <Navbar />
      <div className="p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-5xl">
          <Outlet />  {/* routed pages render here */}
        </div>
      </div>
      <Footer />
    </div>
)


export default Layout
