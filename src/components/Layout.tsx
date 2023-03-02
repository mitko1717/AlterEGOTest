import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import ModalForm from "./ModalLogin";
import { useAppSelector } from "../hooks/redux";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const { isLogined } = useAppSelector((state) => state.data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()

  const modalOpenHandler = () => {
    if (!isLogined) setIsModalOpen(true);
    if (isLogined) navigate('/profile')
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
          Profile
        </Button>
      </div>

      {!isLogined && <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}

      {children}
    </div>
  );
};

export default Layout;
