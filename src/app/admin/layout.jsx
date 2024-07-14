import "./admin.scss";

import AdminLayout from "@/components/admin-layout/Admin-layout";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="admin">
      <AdminLayout />
      <div className="admin__context">{children}</div>
    </div>
  );
};

export default Layout;
