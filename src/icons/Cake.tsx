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
      d="M128,88c56-24,0-76,0-76S72,64,128,88Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M94,126a34.0002,34.0002,0,0,1-33.337,33.99366C41.60193,160.35824,26,144.393,26,125.32842V112A24,24,0,0,1,50,88H206a24,24,0,0,1,24,24v13.32842c0,19.06459-15.60193,35.02982-34.663,34.66524A34.0002,34.0002,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M216,153.26948V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.26978"
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
      d="M162,126a34,34,0,0,1-68,0,34.0002,34.0002,0,0,1-33.337,33.99366C41.60193,160.35824,26,144.393,26,125.32842V112A24,24,0,0,1,50,88H206a24,24,0,0,1,24,24v13.32842c0,19.06459-15.60193,35.02982-34.663,34.66524A34.0002,34.0002,0,0,1,162,126Z"
      opacity="0.2"
    />
    <path d="M128,64c46.22222-16,0-56,0-56S80,48,128,64Z" opacity="0.2" />
    <line
      x1="128"
      y1="88"
      x2="128"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,64c46.22222-16,0-56,0-56S80,48,128,64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M94,126a34.0002,34.0002,0,0,1-33.337,33.99366C41.60193,160.35824,26,144.393,26,125.32842V112A24,24,0,0,1,50,88H206a24,24,0,0,1,24,24v13.32842c0,19.06459-15.60193,35.02982-34.663,34.66524A34.0002,34.0002,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,153.26948V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.26978"
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
    <path d="M206,80H136V69.439c11.49683-5.13232,18.2417-12.52441,20.07031-22.03027,4.11914-21.41113-20.06445-43.06006-22.835-45.458a7.99935,7.99935,0,0,0-10.35644-.09619c-2.85938,2.38184-27.81446,23.895-23.76661,45.34717,1.82349,9.6665,8.84131,17.15674,20.8877,22.31885V80H50a32.03635,32.03635,0,0,0-32,32v13.32812A43.21843,43.21843,0,0,0,30.90918,155.9834c.35693.35058.72461.68408,1.09082,1.02V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V157.00439c.36646-.33593.73389-.67041,1.09082-1.021A43.21843,43.21843,0,0,0,238,125.32812V112A32.03635,32.03635,0,0,0,206,80Zm2,128H48V166.20312a41.105,41.105,0,0,0,12.81641,1.78907,42.04634,42.04634,0,0,0,33.15014-17.42432,41.9385,41.9385,0,0,0,68.0669,0,42.04634,42.04634,0,0,0,33.15014,17.42432q.40137.00732.80079.00781A41.06205,41.06205,0,0,0,208,166.209Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="88"
      x2="128"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M128,64c46.22222-16,0-56,0-56S80,48,128,64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M94,126a34.0002,34.0002,0,0,1-33.337,33.99366C41.60193,160.35824,26,144.393,26,125.32842V112A24,24,0,0,1,50,88H206a24,24,0,0,1,24,24v13.32842c0,19.06459-15.60193,35.02982-34.663,34.66524A34.0002,34.0002,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M216,153.26948V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.26978"
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
      x1="128"
      y1="88"
      x2="128"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M128,64c46.22222-16,0-56,0-56S80,48,128,64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M94,126a34.0002,34.0002,0,0,1-33.337,33.99366C41.60193,160.35824,26,144.393,26,125.32842V112A24,24,0,0,1,50,88H206a24,24,0,0,1,24,24v13.32842c0,19.06459-15.60193,35.02982-34.663,34.66524A34.0002,34.0002,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M216,153.26948V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.26978"
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
      x1="128"
      y1="88"
      x2="128"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M128,64c46.22222-16,0-56,0-56S80,48,128,64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M162,126a34,34,0,0,1-68,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M94,126a34.0002,34.0002,0,0,1-33.337,33.99366C41.60193,160.35824,26,144.393,26,125.32842V112A24,24,0,0,1,50,88H206a24,24,0,0,1,24,24v13.32842c0,19.06459-15.60193,35.02982-34.663,34.66524A34.0002,34.0002,0,0,1,162,126"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M216,153.26948V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.26978"
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

const Cake = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Cake.displayName = "Cake";

export default Cake;
