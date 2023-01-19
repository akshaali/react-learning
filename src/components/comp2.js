import Component3 from "./comp3";


const Component2 = () => {
    console.log("component2 rendered!", );

    return(
        <div>
            <h3>Component 2</h3>
            <Component3 />
        </div>
    )
}

export default Component2;