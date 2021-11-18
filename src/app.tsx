import React, { useState } from "react";
import { Circle, Dot, Rect } from "./common/types";
import CircleElement from "./elements/circle-element";
import DotElement from "./elements/dot-element";
import RectElement from "./elements/rect-element";
import FormForEverything from "./forms/form-for-everything";
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
  // curently editing type
  const [formType, setFormType] = useState<"dot" | "circle" | "rect">("dot");

  const [rectState, setRectState] = useState(getDefaultRectValue());
  const [dotState, setDotState] = useState(getDefaultDotValue());
  const [circleState, setCircleState] = useState(getDefaultCircleValue());

  return (
    <div className={css.main}>
      <div>
        <div
          className={css.options}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormType(event?.target.value as any);
          }}
        >
          <input
            type="radio"
            value="dot"
            name="type"
            checked={formType === "dot"}
          />
          Dot
          <br />
          <input
            type="radio"
            value="circle"
            name="type"
            checked={formType === "circle"}
          />
          Circle
          <br />
          <input
            type="radio"
            value="rect"
            name="type"
            checked={formType === "rect"}
          />
          Rect
          <br />
        </div>
      </div>
      <div className={css.form}>
        <FormForEverything
          dotValue={dotState}
          circleValue={circleState}
          rectValue={rectState}
          onDotChange={setDotState}
          onCircleChange={setCircleState}
          onRectChange={setRectState}
          type={formType}
        />
      </div>
      <div>
        {formType === "rect" && <RectElement value={rectState} />}
        {formType === "circle" && <CircleElement value={circleState} />}
        {formType === "dot" && <DotElement value={dotState} />}
      </div>
    </div>
  );
}

export default App;
