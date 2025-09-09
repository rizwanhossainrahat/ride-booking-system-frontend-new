import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import About from "@/pages/About";
import DriverHistory from "@/pages/Driver/DriverHistory";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Unauthorized from "@/pages/Unauthorized";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { riderSidebarItems } from "./riderSidebarItems";
import { withAuth } from "@/utils/withAuth";
import type { TRole } from "@/types";
import { Role } from "@/constants/role";
import { driverSidebarItems } from "./driverSidebarItems";

export const router=createBrowserRouter([
    {
        Component:App,
        path:"/",
        children:[
            {
                Component:About,
                path:"about"
            }
        ]
    },
    {
        Component:withAuth(DashboardLayout,Role.ADMIN as TRole),
        path:"/admin",
        children:[
             {index:true,element:<Navigate to="/admin/rider-details"></Navigate>},
            ...generateRoutes(adminSidebarItems)
        ]
    },
    {
        Component:withAuth(DashboardLayout,Role.RIDER as TRole),
        path:"/rider",
        children:[
            {index:true,element:<Navigate to="/rider/ride-history"></Navigate>},
            ...generateRoutes(riderSidebarItems)
        ]
    },
    {
        Component:withAuth(DashboardLayout,Role.DRIVER as TRole),
        path:"/driver",
        children:[
            {index:true,element:<Navigate to="/driver/driver-history"></Navigate>},
          ...generateRoutes(driverSidebarItems)
        ]
    },
    {
        Component:Login,
        path:"login"
    },
    {
        Component:Register,
        path:"register"
    },
    {
        Component:Unauthorized,
        path:"*"
    }
    
])