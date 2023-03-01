import { useState, useEffect } from "react";
import { useGetDataQuery } from "../store/data/data.api";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import Layout from "../components/Layout";

const News = () => {
  const [limit, setLimit] = useState<number>(5);
  const [start, setStart] = useState<number>(0);
  const { isLoading, isError, data } = useGetDataQuery({limit, start});

  const { stateData } = useAppSelector((state) => state.data);
  const { setData } = useActions();

  const loadMoreHandler = () => {
    setLimit(limit + 5)
    setStart(start + 5)
    // const [trigger, result] = useGetDataQuery({limit, start});
    // trigger();
    // console.log('data', result.data);
    
    if(data && data?.length > 0) {
      let concatData = stateData.concat(data);
      console.log(concatData);
      
      // setData(stateData, ...data)
    }
  }

  useEffect(() => {
    if (data && stateData.length === 0) setData(data);
  }, [data]);

  return (
    <Layout>
      <div>
        <div className="flex justify-center mx-auto my-2 w-36">
          <Button variant="contained">LOAD MORE</Button>
        </div>

        {isError && <div className="w-36 mx-auto flex justify-center mt-6">couldn't load data</div>}
        {isLoading && <div className="w-36 mx-auto flex justify-center mt-6"><CircularProgress /></div>}

        {stateData && stateData?.length > 0 && <div className="w-36 mx-auto text-center font-bold py-2">Posts count: {stateData.length}</div>}

        <div className="flex w-full h-[80vh] flex-col overflow-y-scroll py-2">
          {stateData &&
            stateData.map((obj) => (
              <div key={obj.id} className="w-[80%] mx-auto p-2">
                <p className="font-bold">{obj.title}</p>
                <p>{obj.body}</p>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default News;
