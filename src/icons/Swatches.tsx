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
      d="M36.67036,173.04838,60.85763,35.87558a8,8,0,0,1,9.26764-6.48928l55.14924,9.7243a8,8,0,0,1,6.48927,9.26765L107.453,186.25133a36.00022,36.00022,0,0,1-41.01188,29.317C46.4984,212.4439,33.16509,192.92775,36.67036,173.04838Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M118.28071,124.84457,191.244,98.2881a8,8,0,0,1,10.2537,4.78138l19.15313,52.62278a8,8,0,0,1-4.78138,10.25371l-131.557,47.88282"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M219.99977,162.53273v45.467a8,8,0,0,1-8,8h-140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="72"
      y1="180"
      x2="74.08378"
      y2="168.18231"
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
    <g opacity="0.2">
      <path d="M36.67036,173.04838,60.85763,35.87558a8,8,0,0,1,9.26764-6.48928l55.14924,9.7243a8,8,0,0,1,6.48927,9.26765L107.453,186.25133a36.00022,36.00022,0,0,1-41.01188,29.317C46.4984,212.4439,33.16509,192.92775,36.67036,173.04838Z" />
    </g>
    <path
      d="M36.67036,173.04838,60.85763,35.87558a8,8,0,0,1,9.26764-6.48928l55.14924,9.7243a8,8,0,0,1,6.48927,9.26765L107.453,186.25133a36.00022,36.00022,0,0,1-41.01188,29.317C46.4984,212.4439,33.16509,192.92775,36.67036,173.04838Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M118.28071,124.84457,191.244,98.2881a8,8,0,0,1,10.2537,4.78138l19.15313,52.62278a8,8,0,0,1-4.78138,10.25371l-131.557,47.88282"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M219.99977,162.53273v45.467a8,8,0,0,1-8,8h-140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="72" cy="180" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M228.16846,152.95605,209.01514,100.334a16.0165,16.0165,0,0,0-20.50733-9.56347l-59.94262,21.81738,11.0769-62.82031a16.00057,16.00057,0,0,0-12.97852-18.53613L71.51514,21.50879A15.99894,15.99894,0,0,0,52.979,34.48633L28.792,171.65918a45.288,45.288,0,0,0,7.74365,33.9834A43.299,43.299,0,0,0,71.937,223.99707h.00342c.02014,0,.03955.00293.05957.00293H212a16.01833,16.01833,0,0,0,16-16V164.27759A15.91483,15.91483,0,0,0,228.16846,152.95605ZM72,192a12,12,0,1,1,12-12A12.01343,12.01343,0,0,1,72,192Zm140,16H123.71875L212,175.86841Zm-98.54736-13.29053a43.46748,43.46748,0,0,0,1.8789-7.06885l10.02552-56.85791L193.98,105.80566l19.15332,52.623Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M36.67036,173.04838,60.85763,35.87558a8,8,0,0,1,9.26764-6.48928l55.14924,9.7243a8,8,0,0,1,6.48927,9.26765L107.453,186.25133a36.00022,36.00022,0,0,1-41.01188,29.317C46.4984,212.4439,33.16509,192.92775,36.67036,173.04838Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M118.28071,124.84457,191.244,98.2881a8,8,0,0,1,10.2537,4.78138l19.15313,52.62278a8,8,0,0,1-4.78138,10.25371l-131.557,47.88282"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M219.99977,162.53273v45.467a8,8,0,0,1-8,8h-140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="72" cy="180" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M36.67036,173.04838,60.85763,35.87558a8,8,0,0,1,9.26764-6.48928l55.14924,9.7243a8,8,0,0,1,6.48927,9.26765L107.453,186.25133a36.00022,36.00022,0,0,1-41.01188,29.317C46.4984,212.4439,33.16509,192.92775,36.67036,173.04838Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M118.28071,124.84457,191.244,98.2881a8,8,0,0,1,10.2537,4.78138l19.15313,52.62278a8,8,0,0,1-4.78138,10.25371l-131.557,47.88282"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M219.99977,162.53273v45.467a8,8,0,0,1-8,8h-140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="72" cy="180" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M36.67036,173.04838,60.85763,35.87558a8,8,0,0,1,9.26764-6.48928l55.14924,9.7243a8,8,0,0,1,6.48927,9.26765L107.453,186.25133a36.00022,36.00022,0,0,1-41.01188,29.317C46.4984,212.4439,33.16509,192.92775,36.67036,173.04838Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M118.28071,124.84457,191.244,98.2881a8,8,0,0,1,10.2537,4.78138l19.15313,52.62278a8,8,0,0,1-4.78138,10.25371l-131.557,47.88282"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M219.99977,162.53273v45.467a8,8,0,0,1-8,8h-140"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="72" cy="180" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Swatches = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Swatches.displayName = "Swatches";

export default Swatches;
