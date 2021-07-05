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
    <g>
      <line
        x1="128.65903"
        y1="230.2426"
        x2="173"
        y2="112.00002"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <polyline
        points="83 112 83 112 127.341 230.243"
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
    <path
      d="M127.341,230.2426,83,112h90L128.659,230.2426l0,.0002a8.017,8.017,0,0,1-1.3181,0Z"
      opacity="0.2"
    />
    <path
      d="M219.2,112l-15.979-59.9214a4,4,0,0,0-7.61026-.37384L173,112Z"
      opacity="0.2"
    />
    <path
      d="M36.8,112l15.979-59.9214a4,4,0,0,1,7.61026-.37384L83,112H36.8Z"
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
    <polyline
      points="128.659 230.243 173 112 219.2 112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="36.8 112 83 112 83 112 127.341 230.243"
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
    <path d="M238.28027,152.50246,210.95068,50.01662a12.00021,12.00021,0,0,0-22.83056-1.12109L167.45605,104H88.544L67.87988,48.89651a12.00012,12.00012,0,0,0-22.831,1.12109L17.71973,152.50246a16.03981,16.03981,0,0,0,6.35254,17.27783l94.82031,65.64454a15.91589,15.91589,0,0,0,7.093,2.69336c.22131.03808.44567.05517.67065.0747.09387.00781.1875.01514.28149.02149.13526.00683.26807.03076.40406.03076.06445,0,.12939-.00733.19409-.00879.15478.00439.30932.01709.46411.01709s.30933-.0127.46411-.01709c.0647.00146.12964.00879.19409.00879.13587,0,.26831-.02393.40345-.03076q.1419-.00952.2832-.02149c.22436-.02.44812-.03662.66882-.0747a15.91868,15.91868,0,0,0,7.09375-2.69336l94.82031-65.64454A16.03981,16.03981,0,0,0,238.28027,152.50246ZM33.17969,156.625,42.94617,120H77.45605l34.07544,90.86865Zm111.28882,54.24365L178.544,120h34.50988l9.76648,36.625Z" />
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
    <g>
      <polyline
        points="128.659 230.243 173 112 219.2 112"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <polyline
        points="36.8 112 83 112 83 112 127.341 230.243"
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
    <path
      d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <g>
      <polyline
        points="128.659 230.243 173 112 219.2 112"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <polyline
        points="36.8 112 83 112 83 112 127.341 230.243"
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
    <path
      d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <g>
      <polyline
        points="128.659 230.243 173 112 219.2 112"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <polyline
        points="36.8 112 83 112 83 112 127.341 230.243"
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

const GitlabLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GitlabLogo.displayName = "GitlabLogo";

export default GitlabLogo;
