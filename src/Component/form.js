import JSONPretty from 'react-json-prettify';
import React from "react";
import '../form.scss';



export default class Form extends React.Component {
    constructor(props) {
        super(props);
        // init state
        this.state = {
            urltemp: '',
            methodtemp: '',
            url: '',
            _method: '',
            responseJson: {},
        }


    }
    fetchData = () => {
        console.log("fetch", this.state.methodtemp, this.state.urltemp);
        fetch(this.state.urltemp, {
            methodtemp: this.state.methodtemp || "get",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (res) => {
                const obj = {};
                for (let [key, value] of res.headers.entries()) {
                    obj[key] = value;
                }
                const resJson = await res.json();
                this.setState({ responseJson: { Headers: obj, Response: resJson } });
            })
    }

    handleClickGO = e => {
        e.preventDefault();
        console.log("before", this.state);
        this.setState({ _method: this.state.methodtemp });
        this.setState({ url: this.state.urltemp });
        console.log("after", this.state);
        this.fetchData();

    }

    handleInputmethod = e => {
        let method = e.target.value;
        console.log('method : ', method)
        this.setState({ methodtemp: method });
    }

    handleInput = e => {

        let url = e.target.value;
        console.log('url : ', url)
        this.setState({ urltemp: url }); // re-render 
    }

    render() {
        return (<div><form onSubmit={this.handleClickGO}>
            <label>URL <input onChange={this.handleInput} /></label>
            <button type="submit" >GO</button>
            <br />
            <label id="label" htmlFor="get"> <input onChange={this.handleInputmethod} className='radio-in' type="radio" id="get" name="btnselect"
                value="get" />GET</label>
            <label id="label" htmlFor="post"> <input onChange={this.handleInputmethod} className='radio-in' type="radio" id="post" name="btnselect"
                value="post" />POST</label>
            <label id="label" htmlFor="put"> <input onChange={this.handleInputmethod} className='radio-in' type="radio" id="put" name="btnselect"
                value="put" />PUT</label>
            <label id="label" htmlFor="delete"> <input onChange={this.handleInputmethod} className='radio-in' type="radio" id="delete" name="btnselect"
                value="delete" />DELETE</label>


        </form>
            <section>
                <h3>{this.state._method} {this.state.url}</h3>
                <JSONPretty json={this.state.responseJson} />
            </section>
        </div>


        )
    }
}