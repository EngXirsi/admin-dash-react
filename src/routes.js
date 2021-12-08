
import {Dashboard} from '@material-ui/icons'
import CustomerNew from 'views/customer/CustomerNew'
import DashboardPage from 'views/Dashboard/Dashoard.js'
import TableList from 'views/tableList/TableList'
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
        component: TableList,
        layout: "/admin",
        subItems: [
            {
                name:"View",

            },
            {
                name:"List",
                
            }

        ]


    },
    {
        path: '/custom',
        name: "Customer",
        icon: Dashboard,
        component: TableList,
        layout: "/admin",
        subItems: [
            {
                name:"Customer List",

            },
            {
                name:"Viw Customer",
                
            },
            {
                name:"New Customer",
                path:"/newcustomer",
                component: CustomerNew,

                
            },

        ]


    }
    
]
export default dashboardRoutes