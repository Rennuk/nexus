import React from "react";

const Greet = (props) => {
  console.log(props);
  const { character, heroName } = props;
  return (
    <div>
      <h1>{character}</h1>
      <span>{heroName}</span>
      {props.children}
    </div>
  );
};

export default Greet;
