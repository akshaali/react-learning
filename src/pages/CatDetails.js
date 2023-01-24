import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const CatDetails = () => {
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
   async function getCatDetails(){
    const response = await fetch(`https://api.thecatapi.com/v1/images/${params.catId}`, {
      method: "GET",
    });
    const data = await response.json();
    console.log("response ==>>", data);
    return data;
   }
  getCatDetails();
  }, [params.catId]);

  console.log("params at cat details page", params, location);

  const item = location.state.item;

  return (
    <div>
      Cat Details
      <div>
        <p>item's id : {item.id}</p>
        <img src={item.url} alt={"catPicture"} />
      </div>
    </div>
  );
};

export default CatDetails;
