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
      d="M183.23572,155.85352a43.541,43.541,0,0,1-20.667-25.90381l-.00092.001a35.9985,35.9985,0,0,0-69.13562,0l-.00092-.001a43.541,43.541,0,0,1-20.667,25.90381,32.00736,32.00736,0,0,0,27.72266,57.61767,72.51938,72.51938,0,0,1,55.02612,0,32.00679,32.00679,0,0,0,27.72266-57.61767Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="208" cy="104" r="24" />
    <circle cx="48" cy="104" r="24" />
    <circle cx="96" cy="56" r="24" />
    <circle cx="160" cy="56" r="24" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <circle cx="212" cy="108" r="20" opacity="0.2" />
    <circle cx="44" cy="108" r="20" opacity="0.2" />
    <circle cx="92" cy="60" r="20" opacity="0.2" />
    <circle cx="164" cy="60" r="20" opacity="0.2" />
    <path
      d="M183.23572,155.85352a43.541,43.541,0,0,1-20.667-25.90381l-.00092.001a35.9985,35.9985,0,0,0-69.13562,0l-.00092-.001a43.541,43.541,0,0,1-20.667,25.90381,32.00736,32.00736,0,0,0,27.72266,57.61767,72.51938,72.51938,0,0,1,55.02612,0,32.00679,32.00679,0,0,0,27.72266-57.61767Z"
      opacity="0.2"
    />
    <circle
      cx="212"
      cy="108"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="44"
      cy="108"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="92"
      cy="60"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="164"
      cy="60"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.23572,155.85352a43.541,43.541,0,0,1-20.667-25.90381l-.00092.001a35.9985,35.9985,0,0,0-69.13562,0l-.00092-.001a43.541,43.541,0,0,1-20.667,25.90381,32.00736,32.00736,0,0,0,27.72266,57.61767,72.51938,72.51938,0,0,1,55.02612,0,32.00679,32.00679,0,0,0,27.72266-57.61767Z"
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
    <path d="M240,108a28,28,0,1,1-28-28A28.03146,28.03146,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28.03146,28.03146,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28.03146,28.03146,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28.03146,28.03146,0,0,0,164,88Zm23.0918,60.84473a35.3317,35.3317,0,0,1-16.8418-21.124,43.99839,43.99839,0,0,0-84.5-.00439,35.2806,35.2806,0,0,1-16.7998,21.105,40.00718,40.00718,0,0,0,34.57226,72.05176,64.08634,64.08634,0,0,1,48.86524-.03711,40.0067,40.0067,0,0,0,34.7041-71.99121Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="212"
      cy="108"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="44"
      cy="108"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="92"
      cy="60"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="164"
      cy="60"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M183.23572,155.85352a43.541,43.541,0,0,1-20.667-25.90381l-.00092.001a35.9985,35.9985,0,0,0-69.13562,0l-.00092-.001a43.541,43.541,0,0,1-20.667,25.90381,32.00736,32.00736,0,0,0,27.72266,57.61767,72.51938,72.51938,0,0,1,55.02612,0,32.00679,32.00679,0,0,0,27.72266-57.61767Z"
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
    <circle
      cx="212"
      cy="108"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="44"
      cy="108"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="92"
      cy="60"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="164"
      cy="60"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M183.23572,155.85352a43.541,43.541,0,0,1-20.667-25.90381l-.00092.001a35.9985,35.9985,0,0,0-69.13562,0l-.00092-.001a43.541,43.541,0,0,1-20.667,25.90381,32.00736,32.00736,0,0,0,27.72266,57.61767,72.51938,72.51938,0,0,1,55.02612,0,32.00679,32.00679,0,0,0,27.72266-57.61767Z"
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
    <circle
      cx="212"
      cy="108"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="44"
      cy="108"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="92"
      cy="60"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="164"
      cy="60"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.23572,155.85352a43.541,43.541,0,0,1-20.667-25.90381l-.00092.001a35.9985,35.9985,0,0,0-69.13562,0l-.00092-.001a43.541,43.541,0,0,1-20.667,25.90381,32.00736,32.00736,0,0,0,27.72266,57.61767,72.51938,72.51938,0,0,1,55.02612,0,32.00679,32.00679,0,0,0,27.72266-57.61767Z"
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

const PawPrint = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PawPrint.displayName = "PawPrint";

export default PawPrint;
