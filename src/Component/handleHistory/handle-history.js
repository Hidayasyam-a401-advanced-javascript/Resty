import JSONPretty from 'react-json-prettify';
import React from "react";

class HandleHistory extends React.Component{
    constructor(props)
    {
        super(props)
    }

    render(){
        return (
            
            <div>
            <button className='history-link'>{`${this.props.method} : ${this.props.url} `}</button>
           </div>
        )
        
    }
}

export default HandleHistory;