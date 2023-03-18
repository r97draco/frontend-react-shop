import React from "react";

function Sidecard(props) {
  return (
    <div className="w-full overflow-hidden rounded-lg max-h-70">
      <img
        alt="feature"
        className="object-cover object-center w-full h-full"
        src={props.imageURL}
      />
    </div>
  );
}

export default Sidecard;
