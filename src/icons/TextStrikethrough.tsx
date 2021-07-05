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
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <g>
      <path
        d="M75.11111,88c0-22.09139,21.96094-40,52.88889-40,23.77865,0,42.25677,10.58606,49.529,25.52014"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M72,168c0,22.09139,25.07205,40,56,40s56-17.90861,56-40c0-23.76634-21.62275-32.97043-45.59723-40.00076"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </g>
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76.334,96.00294A25.48209,25.48209,0,0,1,75.11111,88c0-22.09139,21.96094-40,52.88889-40,23.77865,0,42.25677,10.58606,49.529,25.52014"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,168c0,22.09139,25.07205,40,56,40s56-17.90861,56-40c0-23.76634-21.62275-32.97043-45.59723-40.00076"
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
    <path d="M224,128a7.99977,7.99977,0,0,1-8,8H175.93091C185.11755,143.11133,192,153.20166,192,168c0,13.33936-7.01465,25.6958-19.75244,34.79395C160.32568,211.31006,144.61133,216,128,216S95.67432,211.31006,83.75244,202.794C71.01465,193.6958,64,181.33936,64,168a8,8,0,0,1,16,0c0,17.3457,21.98145,32,48,32s48-14.6543,48-32c0-14.85425-10.54053-23.58228-38.76587-32H40a8,8,0,0,1,0-16h98.239c.03028-.00049.06055.00024.0907,0H216A7.99977,7.99977,0,0,1,224,128ZM76.33252,104.00488a8.00573,8.00573,0,0,0,7.60254-10.49609A17.42935,17.42935,0,0,1,83.11133,88c0-18.24316,19.29785-32,44.88867-32,19.5,0,36.11768,8.25195,42.33643,21.02246a7.99984,7.99984,0,1,0,14.38476-7.00488C175.70557,51.502,153.97119,40,128,40,93.2876,40,67.11133,60.63574,67.11133,88a33.60555,33.60555,0,0,0,1.62158,10.49707A8.00289,8.00289,0,0,0,76.33252,104.00488Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <g>
      <path
        d="M76.334,96.00294A25.48209,25.48209,0,0,1,75.11111,88c0-22.09139,21.96094-40,52.88889-40,23.77865,0,42.25677,10.58606,49.529,25.52014"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <path
        d="M72,168c0,22.09139,25.07205,40,56,40s56-17.90861,56-40c0-23.76634-21.62275-32.97043-45.59723-40.00076"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </g>
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <g>
      <path
        d="M76.334,96.00294A25.48209,25.48209,0,0,1,75.11111,88c0-22.09139,21.96094-40,52.88889-40,23.77865,0,42.25677,10.58606,49.529,25.52014"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M72,168c0,22.09139,25.07205,40,56,40s56-17.90861,56-40c0-23.76634-21.62275-32.97043-45.59723-40.00076"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <g>
      <path
        d="M76.334,96.00294A25.48209,25.48209,0,0,1,75.11111,88c0-22.09139,21.96094-40,52.88889-40,23.77865,0,42.25677,10.58606,49.529,25.52014"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M72,168c0,22.09139,25.07205,40,56,40s56-17.90861,56-40c0-23.76634-21.62275-32.97043-45.59723-40.00076"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </g>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const TextStrikethrough = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TextStrikethrough.displayName = "TextStrikethrough";

export default TextStrikethrough;
