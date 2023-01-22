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
        primaryColors={["#D24D14", "#FDB813"]}
        progressValue={60}
        strokeSize={6}
        width={120}
      />
    </div>
  );
};

export default App;
