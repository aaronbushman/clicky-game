import React from "react";
import "./style.css";
// import albums from '../albums.json';

const Album = props => (
    <div className="card" onClick={() => props.clicked(props.id)}>
      {/* <div className="img-container"> */}
        <img alt={props.name} src={props.image} />
      {/* </div> */}
    </div>
  );

export default Album;
