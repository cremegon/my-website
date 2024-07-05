import { Outlet } from "react-router-dom";

export default function ProjectHomeLayout() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
