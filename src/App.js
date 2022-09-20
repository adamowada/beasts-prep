import React from "react";
// new
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// data
import data from './data.json';
import Beast from './components/Beast.js';

// https://react-bootstrap.github.io/components/cards/
// https://getbootstrap.com/docs/4.1/utilities/spacing/

class App extends React.Component {
  render() {
    return(
      <>
        <Beast description={data[0].description} src={data[0].imgUrl}/>
      </>
    );
  }
}

export default App;
