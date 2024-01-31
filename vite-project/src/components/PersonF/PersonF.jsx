import React from "react";

const Person = (props) => {
  return (
    <div>
      Person name is {props.name} {props.surname}, the age is {props.age}
    </div>
  );
};

export default Person;
