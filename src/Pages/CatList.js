import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatListAction } from "../Redux/Actions/getCatListAction";

const CatList = () => {
  const dispatch = useDispatch();
  const catList = useSelector((state) => state.getCatListReducer.catList);

  console.log("catListcatList", catList);
  useEffect(() => {
    dispatch(
      fetchCatListAction({
        method: "get",
        url: "https://api.thecatapi.com/v1/images/search?limit=10",
      })
    );
  }, []);

  return (
    <div>
      <h3>Cat Listing</h3>
      {catList.map((item, index) => {
        return (
          <div key={item.id}>
            <h4>{index + 1}</h4>
            <p>item's id : {item.id}</p>
            <img src={item.url} alt={"catPicture"} width={500} height={600} />
          </div>
        );
      })}
    </div>
  );
};

export default CatList;
