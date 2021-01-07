import React, { Component } from 'react';

class Props extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const child = this.props.children;
        return(
            <div>
                <h2>{child}</h2>
            </div>
        )
    }
}
export default Props;