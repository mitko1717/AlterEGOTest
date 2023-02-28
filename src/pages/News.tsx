import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useGetDataQuery } from "../store/data/data.api";

const News = () => {
  const [limit, setLimit] = useState<number>(10)
  const { isLoading, isError, data } = useGetDataQuery(limit);

  useEffect(() => {
    
  }, [])
  

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