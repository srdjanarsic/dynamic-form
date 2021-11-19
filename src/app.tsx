import React, { useState } from "react";
import { getMockData } from "./data/data";
import { getForm } from "./form-factory/form-factory";
import css from "./app.module.scss";
import { getElement } from "./element-factory/element-factory";

function App() {
  const [state, setState] = useState(getMockData()); // single source of truth
  const [selectedId, setSelectedId] = useState<number>(1); // selected

  const renderForm = () => {
    const item = state.find((item) => item.id === selectedId);
    if (item) {
      const form = getForm(item, (newValue) => {
        const idx = state.indexOf(item);
        const newState = [...state];
        newState[idx] = newValue;
        setState(newState);
      });
      return form;
    }
  };

  const renderElement = () => {
    const item = state.find((item) => item.id === selectedId);
    if (item) {
      return getElement(item);
    }
  };

  return (
    <div className={css.main}>
      <div
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSelectedId(parseInt(event?.target.value));
        }}
      >
        {state.map((el) => (
          <>
            <input
              type="radio"
              value={el.id}
              name="type"
              checked={el.id === selectedId}
            />{" "}
            id: {el.id}, type: {el.type} <br />
          </>
        ))}
      </div>

      <div>{renderForm()}</div>
      <div>{renderElement()}</div>
    </div>
  );
}

export default App;
