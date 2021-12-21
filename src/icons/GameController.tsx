/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <line
      x1="152"
      y1="108"
      x2="184"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="72"
      y1="108"
      x2="104"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="92"
      x2="88"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M172,55.7,84,56A52.1,52.1,0,0,0,32.8,99h0L16.4,183.1a28,28,0,0,0,47.4,24.7h0L107,160l65-.3a52,52,0,1,0,0-104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M223.2,98.7l16.4,84.4a28,28,0,0,1-47.4,24.7h0l-43.2-48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M149,159.8h23a52,52,0,0,0,52-52,45,45,0,0,0-.8-9h0l16.4,84.4a28,28,0,0,1-47.4,24.7h0l-43.2-48Z"
      opacity="0.2"
    />
    <line
      x1="152"
      y1="108"
      x2="184"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72"
      y1="108"
      x2="104"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="92"
      x2="88"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M172,55.7,84,56A52.1,52.1,0,0,0,32.8,99h0L16.4,183.1a28,28,0,0,0,47.4,24.7h0L107,160l65-.3a52,52,0,1,0,0-104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M223.2,98.7l16.4,84.4a28,28,0,0,1-47.4,24.7h0l-43.2-48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M247.5,181.7h-.1L231.1,97.2c0-.1,0-.1-.1-.2a60,60,0,0,0-59-49.3h0L84,48A59.9,59.9,0,0,0,24.9,97.6v.2L8.6,181.6h0a35.9,35.9,0,0,0,29.2,41.7,31.8,31.8,0,0,0,6.2.6,36.4,36.4,0,0,0,25.5-10.5l.4-.5,40.7-45,34.9-.2L186.1,213l.5.5A36,36,0,0,0,212,224a33.6,33.6,0,0,0,6.3-.6A36.1,36.1,0,0,0,247.5,181.7ZM104,116H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V92a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H152A8,8,0,0,1,144,108Zm71.5,99.7a20.1,20.1,0,0,1-17.5-5.4l-31.1-34.5H172a60,60,0,0,0,51-28.3l8.7,45.2A20,20,0,0,1,215.5,207.7Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="152"
      y1="108"
      x2="184"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="72"
      y1="108"
      x2="104"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="92"
      x2="88"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M172,55.7,84,56A52.1,52.1,0,0,0,32.8,99h0L16.4,183.1a28,28,0,0,0,47.4,24.7h0L107,160l65-.3a52,52,0,1,0,0-104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M223.2,98.7l16.4,84.4a28,28,0,0,1-47.4,24.7h0l-43.2-48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="152"
      y1="108"
      x2="184"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="72"
      y1="108"
      x2="104"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="92"
      x2="88"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M172,55.7,84,56A52.1,52.1,0,0,0,32.8,99h0L16.4,183.1a28,28,0,0,0,47.4,24.7h0L107,160l65-.3a52,52,0,1,0,0-104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M223.2,98.7l16.4,84.4a28,28,0,0,1-47.4,24.7h0l-43.2-48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="152"
      y1="108"
      x2="184"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72"
      y1="108"
      x2="104"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="92"
      x2="88"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M172,55.7,84,56A52.1,52.1,0,0,0,32.8,99h0L16.4,183.1a28,28,0,0,0,47.4,24.7h0L107,160l65-.3a52,52,0,1,0,0-104Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M223.2,98.7l16.4,84.4a28,28,0,0,1-47.4,24.7h0l-43.2-48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const GameController = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GameController.displayName = "GameController";

export default GameController;
