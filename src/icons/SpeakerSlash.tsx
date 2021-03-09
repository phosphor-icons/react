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
    <line
      x1="79.99414"
      y1="88.01159"
      x2="79.99414"
      y2="168.01159"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,154.4v69.61162l-72-56H32a8,8,0,0,1-8-8v-64a8,8,0,0,1,8-8H80L86.82274,82.705"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="118.49 58.075 152 32.012 152 94.935"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M190.60379,105.38417a32.01923,32.01923,0,0,1,5.51036,37.88051"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M218.88817,77.0999a72.00424,72.00424,0,0,1,4.72754,96.61262"
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
    <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z" opacity="0.2" />
    <path
      d="M218.88817,77.0999a72,72,0,0,1,0,101.82337"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="79.99414"
      y1="88.01159"
      x2="79.99414"
      y2="168.01159"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.60379,105.38417a32,32,0,0,1,0,45.25483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,154.4v69.61162l-72-56H32a8,8,0,0,1-8-8v-64a8,8,0,0,1,8-8H80L86.82274,82.705"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="112.156 63.001 152 32.012 152 106.829"
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
    <g>
      <path d="M53.91992,34.61813A8.0006,8.0006,0,1,0,42.08008,45.3818L73.55371,80.0029H32a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16H77.25488l69.834,54.31445-.00537-.01123.00439.00342a7.99451,7.99451,0,0,0,12.90625-6.3125V175.08737l42.08594,46.29443a8.0006,8.0006,0,1,0,11.83984-10.76367ZM71.9707,160.0029H32v-64H71.9707Z" />
      <path d="M146.08008,112.2109A8.0004,8.0004,0,0,0,160,106.82907V32.01169a7.99958,7.99958,0,0,0-12.91113-6.31446L107.24512,56.68649a7.99966,7.99966,0,0,0-1.00879,11.69629Z" />
      <path d="M224.544,71.44235a7.99983,7.99983,0,1,0-11.3125,11.31445,63.99908,63.99908,0,0,1,0,90.50879A7.99983,7.99983,0,1,0,224.544,184.58a79.99795,79.99795,0,0,0,0-113.13769Z" />
      <path d="M191.97656,128.01169a23.83779,23.83779,0,0,1-7.02929,16.96972,7.99984,7.99984,0,1,0,11.3125,11.31446,39.99957,39.99957,0,0,0,.001-56.56934A8.00052,8.00052,0,0,0,184.94629,111.041,23.84269,23.84269,0,0,1,191.97656,128.01169Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M218.88817,77.0999a72,72,0,0,1,0,101.82337"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="79.99414"
      y1="88.01159"
      x2="79.99414"
      y2="168.01159"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M190.60379,105.38417a32,32,0,0,1,0,45.25483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152,154.4v69.61162l-72-56H32a8,8,0,0,1-8-8v-64a8,8,0,0,1,8-8H80L86.82274,82.705"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="112.156 63.001 152 32.012 152 106.829"
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
      d="M218.88817,77.0999a72,72,0,0,1,0,101.82337"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="79.99414"
      y1="88.01159"
      x2="79.99414"
      y2="168.01159"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M190.60379,105.38417a32,32,0,0,1,0,45.25483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152,154.4v69.61162l-72-56H32a8,8,0,0,1-8-8v-64a8,8,0,0,1,8-8H80L86.82274,82.705"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="112.156 63.001 152 32.012 152 106.829"
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
      d="M218.88817,77.0999a72,72,0,0,1,0,101.82337"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="79.99414"
      y1="88.01159"
      x2="79.99414"
      y2="168.01159"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.60379,105.38417a32,32,0,0,1,0,45.25483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,154.4v69.61162l-72-56H32a8,8,0,0,1-8-8v-64a8,8,0,0,1,8-8H80L86.82274,82.705"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="112.156 63.001 152 32.012 152 106.829"
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

const SpeakerSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

SpeakerSlash.displayName = "SpeakerSlash";

export default SpeakerSlash;
