import { Link } from "react-router-dom";
import Layout from "../components/Layout"
// import { useAppSelector } from "../hooks/redux";

const News = () => {
//   const { openedArticle } = useAppSelector((state) => state.article);

  return (
    <Layout>
        <div className="flex w-full flex-col">
            news
            <Link to="/"></Link>
        </div>
    </Layout>

  );
};

export default News;
