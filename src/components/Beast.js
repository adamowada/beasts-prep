import React from "react";

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


// Mounting order
// https://reactjs.org/docs/react-component.html

class Beast extends React.Component {
	constructor(props){

		// In JavaScript, super refers to the parent class constructor. (In our example, it points to the React.Component implementation.)
		// Importantly, you can’t use "this" in a constructor until after you’ve called the parent constructor

		super(props);
		this.state = {
			description: this.props.description,
			src: this.props.src,
		}

	}

	// addHeart() {
	addHeart = () => {
		console.log(this);
		this.setState({description: this.state.description + '❤️'})
	} 

  render() { 
		console.log("render this", this)
    return (
      <>
				{/* className="mx-auto" */}
        <Card style={{ width: "18rem" }} >
          <Card.Img variant="top" src={this.state.src} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            {/* className="fst-italic" NOT font-italic */}
            <Card.Text>
              {this.state.description}
            </Card.Text>
            <Button variant="primary" onClick={this.addHeart}>Like the beast!</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Beast;
