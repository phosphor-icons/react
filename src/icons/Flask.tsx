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
    <path
      d="M104,32V93.78413a7.99992,7.99992,0,0,1-1.14006,4.116L39.26958,203.884A8,8,0,0,0,46.12952,216h163.741a8,8,0,0,0,6.85994-12.116L153.14006,97.90009A7.99992,7.99992,0,0,1,152,93.78413V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M62.61682,164.96456C74.44058,156.34675,94.73752,151.36876,128,168c35.70432,17.85216,56.4696,10.80591,67.852,1.08577"
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
      d="M104,32V93.78413a7.99992,7.99992,0,0,1-1.14006,4.116L39.26958,203.884A8,8,0,0,0,46.12952,216h163.741a8,8,0,0,0,6.85994-12.116L153.14006,97.90009A7.99992,7.99992,0,0,1,152,93.78413V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M62.61682,164.96456C74.44058,156.34675,94.73752,151.36876,128,168c35.70432,17.85216,56.4696,10.80591,67.852,1.08577"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M62.62009,164.96652,39.26958,203.884A8,8,0,0,0,46.12952,216h163.741a8,8,0,0,0,6.85994-12.116l-20.87883-34.798.00037-.00022C184.4696,178.80591,163.70432,185.85216,128,168c-33.26248-16.63124-53.55942-11.65325-65.38318-3.03544Z"
      opacity="0.2"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M223.59033,199.76855,160,93.78418V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V93.78418l-40.17285,66.955c-.044.07067-.08643.1416-.12793.2135L32.40967,199.76807A15.99968,15.99968,0,0,0,46.12988,224H209.87012a15.99944,15.99944,0,0,0,13.72021-24.23145Zm-113.87109-97.752A15.99829,15.99829,0,0,0,112,93.78418V40h32V93.78418a15.99947,15.99947,0,0,0,2.28027,8.23193l38.86328,64.77222c-13.10742,7.11157-31.4458,5.11572-53.56591-5.9436-14.25293-7.127-32.667-13.52124-50.31055-11.4076Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M104,32V93.78413a7.99992,7.99992,0,0,1-1.14006,4.116L39.26958,203.884A8,8,0,0,0,46.12952,216h163.741a8,8,0,0,0,6.85994-12.116L153.14006,97.90009A7.99992,7.99992,0,0,1,152,93.78413V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M62.61682,164.96456C74.44058,156.34675,94.73752,151.36876,128,168c35.70432,17.85216,56.4696,10.80591,67.852,1.08577"
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
      d="M104,32V93.78413a7.99992,7.99992,0,0,1-1.14006,4.116L39.26958,203.884A8,8,0,0,0,46.12952,216h163.741a8,8,0,0,0,6.85994-12.116L153.14006,97.90009A7.99992,7.99992,0,0,1,152,93.78413V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M62.61682,164.96456C74.44058,156.34675,94.73752,151.36876,128,168c35.70432,17.85216,56.4696,10.80591,67.852,1.08577"
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
      d="M104,32V93.78413a7.99992,7.99992,0,0,1-1.14006,4.116L39.26958,203.884A8,8,0,0,0,46.12952,216h163.741a8,8,0,0,0,6.85994-12.116L153.14006,97.90009A7.99992,7.99992,0,0,1,152,93.78413V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="32"
      x2="168"
      y2="32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M62.61682,164.96456C74.44058,156.34675,94.73752,151.36876,128,168c35.70432,17.85216,56.4696,10.80591,67.852,1.08577"
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

const Flask = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Flask.displayName = "Flask";

export default Flask;
