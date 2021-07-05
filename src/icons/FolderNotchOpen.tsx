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
      d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M32,208l29.93872-71.10446A8,8,0,0,1,69.3118,132h48.266a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,116h82.32506a8,8,0,0,1,7.556,10.62816L208,208Z"
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
      d="M69.416,128h48.16162a8.00257,8.00257,0,0,0,4.438-1.34375l19.96876-13.3125A8.00257,8.00257,0,0,1,146.42236,112H208V88a7.99977,7.99977,0,0,0-8-8H130.6665a7.9995,7.9995,0,0,1-4.7998-1.6001L98.1333,57.6001A7.9995,7.9995,0,0,0,93.3335,56H40a7.99977,7.99977,0,0,0-8,8V208l29.98828-74.97119A8.00025,8.00025,0,0,1,69.416,128Z"
      opacity="0.2"
    />
    <path
      d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,208l29.98845-74.97113A8,8,0,0,1,69.41626,128h48.16153a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,112h82.47838a8,8,0,0,1,7.58947,10.52982L208,208Z"
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
    <path d="M241.88037,110.64453A16.03934,16.03934,0,0,0,228.90039,104H216V88a16.01833,16.01833,0,0,0-16-16H130.667l-27.7334-20.7998A16.10323,16.10323,0,0,0,93.333,48H40A16.01833,16.01833,0,0,0,24,64V208a8.06184,8.06184,0,0,0,.04541.8457c.00293.02735.00928.0542.0127.08155a7.86829,7.86829,0,0,0,.13818.81543c.01562.07226.03711.14306.05517.21484.05665.22559.12159.44775.19727.665.02734.07812.05566.15527.08545.23242q.126.33033.28076.64551c.03076.064.05908.12842.09229.1914a7.98135,7.98135,0,0,0,1.01318,1.49952c.06055.07129.12451.13769.1875.20654.14063.15381.28662.30176.43945.44434.07276.06787.145.13525.22022.20068.17187.14844.3501.28808.53418.42187.05469.04.10693.084.16308.12207a7.91673,7.91673,0,0,0,.77246.47168c.0254.01368.05225.02442.07764.0376a7.86248,7.86248,0,0,0,.73779.33594c.07129.02832.14405.05322.2168.07959q.31715.11572.64649.20459c.085.023.16894.04541.25439.06543.21875.05127.44092.09131.666.124.08154.01221.16259.02783.24462.0376A8.04614,8.04614,0,0,0,32,216H208a8.00117,8.00117,0,0,0,7.58984-5.47021l28.48926-85.47022A16.03873,16.03873,0,0,0,241.88037,110.64453ZM93.333,64l27.7334,20.7998A16.10323,16.10323,0,0,0,130.667,88H200v16H146.42188a15.9479,15.9479,0,0,0-8.875,2.6875L117.57812,120H69.416a15.92344,15.92344,0,0,0-14.85547,10.05762L40,166.45947V64Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M32,208l29.98845-74.97113A8,8,0,0,1,69.41626,128h48.16153a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,112h82.47838a8,8,0,0,1,7.58947,10.52982L208,208Z"
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
      d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M32,208l29.98845-74.97113A8,8,0,0,1,69.41626,128h48.16153a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,112h82.47838a8,8,0,0,1,7.58947,10.52982L208,208Z"
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
      d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,208l29.98845-74.97113A8,8,0,0,1,69.41626,128h48.16153a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,112h82.47838a8,8,0,0,1,7.58947,10.52982L208,208Z"
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

const FolderNotchOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FolderNotchOpen.displayName = "FolderNotchOpen";

export default FolderNotchOpen;
