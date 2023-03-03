import Button from "@mui/material/Button/";
import Layout from "../components/Layout";
import { useActions } from "../hooks/actions";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t, i18n } = useTranslation();
  const { setIsLoginedFalse } = useActions();
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLoginedFalse();
    navigate("/");
  };

  return (
    <Layout>
      <div>
        <div className="w-48 mx-auto text-center">{t('welcomeProfile')}</div>
        <div className="flex justify-center w-48 mt-4 mx-auto">
          <Button variant="contained" type="submit" onClick={logoutHandler}>
            <span className="text-2xl font-bold text-gray-400">Log out</span>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
