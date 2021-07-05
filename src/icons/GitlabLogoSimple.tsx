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
      d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
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
      d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
      opacity="0.2"
    />
    <path
      d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
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
    <path d="M231.92773,169.78029l-94.82031,65.64454a16.07612,16.07612,0,0,1-18.21484,0L24.07227,169.78029a16.03981,16.03981,0,0,1-6.35254-17.27783L45.04883,50.0176a12.00012,12.00012,0,0,1,22.831-1.12109L88.544,104h78.9121l20.66407-55.10449a12.00021,12.00021,0,0,1,22.83056,1.12109l27.32959,102.48584A16.03981,16.03981,0,0,1,231.92773,169.78029Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
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
      d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
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
      d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
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

const GitlabLogoSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GitlabLogoSimple.displayName = "GitlabLogoSimple";

export default GitlabLogoSimple;
