import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => (
  <div className="flex flex-col h-screen w-screen mx-auto">
    <div className="w-full h-[80px] min-h-[80px] flex items-center justify-center gap-x-8">
      <Button variant="contained">
        <Link to="/">Main</Link>
      </Button>
      <Button variant="contained">
        <Link to="/news">News</Link>
      </Button>
      <Button variant="contained">
        <Link to="/profile">Profile</Link>
      </Button>
    </div>

    {children}
  </div>
);

export default Layout;
