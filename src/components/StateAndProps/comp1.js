import {useEffect} from "react";

const Component1 = (props) => {
    console.log("Props of component1", props, props.nameProp);
    // useEffect(arg1,arg2); arg1 - callback function arg2 - dependency array
    // dependency array(optional) - state, props, empty

    //Mounting lifecycle - dependency array = empty - componentDidMount()
    useEffect(() => {
        console.log("Mounting lifecycle");
    }, []);

    //update Lifecycle - dependency array = state/props - componentDidUpdate()
    useEffect(() => {
        console.log("Update Lifecycle, name dependency");
    }, [props.nameProp]);

    useEffect(() => {
        console.log("Update Lifecycle, age dependency");
    }, [props.ageProp]);

    //unmounting lifecycle - dependency array = empty - componentWillUnmount()
    useEffect(() => {
        return(() => {

        })
    }, [])

    useEffect(() => {
        console.log("No second arg(no dependency array) lifecycle");
    });





    return(
        <div>
            {/* {console.log("Mounted first")} */}
            <h2>Component1</h2>
        </div>
    )
};

export default Component1;

/*
Lifecycle is: 
1. mounting 
2. updating 
3. unmounting
*/
