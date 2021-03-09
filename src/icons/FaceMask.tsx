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
      d="M208,136c0,50.95006-66.22217,68.789-78.16566,71.59207a8.00537,8.00537,0,0,1-3.66868,0C114.22217,204.789,48,186.95006,48,136V77.41626a8,8,0,0,1,5.02887-7.42781l72-28.8a8,8,0,0,1,5.94226,0l72,28.8A8,8,0,0,1,208,77.41626Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="108"
      x2="168"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="88"
      y1="144"
      x2="168"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M205.40982,152H220a24,24,0,0,0,24-24V104a24,24,0,0,0-24-24H208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M50.59121,152H36a24,24,0,0,1-24-24V104A24,24,0,0,1,36,80H48"
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
    <g opacity="0.2">
      <path d="M216,136c0,51.50493-74.43964,69.17367-86.39,71.67832a7.80809,7.80809,0,0,1-3.21992,0C114.43964,205.17367,40,187.50493,40,136V77.60342a8,8,0,0,1,5.26606-7.51835l80-29.09091a8,8,0,0,1,5.46788,0l80,29.09091A8,8,0,0,1,216,77.60342Z" />
    </g>
    <path
      d="M216,136c0,51.50493-74.43964,69.17367-86.39,71.67832a7.80809,7.80809,0,0,1-3.21992,0C114.43964,205.17367,40,187.50493,40,136V77.60342a8,8,0,0,1,5.26606-7.51835l80-29.09091a8,8,0,0,1,5.46788,0l80,29.09091A8,8,0,0,1,216,77.60342Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="112"
      x2="168"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="144"
      x2="168"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M213.40982,152H224a24,24,0,0,0,24-24V104a24,24,0,0,0-24-24h-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M42.59121,152H32A24,24,0,0,1,8,128V104A24,24,0,0,1,32,80h8"
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
    <path d="M224,72h-1.03125a16.03948,16.03948,0,0,0-9.501-9.43311l-80-29.0913a16.02485,16.02485,0,0,0-10.93554,0l-80,29.09082A16.04022,16.04022,0,0,0,33.03125,72H32A32.03635,32.03635,0,0,0,0,104v24a32.03635,32.03635,0,0,0,32,32h5.19678c6.561,14.38086,19.25537,26.99854,37.63183,37.20752,21.02246,11.67871,43.52491,16.96045,49.91944,18.30029a15.72388,15.72388,0,0,0,6.50293,0c6.3955-1.33984,28.898-6.62158,49.92041-18.30029,18.37646-10.209,31.0708-22.82666,37.63183-37.20752H224a32.03635,32.03635,0,0,0,32-32V104A32.03635,32.03635,0,0,0,224,72ZM32,144a16.01833,16.01833,0,0,1-16-16V104A16.01833,16.01833,0,0,1,32,88v48a58.66962,58.66962,0,0,0,.55273,8Zm136,8H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm72,8a16.01833,16.01833,0,0,1-16,16h-.55273A58.66962,58.66962,0,0,0,224,136V88a16.01833,16.01833,0,0,1,16,16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M216,136c0,51.50493-74.43964,69.17367-86.39,71.67832a7.80809,7.80809,0,0,1-3.21992,0C114.43964,205.17367,40,187.50493,40,136V77.60342a8,8,0,0,1,5.26606-7.51835l80-29.09091a8,8,0,0,1,5.46788,0l80,29.09091A8,8,0,0,1,216,77.60342Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="112"
      x2="168"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="88"
      y1="144"
      x2="168"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M213.40982,152H224a24,24,0,0,0,24-24V104a24,24,0,0,0-24-24h-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M42.59121,152H32A24,24,0,0,1,8,128V104A24,24,0,0,1,32,80h8"
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
      d="M216,136c0,51.50493-74.43964,69.17367-86.39,71.67832a7.80809,7.80809,0,0,1-3.21992,0C114.43964,205.17367,40,187.50493,40,136V77.60342a8,8,0,0,1,5.26606-7.51835l80-29.09091a8,8,0,0,1,5.46788,0l80,29.09091A8,8,0,0,1,216,77.60342Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="112"
      x2="168"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="88"
      y1="144"
      x2="168"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M213.40982,152H224a24,24,0,0,0,24-24V104a24,24,0,0,0-24-24h-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M42.59121,152H32A24,24,0,0,1,8,128V104A24,24,0,0,1,32,80h8"
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
      d="M216,136c0,51.50493-74.43964,69.17367-86.39,71.67832a7.80809,7.80809,0,0,1-3.21992,0C114.43964,205.17367,40,187.50493,40,136V77.60342a8,8,0,0,1,5.26606-7.51835l80-29.09091a8,8,0,0,1,5.46788,0l80,29.09091A8,8,0,0,1,216,77.60342Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="112"
      x2="168"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="144"
      x2="168"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M213.40982,152H224a24,24,0,0,0,24-24V104a24,24,0,0,0-24-24h-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M42.59121,152H32A24,24,0,0,1,8,128V104A24,24,0,0,1,32,80h8"
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

const FaceMask = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FaceMask.displayName = "FaceMask";

export default FaceMask;
