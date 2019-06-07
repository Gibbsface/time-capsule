import React from "react";
import ReactDOM from "react-dom";
import interns from "./biography.json";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }
  componentDidMount() {
    interns.then(response => {
      console.log(response.biography);
      this.setState({ lists: response.biography });
    });
  }
  render() {
    return (
      <div>
        <div>Interns</div>
        {this.state.lists.map(x => {
          return (
            <div>
              <p>Profile: {x.intern}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
