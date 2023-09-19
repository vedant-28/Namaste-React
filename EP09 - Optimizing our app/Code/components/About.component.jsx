import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // state with initial default values
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
        email: "",
      },
    };
  };

  async componentDidMount() {
    // used for API calls prominently.
    console.log("Comonent did mount");
    const data = await fetch("https://api.github.com/users/vedant-28");
    const jsonUserData = await data.json();
    console.log(jsonUserData);
    this.setState({
      userInfo: jsonUserData,
    });
  };

  componentDidUpdate() {
    console.log("Component did update");
  };

  componentWillUnmount() {
    console.log("Component unmounted");
  };

  render() {
    const { name, location, avatar_url, email } = this.state.userInfo;
    return (
      <div className="about-div">
        <div className="about-img-div">
          <img src={avatar_url} className="avatar-img" />
        </div>
        <div className="about-details-div">
          <h2>Name: {name}</h2>
          <h3>Location: {location ? location : "Pune"}</h3>
          <h3>Contact: {email ? email :"vedant10vaidya@gmail.com"}</h3>
        </div>
      </div>
    );
  };
};

export default About;
