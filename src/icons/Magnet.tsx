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
      d="M127.28929,95.02944a24.00012,24.00012,0,0,1,33.60985-.325c9.693,9.33217,9.46338,25.13406-.0509,34.64834L93.83171,194.34449a8,8,0,0,0-.08742,11.3998L122.3982,234.3982a8,8,0,0,0,11.25812.055l66.46192-65.17456C231.30992,138.087,232.21531,87.284,201.25572,55.862a80.00007,80.00007,0,0,0-113.56441-.43051l-66.103,66.91189a8,8,0,0,0,.03429,11.27921l28.65427,28.65427a8,8,0,0,0,11.37925-.0663Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="126.77456"
      y1="162.39696"
      x2="166.56227"
      y2="202.18467"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="53.95657"
      y1="89.57897"
      x2="93.74372"
      y2="129.36612"
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
      d="M126.77456,162.397l39.78771,39.78771-32.906,32.26858a8,8,0,0,1-11.25812-.055L93.74429,205.74429a8,8,0,0,1,.08742-11.3998Z"
      opacity="0.2"
    />
    <path
      d="M93.74372,129.36612,53.95657,89.579l-32.3683,32.76438a8,8,0,0,0,.03429,11.27921l28.65427,28.65427a8,8,0,0,0,11.37925-.0663Z"
      opacity="0.2"
    />
    <path
      d="M127.28929,95.02944a24.00012,24.00012,0,0,1,33.60985-.325c9.693,9.33217,9.46338,25.13406-.0509,34.64834L93.83171,194.34449a8,8,0,0,0-.08742,11.3998L122.3982,234.3982a8,8,0,0,0,11.25812.055l66.46192-65.17456C231.30992,138.087,232.21531,87.284,201.25572,55.862a80.00007,80.00007,0,0,0-113.56441-.43051l-66.103,66.91189a8,8,0,0,0,.03429,11.27921l28.65427,28.65427a8,8,0,0,0,11.37925-.0663Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="126.77456"
      y1="162.39696"
      x2="166.56227"
      y2="202.18467"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="53.95657"
      y1="89.57897"
      x2="93.74372"
      y2="129.36612"
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
    <path d="M206.9541,50.24707A87.40283,87.40283,0,0,0,144.58789,24.001C144.47461,24,144.36426,24,144.252,24A87.41952,87.41952,0,0,0,82,49.80957L48.30078,83.92084l-.001.001-.00146.00147L15.89746,116.7207a16.03806,16.03806,0,0,0,.06836,22.55957l28.65332,28.65332a15.889,15.889,0,0,0,11.3125,4.68653h.0957a15.88936,15.88936,0,0,0,11.35157-4.81836l32.0205-32.77661.002-.00171.00293-.003,33.57226-34.36518a16.07987,16.07987,0,0,1,22.374-.18847,15.58821,15.58821,0,0,1,4.72558,11.19629,16.88015,16.88015,0,0,1-4.84472,11.99316l-34.10694,33.07623-.00732.00678-.00391.004L88.2627,188.60156a15.99983,15.99983,0,0,0-.17579,22.79981l28.6543,28.65429a16.052,16.052,0,0,0,22.5166.10938l32.957-32.31885.00489-.00439.00293-.0033,33.55273-32.903C240.22363,140.48633,240.75293,84.55176,206.9541,50.24707ZM55.93359,156.61914,27.2793,127.96582l26.71191-27.03827L82.49512,129.4314Zm72.12207,72.12207L99.40137,200.08789l27.28711-26.46283,28.50439,28.50421Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M127.28929,95.02944a24.00012,24.00012,0,0,1,33.60985-.325c9.693,9.33217,9.46338,25.13406-.0509,34.64834L93.83171,194.34449a8,8,0,0,0-.08742,11.3998L122.3982,234.3982a8,8,0,0,0,11.25812.055l66.46192-65.17456C231.30992,138.087,232.21531,87.284,201.25572,55.862a80.00007,80.00007,0,0,0-113.56441-.43051l-66.103,66.91189a8,8,0,0,0,.03429,11.27921l28.65427,28.65427a8,8,0,0,0,11.37925-.0663Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="126.77456"
      y1="162.39696"
      x2="166.56227"
      y2="202.18467"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="53.95657"
      y1="89.57897"
      x2="93.74372"
      y2="129.36612"
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
      d="M127.28929,95.02944a24.00012,24.00012,0,0,1,33.60985-.325c9.693,9.33217,9.46338,25.13406-.0509,34.64834L93.83171,194.34449a8,8,0,0,0-.08742,11.3998L122.3982,234.3982a8,8,0,0,0,11.25812.055l66.46192-65.17456C231.30992,138.087,232.21531,87.284,201.25572,55.862a80.00007,80.00007,0,0,0-113.56441-.43051l-66.103,66.91189a8,8,0,0,0,.03429,11.27921l28.65427,28.65427a8,8,0,0,0,11.37925-.0663Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="126.77456"
      y1="162.39696"
      x2="166.56227"
      y2="202.18467"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="53.95657"
      y1="89.57897"
      x2="93.74372"
      y2="129.36612"
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
      d="M127.28929,95.02944a24.00012,24.00012,0,0,1,33.60985-.325c9.693,9.33217,9.46338,25.13406-.0509,34.64834L93.83171,194.34449a8,8,0,0,0-.08742,11.3998L122.3982,234.3982a8,8,0,0,0,11.25812.055l66.46192-65.17456C231.30992,138.087,232.21531,87.284,201.25572,55.862a80.00007,80.00007,0,0,0-113.56441-.43051l-66.103,66.91189a8,8,0,0,0,.03429,11.27921l28.65427,28.65427a8,8,0,0,0,11.37925-.0663Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="126.77456"
      y1="162.39696"
      x2="166.56227"
      y2="202.18467"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="53.95657"
      y1="89.57897"
      x2="93.74372"
      y2="129.36612"
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

const Magnet = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Magnet.displayName = "Magnet";

export default Magnet;
