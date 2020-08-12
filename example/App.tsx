import React, { useState, useCallback } from "react";
import * as Icons from "../dist";
import { IconContext, Icon } from "../dist";
import "./index.css";

const isIcon = (candidate: any): candidate is Icon =>
  "displayName" in candidate;

const App = () => {
  const [color, setColor] = useState<string>("crimson");
  const [weight, setWeight] = useState<
    "thin" | "light" | "regular" | "bold" | "fill" | "duotone"
  >("regular");

  const onHeartClick = useCallback(() => {
    setColor(
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
    );
  }, [setColor]);

  return (
    <IconContext.Provider
      value={{
        color: "currentColor",
        size: "1em",
        mirrored: false,
        weight: "regular",
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        <p
          style={{
            verticalAlign: "middle",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={onHeartClick}
        >
          Made with{" "}
          <Icons.Heart
            size={32}
            color={color}
            style={{ verticalAlign: "middle" }}
          />{" "}
          from Bub Tub.
        </p>
        <Icons.Horse
          style={{ cursor: "pointer" }}
          color="darkorange"
          size={32}
          weight="duotone"
          onClick={() => setWeight("duotone")}
        />
        <Icons.Horse
          style={{ cursor: "pointer" }}
          color="darkmagenta"
          size={32}
          weight="fill"
          onClick={() => setWeight("fill")}
        />
        <Icons.Horse
          style={{ cursor: "pointer" }}
          color="royalblue"
          size={32}
          weight="bold"
          onClick={() => setWeight("bold")}
        />
        <Icons.Horse
          style={{ cursor: "pointer" }}
          size={32}
          weight="regular"
          onClick={() => setWeight("regular")}
        />
        <Icons.Horse
          style={{ cursor: "pointer" }}
          color="crimson"
          size={32}
          weight="light"
          onClick={() => setWeight("light")}
        />
        <Icons.Horse
          style={{ cursor: "pointer" }}
          color="teal"
          size={32}
          weight="thin"
          onClick={() => setWeight("thin")}
        />
        {Object.values(Icons).map(I => {
          if (isIcon(I)) {
            return (
              <div key={I.displayName}>
                <I />
                <I mirrored color="darkorange" size={24} />
                <I mirrored color="darkmagenta" size={24} />
                <I mirrored color="royalblue" size={24} />
                <I weight={weight} size={32} />
                <I weight={weight} color="crimson" size={32} />
                <I weight={weight} color="teal" size={32} />
                <I weight="thin" color={color} size={48} />
                <I weight="light" color={color} size={48} />
                <I weight="regular" color={color} size={48} />
                <I weight="bold" color={color} size={48} />
                <I weight="fill" color={color} size={48} />
                <I weight="duotone" color={color} size={48} />
              </div>
            );
          }
        })}
      </div>
    </IconContext.Provider>
  );
};

export default App;
