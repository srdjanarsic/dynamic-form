import React, { useState } from "react";
import { Circle, Dot, Rect } from "./common/types";
import CircleElement from "./elements/circle-element";
import DotElement from "./elements/dot-element";
import RectElement from "./elements/rect-element";
import CircleForm from "./forms/circle-form/circle-form";
import DotForm from "./forms/dot-form/dot-form";
import RectForm from "./forms/rect-form/rect-form";
import css from "./app.module.scss";

const getDefaultRectValue = (): Rect => ({
  width: 100,
  height: 50,
  filled: false,
});

const getDefaultDotValue = (): Dot => ({
  x: 100,
  y: 50,
});

const getDefaultCircleValue = (): Circle => ({
  radius: 75,
  filled: false,
});

function App() {
  const [rectState, setReactState] = useState(getDefaultRectValue());
  const [dotState, setDotState] = useState(getDefaultDotValue());
  const [circleState, setCircleState] = useState(getDefaultCircleValue());

  return (
    <div className={css.main}>
      <div className={css.form}>
        <h1>Forms</h1>

        <h3>Rect form</h3>
        <RectForm value={rectState} onChange={setReactState} />

        <h3>Circle form</h3>
        <CircleForm value={circleState} onChange={setCircleState} />

        <h3>Dot form</h3>
        <DotForm value={dotState} onChange={setDotState} />
      </div>
      <div>
        <h1>Elements</h1>
        <RectElement value={rectState} />
        <CircleElement value={circleState} />
        <DotElement value={dotState} />
      </div>
    </div>
  );
}

export default App;
