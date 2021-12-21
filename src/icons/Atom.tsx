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
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
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
      transform="translate(-53 128) rotate(-45)"
      opacity="0.2"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="128" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M196.1,128a195.3,195.3,0,0,0,19.2-32.7c11.1-24.6,11.2-44.2.4-55C198.2,22.9,162.5,35.4,128,60,93.5,35.4,57.8,22.9,40.3,40.3c-10.8,10.8-10.7,30.4.4,55A195.3,195.3,0,0,0,59.9,128a195.3,195.3,0,0,0-19.2,32.7c-11.1,24.6-11.2,44.2-.4,55,5.6,5.6,13.1,8.1,21.9,8.1,18.4,0,42.4-11.1,65.8-27.8,23.4,16.7,47.4,27.8,65.8,27.8,8.8,0,16.3-2.5,21.9-8.1,10.8-10.8,10.7-30.4-.4-55A195.3,195.3,0,0,0,196.1,128Zm-2.3-79.7c4.8,0,8.4,1.1,10.6,3.3,5.6,5.7,4.2,19.5-3.7,37.1a169.7,169.7,0,0,1-14.8,25.9c-6.4-7.9-13.5-15.7-21.1-23.4s-15.4-14.5-23.5-21.1C163.2,55.2,182,48.3,193.8,48.3ZM176.1,128a277.3,277.3,0,0,1-22.6,25.5A314.1,314.1,0,0,1,128,176.2a314.1,314.1,0,0,1-25.5-22.7A277.3,277.3,0,0,1,79.9,128a277.3,277.3,0,0,1,22.6-25.5A314.1,314.1,0,0,1,128,79.8a314.1,314.1,0,0,1,25.5,22.7A277.3,277.3,0,0,1,176.1,128ZM55.3,88.7C47.4,71.1,46,57.3,51.6,51.6c2.2-2.2,5.8-3.3,10.6-3.3,11.8,0,30.6,6.9,52.5,21.8-8.1,6.6-16,13.7-23.5,21.1s-14.7,15.5-21.1,23.4A169.7,169.7,0,0,1,55.3,88.7ZM51.6,204.4c-5.6-5.7-4.2-19.5,3.7-37.1a169.7,169.7,0,0,1,14.8-25.9c6.4,7.9,13.5,15.7,21.1,23.4s15.4,14.5,23.5,21.1C83.9,206.8,59.2,212,51.6,204.4Zm152.8,0c-2.2,2.2-5.8,3.3-10.6,3.3-11.8,0-30.6-6.9-52.5-21.8,8.1-6.6,16-13.7,23.5-21.1s14.7-15.5,21.1-23.4a169.7,169.7,0,0,1,14.8,25.9C208.6,184.9,210,198.7,204.4,204.4ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <ellipse
      cx="128"
      cy="128"
      rx="44"
      ry="116"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
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
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
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
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="116"
      ry="44"
      transform="translate(-53 128) rotate(-45)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
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
