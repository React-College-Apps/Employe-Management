import { MdDashboard } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";

const sideBar: any = [
  { name: "Dashboard", icon: <MdDashboard className="h-6 w-6 shrink-0" /> },
  { name: "Users", icon: <CiViewTable className="h-6 w-6 shrink-0" /> },
  { name: "Create User", icon: <LuUser2  className="h-6 w-6 shrink-0" /> },

];

export default sideBar;
