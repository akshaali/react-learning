import React from "react";

class PureClass extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            name: "PureClass",
        }
    }

    // shouldComponentUpdate(prevProps, prevState) {
    //     if(prevState.name === this.state.name){
    //         return false;
    //     }
    //     return true;

    //     //return -->>> true do rerender 
    //     // return --> false -> do not rerender

    // }

    render() {
        return(
            <div>
                Pure Component
            </div>
        )
    }



}

export default PureClass;