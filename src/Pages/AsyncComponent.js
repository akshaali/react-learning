import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAction } from "../Redux/Actions/asyncCall";

const AsyncComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AsyncReducer.data);
  console.log(data);

  useEffect(() => {
    console.log("AsyncComponent useEffect");
    dispatch(
      fetchDataAction({
        method: "GET",
        url: "https://api.thecatapi.com/v1/images/search?limit=-10",
      })
    );
  }, [dispatch]);

  return <div>Async Component</div>;
};

export default AsyncComponent;
