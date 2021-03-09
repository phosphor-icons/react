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
    <polyline
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
    <polyline
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
    <path d="M195.88281,60.11768a96.10959,96.10959,0,0,0-135.76562,0L39.833,80.40186v-28.686a8,8,0,0,0-16,0V99.71069a7.97366,7.97366,0,0,0,.04.79706c.01049.10773.03125.21222.0459.31867.02124.15216.03955.30456.06958.45544.02514.12622.06005.24841.09082.37244.03222.12921.06079.259.09936.38678.03711.12243.0835.2406.12622.36047.04517.12659.08692.25385.13843.37848.04614.111.10059.21728.15137.32568.06006.12867.11743.25806.18481.384.05518.10278.11817.20031.17749.30035.07373.124.144.24921.22485.36993.07349.10968.15528.21259.23389.3183.07715.10358.14917.20947.23194.31006.14868.18091.30688.35321.47045.52032.02.0207.03711.0434.05762.06391.01611.01611.03394.02936.05.04529.17163.16882.34961.33123.53589.48413.094.07715.19311.14428.28955.21655.11255.08423.22266.17145.33984.24976.113.07568.23047.14123.34644.21051.10815.06463.21411.1325.32544.1922.1167.06237.23681.11523.356.17144.11767.05579.23364.11444.35449.16455.11377.047.22973.08478.345.12629.1311.04736.2605.09747.39477.13806.11377.03436.2295.05939.34449.08862.13769.035.27392.07337.4143.10114.13037.02581.26221.04077.39356.06005.127.01862.252.04236.38086.05494.23193.02282.46508.03271.69824.03527.02978.00031.05859.00446.08838.00446h48a8,8,0,0,0,0-16H51.147L71.43164,71.43115a79.99992,79.99992,0,1,1,0,113.13721,8.00052,8.00052,0,0,0-11.31445,11.31445A96.00062,96.00062,0,1,0,195.88281,60.11768Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
    <polyline
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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
    <polyline
      points="79.833 99.716 31.833 99.716 31.833 51.716"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.7746,190.2254a88,88,0,1,0,0-124.4508L31.83348,99.71573"
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

const ArrowCounterClockwise = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

ArrowCounterClockwise.displayName = "ArrowCounterClockwise";

export default ArrowCounterClockwise;
