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
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M196.09521,128a195.65007,195.65007,0,0,0,19.2002-32.71777c11.07715-24.61524,11.21436-44.13575.38574-54.96387C198.23242,22.87354,162.541,35.40918,128,60.00342,93.45947,35.40869,57.76758,22.87256,40.31885,40.31836,29.49023,51.14648,29.62744,70.667,40.70459,95.28223A195.65007,195.65007,0,0,0,59.90479,128a195.65007,195.65007,0,0,0-19.2002,32.71777c-11.07715,24.61524-11.21436,44.13575-.38574,54.96387,5.61767,5.61719,13.12549,8.127,21.87842,8.127,18.4331,0,42.38232-11.1394,65.80273-27.81616,23.42041,16.677,47.36914,27.81616,65.80273,27.81616,8.75,0,16.26172-2.51074,21.87842-8.127,10.82862-10.82812,10.69141-30.34863-.38574-54.96387A195.65007,195.65007,0,0,0,196.09521,128Zm-2.31982-79.7002c4.77539,0,8.39453,1.13575,10.59229,3.333,5.62451,5.624,4.25537,19.48731-3.66309,37.084a172.9306,172.9306,0,0,1-14.79053,25.93188,306.72561,306.72561,0,0,0-21.14453-23.41821,300.50739,300.50739,0,0,0-23.48389-21.13184C163.18457,55.21191,182.00049,48.2998,193.77539,48.2998ZM176.12061,128a288.40831,288.40831,0,0,1-22.66456,25.45508,288.63877,288.63877,0,0,1-25.45459,22.69873A288.50733,288.50733,0,0,1,102.544,153.45508,288.40831,288.40831,0,0,1,79.87939,128,296.26257,296.26257,0,0,1,128,79.84717a288.52058,288.52058,0,0,1,25.45605,22.69775A288.40831,288.40831,0,0,1,176.12061,128ZM55.29541,88.7168c-7.91846-17.59668-9.2876-31.46-3.66309-37.084,2.19776-2.19824,5.815-3.333,10.59229-3.333,11.77539,0,30.59131,6.91285,52.48975,21.79908A300.45376,300.45376,0,0,0,91.23047,91.23047a306.72561,306.72561,0,0,0-21.14453,23.41821A172.9306,172.9306,0,0,1,55.29541,88.7168ZM51.63232,204.36719c-5.62451-5.624-4.25537-19.48731,3.66309-37.084a172.9306,172.9306,0,0,1,14.79053-25.93188,306.72561,306.72561,0,0,0,21.14453,23.41821,300.52025,300.52025,0,0,0,23.4917,21.13233C83.93555,206.83276,59.249,211.98193,51.63232,204.36719Zm152.73536,0c-2.19776,2.19824-5.815,3.333-10.59229,3.333-11.77588-.00123-30.59326-6.91456-52.49316-21.80176a300.51532,300.51532,0,0,0,23.4873-21.12891,306.72561,306.72561,0,0,0,21.14453-23.41821,172.9306,172.9306,0,0,1,14.79053,25.93188C208.62305,184.87988,209.99219,198.74316,204.36768,204.36719ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="128" cy="128" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Atom = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Atom.displayName = "Atom";

export default Atom;
