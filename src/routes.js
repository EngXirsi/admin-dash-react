
import {Dashboard} from '@material-ui/icons'
import DashboardPage from 'views/Dashboard/Dashoard.js'
const dashboardRoutes = [
    {
        path: '/dashboard',
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin"


    },
    {
        path: '/table',
        name: "Table List",
        icon: Dashboard,
        // components: DashboardPage,
        layout: "/admin"


    }
    
]
export default dashboardRoutes