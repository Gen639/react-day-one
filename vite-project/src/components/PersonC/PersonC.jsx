import React from "react";

class PersonC extends React.Component {
  render() {
    return (
      <div>
        Person name is {this.props.name} {this.props.surname}, the age is{" "}
        {this.props.age}
      </div>
    );
  }
}

export default PersonC;
