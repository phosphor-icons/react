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
      d="M218.51254,162.9332C205.936,193.65156,183.10562,216,164,216H92c-28,0-64-48-64-100A60.00062,60.00062,0,0,1,128.00185,71.27954l-.00164-.00185a60.0047,60.0047,0,0,1,87.16862,7.63587l-.00019.00015a48.01693,48.01693,0,0,0,3.33915,84.01754Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M218.51254,162.9332C205.936,193.65156,183.10562,216,164,216H92c-28,0-64-48-64-100A60.00062,60.00062,0,0,1,128.00185,71.27954l-.00164-.00185a60.0047,60.0047,0,0,1,87.16862,7.63587l-.00019.00015a48.01693,48.01693,0,0,0,3.33915,84.01754Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M143.53892,23.36749A31.931,31.931,0,0,1,168,12"
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
      d="M218.51254,162.9332C205.936,193.65156,183.10562,216,164,216H92c-28,0-64-48-64-100A60.00062,60.00062,0,0,1,128.00185,71.27954l-.00164-.00185a60.0047,60.0047,0,0,1,87.16862,7.63587l-.00019.00015a48.01693,48.01693,0,0,0,3.33915,84.01754Z"
      opacity="0.2"
    />
    <path
      d="M138.12628,32.506A32.01179,32.01179,0,0,1,168,12"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M218.51254,162.9332C205.936,193.65156,183.10562,216,164,216H92c-28,0-64-48-64-100A60.00062,60.00062,0,0,1,128.00185,71.27954l-.00164-.00185a60.0047,60.0047,0,0,1,87.16862,7.63587l-.00019.00015a48.01693,48.01693,0,0,0,3.33915,84.01754Z"
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
    <path d="M130.66016,29.63136A40.25041,40.25041,0,0,1,168,4a8,8,0,0,1,0,16,24.15408,24.15408,0,0,0-22.4082,15.38037,8.00008,8.00008,0,0,1-14.93164-5.749Zm91.38476,126.12451a40.01719,40.01719,0,0,1-2.73144-69.99951,8.00039,8.00039,0,0,0,2.14111-11.7915A68.012,68.012,0,0,0,128,61.00441,68.00487,68.00487,0,0,0,20,116c0,25.50293,8.33594,52.4668,22.87109,73.97852C57.26514,211.28224,75.63086,224,92,224h72c22.46533,0,47.92578-23.86523,61.916-58.03515A8.00438,8.00438,0,0,0,222.04492,155.75587Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M138.12628,32.506A32.01179,32.01179,0,0,1,168,12"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M218.51254,162.9332C205.936,193.65156,183.10562,216,164,216H92c-28,0-64-48-64-100A60.00062,60.00062,0,0,1,128.00185,71.27954l-.00164-.00185a60.0047,60.0047,0,0,1,87.16862,7.63587l-.00019.00015a48.01693,48.01693,0,0,0,3.33915,84.01754Z"
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
      d="M138.12628,32.506A32.01179,32.01179,0,0,1,168,12"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M218.51254,162.9332C205.936,193.65156,183.10562,216,164,216H92c-28,0-64-48-64-100A60.00062,60.00062,0,0,1,128.00185,71.27954l-.00164-.00185a60.0047,60.0047,0,0,1,87.16862,7.63587l-.00019.00015a48.01693,48.01693,0,0,0,3.33915,84.01754Z"
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
      d="M138.12628,32.506A32.01179,32.01179,0,0,1,168,12"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M218.51254,162.9332C205.936,193.65156,183.10562,216,164,216H92c-28,0-64-48-64-100A60.00062,60.00062,0,0,1,128.00185,71.27954l-.00164-.00185a60.0047,60.0047,0,0,1,87.16862,7.63587l-.00019.00015a48.01693,48.01693,0,0,0,3.33915,84.01754Z"
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

const AppleLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

AppleLogo.displayName = "AppleLogo";

export default AppleLogo;
