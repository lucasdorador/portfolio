import React from "react";

function Images(props) {
  return (
    <div style={{ display: "flex" }}>
      <img
        style={{
          borderRadius: props.radius ? props.radius : "50%",
          width: props.width ? props.width : "15rem",
          height: props.height ? props.height : "15rem",
        }}
        src={props.src}
      />
    </div>
  );
}

export default Images;
