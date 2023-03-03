import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Main = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <Layout>
      <h1 className="text-center">{t('welcomeMain')}</h1>
    </Layout>
  );
};

export default Main;
