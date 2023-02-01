import { useRef } from "react";

const Comp = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    console.log("A name was submitted: " + inputRef.current.value);
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            ref={inputRef}
            type="type"
            name="name"
            placeholder="type here..."
            defaultValue={"Heyyyy"}
          />
        </label>
        <label>
          Family Name:
          <input
            ref={inputRef}
            type="type"
            name="familyName"
            placeholder="type here..."
            defaultValue={"family"}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Comp;
