import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <Layout>
      <h1 className="text-center">welcome to the main page</h1>
    </Layout>
  );
};

export default Main;
