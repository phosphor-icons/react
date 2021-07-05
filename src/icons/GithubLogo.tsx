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
      d="M84,240a24,24,0,0,0,24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M172,240a24,24,0,0,1-24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,168h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M104,168H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M111.825,63.99934A51.9599,51.9599,0,0,0,68,40a51.90058,51.90058,0,0,0-3.48841,44.7036A49.25789,49.25789,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.25769,49.25769,0,0,0-8.5116-27.29639A51.90061,51.90061,0,0,0,188,40a51.95992,51.95992,0,0,0-43.82535,23.99983Z"
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
      d="M111.825,63.99934A51.9599,51.9599,0,0,0,68,40a51.90058,51.90058,0,0,0-3.48841,44.7036A49.25789,49.25789,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.25769,49.25769,0,0,0-8.5116-27.29639A51.90061,51.90061,0,0,0,188,40a51.95992,51.95992,0,0,0-43.82535,23.99983Z"
      opacity="0.2"
    />
    <path
      d="M84,240a24,24,0,0,0,24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M172,240a24,24,0,0,1-24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,168h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,168H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M111.825,63.99934A51.9599,51.9599,0,0,0,68,40a51.90058,51.90058,0,0,0-3.48841,44.7036A49.25789,49.25789,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.25769,49.25769,0,0,0-8.5116-27.29639A51.90061,51.90061,0,0,0,188,40a51.95992,51.95992,0,0,0-43.82535,23.99983Z"
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
    <path d="M224,224a8.00039,8.00039,0,0,1-8,8,32.03667,32.03667,0,0,1-32-32v-8a16.01833,16.01833,0,0,0-16-16H156v40a16.01833,16.01833,0,0,0,16,16,8,8,0,0,1,0,16,32.03667,32.03667,0,0,1-32-32V176H116v40a32.03667,32.03667,0,0,1-32,32,8,8,0,0,1,0-16,16.01833,16.01833,0,0,0,16-16V176H88a16.01833,16.01833,0,0,0-16,16v8a32.03667,32.03667,0,0,1-32,32,8,8,0,0,1,0-16,16.01833,16.01833,0,0,0,16-16v-8a31.9949,31.9949,0,0,1,14.78076-26.95068A55.951,55.951,0,0,1,48,120v-8a58.0419,58.0419,0,0,1,7.69482-28.32031A59.73551,59.73551,0,0,1,61.07178,36,7.99908,7.99908,0,0,1,68,32a59.74952,59.74952,0,0,1,48.00732,23.999L139.99219,56A59.74792,59.74792,0,0,1,188,32a7.99908,7.99908,0,0,1,6.92822,4,59.73339,59.73339,0,0,1,5.37647,47.67969A58.04124,58.04124,0,0,1,208,112v8a55.951,55.951,0,0,1-22.78076,45.04932A31.9949,31.9949,0,0,1,200,192v8a16.01833,16.01833,0,0,0,16,16A8.00039,8.00039,0,0,1,224,224Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M84,240a24,24,0,0,0,24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M172,240a24,24,0,0,1-24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152,168h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M104,168H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M111.825,63.99934A51.9599,51.9599,0,0,0,68,40a51.90058,51.90058,0,0,0-3.48841,44.7036A49.25789,49.25789,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.25769,49.25769,0,0,0-8.5116-27.29639A51.90061,51.90061,0,0,0,188,40a51.95992,51.95992,0,0,0-43.82535,23.99983Z"
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
      d="M84,240a24,24,0,0,0,24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M172,240a24,24,0,0,1-24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152,168h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M104,168H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M111.825,63.99934A51.9599,51.9599,0,0,0,68,40a51.90058,51.90058,0,0,0-3.48841,44.7036A49.25789,49.25789,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.25769,49.25769,0,0,0-8.5116-27.29639A51.90061,51.90061,0,0,0,188,40a51.95992,51.95992,0,0,0-43.82535,23.99983Z"
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
      d="M84,240a24,24,0,0,0,24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M172,240a24,24,0,0,1-24-24V168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,168h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,168H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M111.825,63.99934A51.9599,51.9599,0,0,0,68,40a51.90058,51.90058,0,0,0-3.48841,44.7036A49.25789,49.25789,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.25769,49.25769,0,0,0-8.5116-27.29639A51.90061,51.90061,0,0,0,188,40a51.95992,51.95992,0,0,0-43.82535,23.99983Z"
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

const GithubLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GithubLogo.displayName = "GithubLogo";

export default GithubLogo;
