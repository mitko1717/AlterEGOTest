import { useEffect } from "react";
import { useAppSelector } from "../hooks/redux";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Layout from "../components/Layout";
import { getData } from "../store/data/data.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { useActions } from "../hooks/actions";
import { useTranslation } from "react-i18next";

const News = () => {
  const { setStart } = useActions();
  const limit = 5;
  const dispatch = useDispatch<AppDispatch>();
  const { t, i18n } = useTranslation();

  const { stateData, start, isLoading } = useAppSelector((state) => state.data);

  const loadMoreHandler = async () => {
    setStart();
    dispatch(getData({ start, limit }));
  };

  useEffect(() => {
    dispatch(getData({ start, limit }));
  }, []);

  return (
    <Layout>
      <div>
        <div className="flex justify-center mx-auto my-2 w-36">
          <Button variant="contained" onClick={loadMoreHandler}>
            {t('loadMore')}
          </Button>
        </div>

        {isLoading && (
          <div className="w-36 mx-auto flex justify-center mt-6">
            <CircularProgress />
          </div>
        )}
        {stateData && stateData?.length > 0 && (
          <div className="w-36 mx-auto text-center font-bold py-2">
            <p>{t('postsCount')}:{stateData.length}</p>
          </div>
        )}

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
