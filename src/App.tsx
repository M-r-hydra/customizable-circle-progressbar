// React
import React from "react";
// React
// Components
import CircleProgressbar from "./Components/CircleProgressbar/CircleProgressbar";
// Components

const App = () => {
  return (
    <div>
      <CircleProgressbar
        fontColor="red"
        innerHtml={<></>}
        primaryColors={["red", "blue"]}
        progressValue={50}
        strokeSize={4}
        width={120}
      />
    </div>
  );
};

export default App;
