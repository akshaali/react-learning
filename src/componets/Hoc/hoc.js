const Hoc = (Arg1) => {
  // console.log("arg", arg1);
  return () => {
    return <div style={{ backgroundColor: "red" }}><Arg1 /></div>;
  };
};

export default Hoc;
