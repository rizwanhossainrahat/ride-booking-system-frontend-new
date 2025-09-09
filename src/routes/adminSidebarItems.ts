import DriverDetails from "@/pages/Admin/DriverDetails";
import RiderDetails from "@/pages/Admin/RiderDetails";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems:ISidebarItem[]=[
    {
      title: "Dashboard",
      items: [
        {
          title: "Rider Details",
          url: "/admin/rider-details",
          component:RiderDetails
        },
        {
          title: "Driver Details",
          url: "/admin/driver-details",
          component:DriverDetails
        },
      ],
    },
  
  ]