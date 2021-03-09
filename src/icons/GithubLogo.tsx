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
      d="M84,232a24,24,0,0,0,24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M172,232a24,24,0,0,1-24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,160h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M104,160H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M64.51166,76.70377A51.90056,51.90056,0,0,1,68,32a51.9599,51.9599,0,0,1,43.82469,23.9988V56h32.35061V55.9988A51.9599,51.9599,0,0,1,188,32a51.90056,51.90056,0,0,1,3.48834,44.70377l0,0A47.77872,47.77872,0,0,1,200,104v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a47.77872,47.77872,0,0,1,8.51163-27.29627Z"
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
      d="M64.51166,76.70377A51.90056,51.90056,0,0,1,68,32a51.9599,51.9599,0,0,1,43.82469,23.9988V56h32.35061V55.9988A51.9599,51.9599,0,0,1,188,32a51.90056,51.90056,0,0,1,3.48834,44.70377l0,0A47.77872,47.77872,0,0,1,200,104v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a47.77872,47.77872,0,0,1,8.51163-27.29627Z"
      opacity="0.2"
    />
    <path
      d="M84,232a24,24,0,0,0,24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M172,232a24,24,0,0,1-24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,160h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,160H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64.51166,76.70377A51.90056,51.90056,0,0,1,68,32a51.9599,51.9599,0,0,1,43.82469,23.9988V56h32.35061V55.9988A51.9599,51.9599,0,0,1,188,32a51.90056,51.90056,0,0,1,3.48834,44.70377l0,0A47.77872,47.77872,0,0,1,200,104v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a47.77872,47.77872,0,0,1,8.51163-27.29627Z"
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
    <path d="M224,216a8.00039,8.00039,0,0,1-8,8,32.03667,32.03667,0,0,1-32-32v-8a16.01833,16.01833,0,0,0-16-16H156v40a16.01833,16.01833,0,0,0,16,16,8,8,0,0,1,0,16,32.03667,32.03667,0,0,1-32-32V168H116v40a32.03667,32.03667,0,0,1-32,32,8,8,0,0,1,0-16,16.01833,16.01833,0,0,0,16-16V168H88a16.01833,16.01833,0,0,0-16,16v8a32.03667,32.03667,0,0,1-32,32,8,8,0,0,1,0-16,16.01833,16.01833,0,0,0,16-16v-8a31.9949,31.9949,0,0,1,14.78076-26.95068A55.951,55.951,0,0,1,48,112v-8a55.67143,55.67143,0,0,1,7.68945-28.33789A59.73846,59.73846,0,0,1,61.07178,28,7.99908,7.99908,0,0,1,68,24a59.74863,59.74863,0,0,1,48.00684,23.999L139.99316,48A59.7461,59.7461,0,0,1,188,24a7.99908,7.99908,0,0,1,6.92822,4,59.73846,59.73846,0,0,1,5.38233,47.66211A55.67143,55.67143,0,0,1,208,104v8a55.951,55.951,0,0,1-22.78076,45.04932A31.9949,31.9949,0,0,1,200,184v8a16.01833,16.01833,0,0,0,16,16A8.00039,8.00039,0,0,1,224,216Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M84,232a24,24,0,0,0,24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M172,232a24,24,0,0,1-24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152,160h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M104,160H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M64.51166,76.70377A51.90056,51.90056,0,0,1,68,32a51.9599,51.9599,0,0,1,43.82469,23.9988V56h32.35061V55.9988A51.9599,51.9599,0,0,1,188,32a51.90056,51.90056,0,0,1,3.48834,44.70377l0,0A47.77872,47.77872,0,0,1,200,104v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a47.77872,47.77872,0,0,1,8.51163-27.29627Z"
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
      d="M84,232a24,24,0,0,0,24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M172,232a24,24,0,0,1-24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152,160h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M104,160H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M64.51166,76.70377A51.90056,51.90056,0,0,1,68,32a51.9599,51.9599,0,0,1,43.82469,23.9988V56h32.35061V55.9988A51.9599,51.9599,0,0,1,188,32a51.90056,51.90056,0,0,1,3.48834,44.70377l0,0A47.77872,47.77872,0,0,1,200,104v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a47.77872,47.77872,0,0,1,8.51163-27.29627Z"
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
      d="M84,232a24,24,0,0,0,24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M172,232a24,24,0,0,1-24-24V160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,160h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,160H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64.51166,76.70377A51.90056,51.90056,0,0,1,68,32a51.9599,51.9599,0,0,1,43.82469,23.9988V56h32.35061V55.9988A51.9599,51.9599,0,0,1,188,32a51.90056,51.90056,0,0,1,3.48834,44.70377l0,0A47.77872,47.77872,0,0,1,200,104v8a48,48,0,0,1-48,48H104a48,48,0,0,1-48-48v-8a47.77872,47.77872,0,0,1,8.51163-27.29627Z"
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
