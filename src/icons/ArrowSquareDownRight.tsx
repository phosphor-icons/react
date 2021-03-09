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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(256 0) rotate(90)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="108 156 156 156 156 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="100"
      y1="100"
      x2="156"
      y2="156"
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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(256 0) rotate(90)"
      opacity="0.2"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(256 0) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="108 156 156 156 156 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="100"
      y1="100"
      x2="156"
      y2="156"
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
    <path d="M48,224H208a16.01833,16.01833,0,0,0,16-16V48a16.01833,16.01833,0,0,0-16-16H48A16.01833,16.01833,0,0,0,32,48V208A16.01833,16.01833,0,0,0,48,224ZM94.34326,94.34277a8.00063,8.00063,0,0,1,11.31348,0L148,136.686V108a8,8,0,0,1,16,0v47.99756c0,.26465-.01392.5293-.03992.793-.01111.11377-.03271.22412-.04858.33642-.02063.146-.038.29248-.06677.4375-.02588.13086-.06214.2583-.09449.38721-.03112.124-.05835.24854-.09545.37158-.0387.12744-.08655.25-.13123.375-.04358.12158-.08362.24414-.13318.36377-.04809.11572-.10474.22705-.158.34033-.0581.12354-.11316.248-.178.36914-.05774.10791-.12353.21-.186.315-.07105.11914-.13867.24023-.21655.35644-.07593.11328-.16065.22022-.242.3291-.0747.1001-.14429.20264-.22436.3003-.1521.185-.31372.36181-.48169.53271-.0166.01709-.0304.03564-.04712.05225-.01929.01953-.04077.03515-.0603.05468-.16846.165-.34253.32422-.525.47413-.09424.07763-.19372.145-.29053.21728-.1123.084-.22229.1709-.339.249-.11242.0752-.229.14063-.34423.20948-.10913.06494-.21582.1333-.32813.19384-.115.06153-.23328.11329-.35058.169-.11963.05664-.23755.11621-.36036.167-.11071.0459-.22387.08252-.33618.123-.13415.04883-.267.09961-.40429.1416-.1084.03223-.21851.05615-.32789.084-.14331.03663-.28515.07666-.43151.10547-.12085.02393-.2428.03711-.36451.05567-.13659.02051-.27136.04541-.41.05908-.2019.01953-.40442.02588-.60693.03076-.05957.001-.11744.00879-.17725.00879H108a8,8,0,0,1,0-16h28.686L94.34326,105.65723A8.00034,8.00034,0,0,1,94.34326,94.34277Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(256 0) rotate(90)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="108 156 156 156 156 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="100"
      y1="100"
      x2="156"
      y2="156"
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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(256 0) rotate(90)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="108 156 156 156 156 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="100"
      y1="100"
      x2="156"
      y2="156"
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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      transform="translate(256 0) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="108 156 156 156 156 108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="100"
      y1="100"
      x2="156"
      y2="156"
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

const ArrowSquareDownRight = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

ArrowSquareDownRight.displayName = "ArrowSquareDownRight";

export default ArrowSquareDownRight;
