import { useLocation } from "react-router-dom";

import WorkspaceNavbar from "./WorkspaceNavbar";
import NewPostNavbar from "./NewPostNavbar";
import CustomPostNavbar from "./CustomPostNavbar";

const Navbar = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case "/new-post":
      return <NewPostNavbar />;

      case "/custom-post":
      return <CustomPostNavbar />;

    default:
      return <WorkspaceNavbar />;
  }
};

export default Navbar;