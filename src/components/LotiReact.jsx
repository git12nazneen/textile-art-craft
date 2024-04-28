import React from "react";
import Lottie from "lottie-react";
import robotAnimation from "../assets/Animation2- 1714282405536.json";

const style = {
  height: 300,
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 60],
    },
  ],
};

const LotiReact = () => {
  return (
    <div className="mx-auto my-20 justify-center max-w-3xl">
      <div className="flex flex-wrap justify-around">
        <div>
          {" "}
          <Lottie
            animationData={robotAnimation}
            style={style}
            interactivity={interactivity}
          />
        </div>
        <div className="mt-10 pt-28 space-y-3">
          <h1 className="font-bold text-2xl">This is your personal page</h1>
          <h2>Now you can add your favourite category</h2>
          <h2>And you have to delete and update </h2>
        </div>
      </div>
    </div>
  );
};

export default LotiReact;
