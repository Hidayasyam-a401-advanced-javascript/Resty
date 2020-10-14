import JSONPretty from 'react-json-prettify';
import React from "react";

class TextArea extends React.Component{
    constructor(props)
    {
        super(props)
    }

    render(){
        return (
            
           <textarea> {this.props.data} </textarea>
        )
        
    }
}

export default TextArea;