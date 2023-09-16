import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // used for API calls prominently.
    console.log("Comonent did mount");
  }

  onClickHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>Name: {name}</h2>
        <h3>City: {location}</h3>
        <h4>Count: {count}</h4>
        <button className="count-btn" onClick={this.onClickHandler}>
          +
        </button>
        <button
          className="reset-count-btn"
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          Reset count
        </button>
        <h3>Contact: vedant10vaidya@gmail.com</h3>
      </div>
    );
  }
}

export default About;
