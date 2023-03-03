import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import ModalForm from "./ModalLogin";
import { useAppSelector } from "../hooks/redux";
import { useTranslation } from "react-i18next";
import { ILanguage } from "../models/interfaces";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const { isLogined, lngs } = useAppSelector((state) => state.data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const modalOpenHandler = () => {
    if (!isLogined) setIsModalOpen(true);
    if (isLogined) navigate("/profile");
  };

  return (
    <div className="flex flex-col h-screen w-screen mx-auto relative">
      <div className="absolute top-5 right-10">
        {Object.keys(lngs).map((lng ) => (
          <button
          className="p-1 my-1 mx-2 border hover:opacity-70 w-36 text-center"
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng as keyof ILanguage].nativeName}
          </button>
        ))}
      </div>
      <div className="w-full h-[80px] min-h-[80px] flex items-center justify-center gap-x-8">
        <Button variant="contained">
          <Link to="/">
            {t('main')}
          </Link>
        </Button>
        <Button variant="contained">
          <Link to="/news">{t('news')}</Link>
        </Button>
        <Button variant="contained" onClick={modalOpenHandler}>
        {t('profile')}
        </Button>
      </div>

      {!isLogined && (
        <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}

      {children}
    </div>
  );
};

export default Layout;
