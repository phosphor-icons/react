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
      d="M56.20305,112a71.80121,71.80121,0,1,1,143.60186,0h0c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M96,192v8a32,32,0,0,0,64,0v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M187.6965,17.21819a112.5022,112.5022,0,0,1,40.83526,45.35527"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M27.46825,62.57344A112.50227,112.50227,0,0,1,68.30353,17.21816"
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
      d="M56.20305,112a71.80121,71.80121,0,1,1,143.60186,0h0c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z"
      opacity="0.2"
    />
    <path
      d="M56.20305,112a71.80121,71.80121,0,1,1,143.60186,0h0c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,192v8a32,32,0,0,0,64,0v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.43247,23.98832a104.46641,104.46641,0,0,1,37.91845,42.1156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M34.64909,66.10391A104.46639,104.46639,0,0,1,72.56757,23.98829"
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
    <path d="M207.80469,112A79.70738,79.70738,0,0,0,128.6084,32.002c-.2041-.001-.40625-.002-.61035-.002a79.89888,79.89888,0,0,0-79.79492,80c0,34.33594-7.07911,53.7207-13.01661,63.93555A15.99886,15.99886,0,0,0,48.9834,200H88a40,40,0,0,0,80,0h39.0166a15.99808,15.99808,0,0,0,13.79785-24.06055C214.87988,165.72363,207.80469,146.33789,207.80469,112ZM128,224a24.0275,24.0275,0,0,1-24-24h48A24.0275,24.0275,0,0,1,128,224ZM224.88574,73.28027a7.995,7.995,0,0,1-10.71191-3.6416,96.29849,96.29849,0,0,0-35.01074-38.88574,7.9996,7.9996,0,1,1,8.54-13.5293,112.28362,112.28362,0,0,1,40.82421,45.34473A8,8,0,0,1,224.88574,73.28027Zm-190.24219.8252a8.00344,8.00344,0,0,1-7.17089-11.53711A112.28357,112.28357,0,0,1,68.29688,17.22363a7.99959,7.99959,0,1,1,8.54,13.5293A96.29849,96.29849,0,0,0,41.82617,69.63867,8.002,8.002,0,0,1,34.64355,74.10547Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M56.20305,112a71.80121,71.80121,0,1,1,143.60186,0h0c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M96,192v8a32,32,0,0,0,64,0v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M183.43247,23.98832a104.46641,104.46641,0,0,1,37.91845,42.1156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M34.64909,66.10391A104.46639,104.46639,0,0,1,72.56757,23.98829"
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
      d="M56.20305,112a71.80121,71.80121,0,1,1,143.60186,0h0c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M96,192v8a32,32,0,0,0,64,0v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M183.43247,23.98832a104.46641,104.46641,0,0,1,37.91845,42.1156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M34.64909,66.10391A104.46639,104.46639,0,0,1,72.56757,23.98829"
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
      d="M56.20305,112a71.80121,71.80121,0,1,1,143.60186,0h0c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,192v8a32,32,0,0,0,64,0v-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.43247,23.98832a104.46641,104.46641,0,0,1,37.91845,42.1156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M34.64909,66.10391A104.46639,104.46639,0,0,1,72.56757,23.98829"
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

const BellRinging = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

BellRinging.displayName = "BellRinging";

export default BellRinging;
