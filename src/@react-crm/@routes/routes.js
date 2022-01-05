import React from "react";
import { DashboardOutlined, TableOutlined, UserOutlined } from "@ant-design/icons";

const routes = [
  {
    path: "/",
    icon: DashboardOutlined,
    name: "Dashboard",
    component: React.lazy(() => import("../../pages/Dashboard")),
  },
  {
    path: "/",
    icon: TableOutlined,
    name: "Tables",
    component: React.lazy(() => import("../../pages/Dashboard")),
  },
  {
    path: "/",
    icon: UserOutlined,
    name: "Users",
    component: React.lazy(() => import("../../pages/Dashboard")),
  },
];

export default routes;
