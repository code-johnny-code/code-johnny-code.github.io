import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1">
          <h2>Map</h2>
        </div>
        <div className="row">
          <img src={require('./map.png')} alt={'Property Map'} style={{maxWidth: '80%', padding: 20}}/>
        </div>
      </div>
    </div>
  );
};
