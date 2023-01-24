import { data } from "../MockData";
import { useNavigate } from "react-router-dom";

const CatListig = () => {
  console.log("Data", data);
  const navigate = useNavigate();

  const handleNavigation = (id, item) => {
    // two arg - 1. pathname - 2. state
    navigate(`/cat-list/${id}`, { state: { item, cat: "hkdhkjdshkjsa" } });
    // navigate(-2) //goBack
    // navigate(1) //goForward

  };

  return (
    <div>
      <h3>Cat Listing</h3>
      {data.map((item, index) => {
        return (
          <div key={item.id}>
            <h4>{index + 1}</h4>
            <p>item's id : {item.id}</p>
            <img
              onClick={() => handleNavigation(item.id, item)}
              src={item.url}
              alt={"catPicture"}
              width={500}
              height={600}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CatListig;

/*
1. push/navigate 
2. replace
3. goBack
4. goForward
*/