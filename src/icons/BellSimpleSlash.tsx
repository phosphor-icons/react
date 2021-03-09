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
      x1="96"
      y1="227.97925"
      x2="160"
      y2="227.97925"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M182.52658,187.97925H48.98365A7.99908,7.99908,0,0,1,42.103,175.93566c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-4A71.80588,71.80588,0,0,1,68.93752,63.03149"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M99.95187,37.68155a71.42431,71.42431,0,0,1,28.59653-5.70028c39.58967.29432,71.25651,33.20133,71.25651,72.90185v3.09613c0,18.98255,2.10491,33.7424,5.0661,45.11452"
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
      d="M55.99674,104A72.00377,72.00377,0,0,1,128.55,32.002c39.70343.29432,71.46127,33.20133,71.46127,72.90185V112c0,35.81563,7.51478,56.59893,14.13351,67.95814A7.99892,7.99892,0,0,1,207.24334,192H48.75659a7.999,7.999,0,0,1-6.90041-12.04359C48.47844,168.59682,55.99674,147.81381,55.99674,112Z"
      opacity="0.2"
    />
    <line
      x1="48"
      y1="40.02075"
      x2="208"
      y2="216.02075"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.50261,41.40252A71.33429,71.33429,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,26.69367,4.16238,45.03713,9.015,57.35221"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M186.163,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-8A71.80594,71.80594,0,0,1,68.93758,63.05215"
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
    <path d="M213.91992,210.61816a8.0006,8.0006,0,0,1-11.83984,10.76368l-19.45654-21.40235H48.9834A15.99885,15.99885,0,0,1,35.18652,175.915c5.9375-10.21484,13.0166-29.59961,13.0166-63.93555v-8a79.6939,79.6939,0,0,1,10.7212-40.06885L42.08008,45.38184A8.0006,8.0006,0,1,1,53.91992,34.61816ZM160,215.97949H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm42.90039-41.2666a8.0004,8.0004,0,0,0,13.36328-8.31445c-5.61328-14.24414-8.459-32.55274-8.459-54.41895v-7.09668c0-44.28515-35.52735-80.57715-79.19629-80.90136A79.49567,79.49567,0,0,0,88.5332,34.43652,8.00109,8.00109,0,0,0,86.583,46.76367Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="96"
      y1="223.97925"
      x2="160"
      y2="223.97925"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M92.50261,41.38177a71.33429,71.33429,0,0,1,36.04579-9.4005c39.58967.29432,71.25651,33.20133,71.25651,72.90185v7.09613c0,26.69367,4.16238,45.03713,9.015,57.35221"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M186.163,191.97925H48.98365A7.99908,7.99908,0,0,1,42.103,179.93566c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-8A71.806,71.806,0,0,1,68.93758,63.03139"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="96"
      y1="223.97925"
      x2="160"
      y2="223.97925"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M92.50261,41.38177a71.33429,71.33429,0,0,1,36.04579-9.4005c39.58967.29432,71.25651,33.20133,71.25651,72.90185v7.09613c0,26.69367,4.16238,45.03713,9.015,57.35221"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M186.163,191.97925H48.98365A7.99908,7.99908,0,0,1,42.103,179.93566c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-8A71.806,71.806,0,0,1,68.93758,63.03139"
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
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="223.97925"
      x2="160"
      y2="223.97925"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92.50261,41.38177a71.33429,71.33429,0,0,1,36.04579-9.4005c39.58967.29432,71.25651,33.20133,71.25651,72.90185v7.09613c0,26.69367,4.16238,45.03713,9.015,57.35221"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M186.163,191.97925H48.98365A7.99908,7.99908,0,0,1,42.103,179.93566c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-8A71.806,71.806,0,0,1,68.93758,63.03139"
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

const BellSimpleSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BellSimpleSlash.displayName = "BellSimpleSlash";

export default BellSimpleSlash;
