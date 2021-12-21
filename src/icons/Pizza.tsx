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
      d="M23.4,75.7a7.9,7.9,0,0,1,2.2-10.8,175.8,175.8,0,0,1,204.8,0,7.9,7.9,0,0,1,2.2,10.8L134.7,229.4a7.9,7.9,0,0,1-13.4,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M41.1,103.4a135.9,135.9,0,0,1,173.8,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M159.4,190.7a28,28,0,1,1,29.1-45.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M59.7,132.7A28,28,0,0,1,108,152a28.1,28.1,0,0,1-19.1,26.6"
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
      d="M144,156a28,28,0,0,1,49.1-18.4l26.2-41a144.1,144.1,0,0,0-182.6,0l21.2,33.3A28,28,0,1,1,84,168H82.1l39.2,61.5a7.9,7.9,0,0,0,13.4,0l29.6-46.5A28,28,0,0,1,144,156Z"
      opacity="0.2"
    />
    <path
      d="M23.4,75.7a7.9,7.9,0,0,1,2.2-10.8,175.8,175.8,0,0,1,204.8,0,7.9,7.9,0,0,1,2.2,10.8L134.7,229.4a7.9,7.9,0,0,1-13.4,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M36.7,96.6a144.1,144.1,0,0,1,182.6,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M164.3,182.9a28,28,0,1,1,28.8-45.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.9,129.8A28,28,0,1,1,84,168H82.2"
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
    <path d="M239.3,80a16,16,0,0,0-4.2-21.6,183.9,183.9,0,0,0-214.2,0A16,16,0,0,0,16.7,80h0l97.8,153.7a16,16,0,0,0,27,0l58.4-91.8h.1ZM23.4,75.7ZM128,225.1l-32.5-51A36,36,0,0,0,84,104a35.6,35.6,0,0,0-26,11.1L47.4,98.5a135.8,135.8,0,0,1,161.2,0l-17.3,27.1a36,36,0,0,0-38.6,60.8Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M23.4,75.7a7.9,7.9,0,0,1,2.2-10.8,175.8,175.8,0,0,1,204.8,0,7.9,7.9,0,0,1,2.2,10.8L134.7,229.4a7.9,7.9,0,0,1-13.4,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M36.7,96.6a144.1,144.1,0,0,1,182.6,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M164.3,182.9a28,28,0,1,1,28.8-45.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M57.9,129.8A28,28,0,1,1,84,168H82.2"
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
      d="M23.4,75.7a7.9,7.9,0,0,1,2.2-10.8,175.8,175.8,0,0,1,204.8,0,7.9,7.9,0,0,1,2.2,10.8L134.7,229.4a7.9,7.9,0,0,1-13.4,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M36.7,96.6a144.1,144.1,0,0,1,182.6,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M164.3,182.9a28,28,0,1,1,28.8-45.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M57.9,129.8A28,28,0,1,1,84,168H82.2"
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
      d="M23.4,75.7a7.9,7.9,0,0,1,2.2-10.8,175.8,175.8,0,0,1,204.8,0,7.9,7.9,0,0,1,2.2,10.8L134.7,229.4a7.9,7.9,0,0,1-13.4,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M36.7,96.6a144.1,144.1,0,0,1,182.6,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M164.3,182.9a28,28,0,1,1,28.8-45.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.9,129.8A28,28,0,1,1,84,168H82.2"
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

const Pizza = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Pizza.displayName = "Pizza";

export default Pizza;
