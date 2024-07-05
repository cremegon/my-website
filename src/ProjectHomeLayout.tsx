import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

export default function ProjectHomeLayout() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
