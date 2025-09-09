import RideHistory from "@/pages/Rider/RideHistory";
import type { ISidebarItem } from "@/types";

export const riderSidebarItems:ISidebarItem[]=[
     {
          title: "Dashboard",
          items: [
            {
              title: "Ride history",
              url: "/rider/ride-history",
              component:RideHistory
        },
            
          ],
        },
]