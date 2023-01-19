import Component5 from "./comp5";


const Component4 = () => {
    console.log("component4 remndered!",);

    return(
        <div>
            <h5>Component 4</h5>
            <Component5 />
        </div>
    )
}

export default Component4;