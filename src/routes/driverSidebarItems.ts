import DriverHistory from "@/pages/Driver/DriverHistory";
import type { ISidebarItem } from "@/types";

export const driverSidebarItems:ISidebarItem[]=[
     {
          title: "Dashboard",
          items: [
            {
              title: "Driver history",
              url: "/driver/driver-history",
              component:DriverHistory
            },
            
          ],
        },
]