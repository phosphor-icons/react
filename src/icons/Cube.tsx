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
    <path
      d="M224,177.32117V78.67873a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67873v98.64244a8,8,0,0,0,4.07791,6.97261l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32117Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="222.897 74.626 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128.94915"
      y1="127.99996"
      x2="128.01036"
      y2="234.82127"
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
      d="M33.10781,74.617A7.99478,7.99478,0,0,0,32,78.67873v98.64244a8,8,0,0,0,4.07791,6.97261l88,49.5A7.99527,7.99527,0,0,0,128,234.82117l.01036.0001L128.94915,128,33.108,74.61709Z"
      opacity="0.2"
    />
    <path
      d="M224,177.32117V78.67873a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67873v98.64244a8,8,0,0,0,4.07791,6.97261l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32117Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="222.897 74.626 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.94915"
      y1="127.99996"
      x2="128.01036"
      y2="234.82127"
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
    <path d="M229.92236,70.81226c-.0249-.04541-.04345-.09229-.06933-.13746-.01123-.01953-.02442-.03662-.03565-.0559a15.989,15.989,0,0,0-5.97314-5.8855l-88-49.5a16.09272,16.09272,0,0,0-15.68848,0l-88,49.5A15.99092,15.99092,0,0,0,26.168,70.64575c-.01563.0271-.03369.05127-.04883.07862-.02441.0437-.042.08886-.06543.13256A15.98294,15.98294,0,0,0,24,78.67871v98.64258a16.02048,16.02048,0,0,0,8.15576,13.94531l88.00049,49.5a15.97122,15.97122,0,0,0,7.24463,2.02222c.17871.01343.35693.03052.53906.032.02393.00049.04785.00049.07178.00049.25146,0,.499-.01465.74463-.03735a15.97135,15.97135,0,0,0,7.08789-2.01734l88-49.5A16.02048,16.02048,0,0,0,232,177.32129V78.67871A15.98584,15.98584,0,0,0,229.92236,70.81226ZM128.91016,118.821,48.37891,73.96558,128,29.17871l79.74365,44.856ZM216,177.32129l-79.87891,44.93188.78711-89.57421L216,87.74561Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M224,177.32117V78.67873a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67873v98.64244a8,8,0,0,0,4.07791,6.97261l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32117Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="222.897 74.626 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128.94915"
      y1="127.99996"
      x2="128.01036"
      y2="234.82127"
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
    <path
      d="M224,177.32117V78.67873a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67873v98.64244a8,8,0,0,0,4.07791,6.97261l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32117Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="222.897 74.626 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128.94915"
      y1="127.99996"
      x2="128.01036"
      y2="234.82127"
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
    <path
      d="M224,177.32117V78.67873a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67873v98.64244a8,8,0,0,0,4.07791,6.97261l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32117Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="222.897 74.626 128.949 128 33.108 74.617"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.94915"
      y1="127.99996"
      x2="128.01036"
      y2="234.82127"
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

const Cube = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Cube.displayName = "Cube";

export default Cube;
