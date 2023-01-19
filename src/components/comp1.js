import Component2 from "./comp2";


const Component1 = () => {
    console.log("component1 remndered!",);

    return(
        <div>
            <h2>Component 1</h2>
            <Component2 />
        </div>
    )
}

export default Component1;