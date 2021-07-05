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
      x1="201.14971"
      y1="127.30467"
      x2="223.95961"
      y2="166.81257"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="154.18201"
      y1="149.26298"
      x2="161.29573"
      y2="189.60689"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="101.72972"
      y1="149.24366"
      x2="94.61483"
      y2="189.59423"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="54.80859"
      y1="127.27241"
      x2="31.88882"
      y2="166.97062"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468"
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
    <line
      x1="201.14971"
      y1="127.30467"
      x2="223.95961"
      y2="166.81257"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="154.18201"
      y1="149.26298"
      x2="161.29573"
      y2="189.60689"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="101.72972"
      y1="149.24366"
      x2="94.61483"
      y2="189.59423"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="54.80859"
      y1="127.27241"
      x2="31.88882"
      y2="166.97062"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468"
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
    <path d="M211.50122,129.23535a147.78919,147.78919,0,0,0,18.72144-19.333,7.99973,7.99973,0,0,0-12.44532-10.05468,128.72532,128.72532,0,0,1-21.28466,20.9541c-.05372.03808-.103.08008-.15528.11963A109.58952,109.58952,0,0,1,128,144a109.59068,109.59068,0,0,1-68.35156-23.08887c-.061-.04638-.11841-.0957-.18115-.14062A128.70627,128.70627,0,0,1,38.22168,99.84766a7.99972,7.99972,0,1,0-12.44531,10.05468,147.761,147.761,0,0,0,18.68188,19.29834l-19.49731,33.77a7.99959,7.99959,0,1,0,13.85547,8l18.49-32.02539a123.57956,123.57956,0,0,0,35.24438,16.28174l-5.81445,32.978a8.00124,8.00124,0,0,0,6.49023,9.26758,8.12,8.12,0,0,0,1.39844.12207,8.00272,8.00272,0,0,0,7.86914-6.61231l5.71729-32.42724a136.26072,136.26072,0,0,0,39.4873.01367l5.71826,32.42724a8.00278,8.00278,0,0,0,7.86914,6.61133,8.13106,8.13106,0,0,0,1.39942-.12207,8.00173,8.00173,0,0,0,6.48925-9.26855l-5.813-32.96436a123.56028,123.56028,0,0,0,35.28808-16.27832l18.38233,31.83838a7.99959,7.99959,0,0,0,13.85547-8Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="201.14971"
      y1="127.30467"
      x2="223.95961"
      y2="166.81257"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="154.18201"
      y1="149.26298"
      x2="161.29573"
      y2="189.60689"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="101.72972"
      y1="149.24366"
      x2="94.61483"
      y2="189.59423"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="54.80859"
      y1="127.27241"
      x2="31.88882"
      y2="166.97062"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468"
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
      x1="201.14971"
      y1="127.30467"
      x2="223.95961"
      y2="166.81257"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="154.18201"
      y1="149.26298"
      x2="161.29573"
      y2="189.60689"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="101.72972"
      y1="149.24366"
      x2="94.61483"
      y2="189.59423"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="54.80859"
      y1="127.27241"
      x2="31.88882"
      y2="166.97062"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468"
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
      x1="201.14971"
      y1="127.30467"
      x2="223.95961"
      y2="166.81257"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="154.18201"
      y1="149.26298"
      x2="161.29573"
      y2="189.60689"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="101.72972"
      y1="149.24366"
      x2="94.61483"
      y2="189.59423"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="54.80859"
      y1="127.27241"
      x2="31.88882"
      y2="166.97062"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468"
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

const EyeClosed = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

EyeClosed.displayName = "EyeClosed";

export default EyeClosed;
