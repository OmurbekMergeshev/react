import React from "react";

function Welcome(props) {
  return (
      <h1> Привет, {props.name}</h1>
  );
}

function App() {
    return(
        <div>
            <Welcome name="sara" />
            <Welcome name="Kim" />
            <Welcome name="Alik" />
        </div>
    )
}

export default App;
