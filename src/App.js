import React from 'react';
import './App.css';
import './reset.scss';

import Footer from './Component/footer'
import Header from './Component/header'
import Form from './Component/form'


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


