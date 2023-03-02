import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import ModalForm from "./ModalLogin";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen w-screen mx-auto">
      <div className="w-full h-[80px] min-h-[80px] flex items-center justify-center gap-x-8">
        <Button variant="contained">
          <Link to="/">Main</Link>
        </Button>
        <Button variant="contained">
          <Link to="/news">News</Link>
        </Button>
        <Button variant="contained" onClick={modalOpenHandler}>
          {/* <Link to="/profile">Profile</Link> */}
          Profile
        </Button>
      </div>

      <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      {children}
    </div>
  );
};

export default Layout;
