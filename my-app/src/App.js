import React from 'react';
import './App.css';
import './reset.scss';
import './header.scss';
import './footer.scss';
import './form.scss';

const Header = () => {
  return <header><h1>RESTy</h1></header>
}
const Footer = () => {

  return <footer><h3>@ 2018 Code Fellows</h3></footer>
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = {
      url: '',
      _method: '',
      urltemp:'',
      methodtemp:'',
    }
 
  }

  handleClickGO = e => {
    e.preventDefault();
    this.setState({url: this.state.urltemp});
    this.setState({ _method: this.state.methodtemp});
  
  }
  
  handleInputmethod = e => {
    let method = e.target.value;
    this.setState({methodtemp: method});
  }

  handleInput = e => {
   
   let url = e.target.value;
   this.setState({urltemp:url}); // re-render 
  }

  render() {
    return (<div><form>
      <label>URL <input onChange={this.handleInput} /></label>
      <button onClick={this.handleClickGO} >GO</button>
      <br />
      <label id="label" htmlFor="get"> <input onChange={this.handleInputmethod}  className='radio-in' type="radio" id="get" name="btnselect"
        value="get"/>GET</label>
         <label id="label" htmlFor="post"> <input onChange={this.handleInputmethod} className='radio-in'type="radio" id="post" name="btnselect"
        value="post"/>POST</label>
         <label id="label" htmlFor="put"> <input onChange={this.handleInputmethod} className='radio-in'type="radio" id="put" name="btnselect"
        value="put"/>PUT</label>
         <label id="label" htmlFor="delete"> <input onChange={this.handleInputmethod} className='radio-in'type="radio" id="delete" name="btnselect"
        value="delete"/>DELETE</label>
      
  
  </form>
      <section>
          <h3>{this.state._method} {this.state.url}</h3>
      </section>     
  </div>

      
    )
  }
}

class App extends React.Component {
        render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;


