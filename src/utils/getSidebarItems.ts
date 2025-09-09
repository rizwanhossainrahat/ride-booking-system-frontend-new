import { Role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { driverSidebarItems } from "@/routes/driverSidebarItems";
import { riderSidebarItems } from "@/routes/riderSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case Role.ADMIN:
      return [...adminSidebarItems];
    case Role.RIDER:
      return [...riderSidebarItems];
    case Role.DRIVER:
      return [...driverSidebarItems];
    default:
      return [];
  }
};