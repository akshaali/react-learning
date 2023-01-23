import { useEffect } from "react";
const About = () => {

  useEffect(() => {
    console.log("About us is mounted");
    return () => {
      console.log("about us is ummounted");
    };
  }, []);

  return (
    <div>
      <h1>About </h1>
    </div>
  );
};

export default About;





