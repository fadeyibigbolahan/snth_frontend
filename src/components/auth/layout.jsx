import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
