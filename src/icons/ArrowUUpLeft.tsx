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
    <polyline
      points="80 136 32 88 80 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
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
    <polyline
      points="80 136 32 88 80 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
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
    <path d="M168,80H51.31348L85.65723,45.65674A8.00018,8.00018,0,0,0,74.34277,34.34326l-48,48c-.03051.03028-.05615.064-.08593.09522-.15284.15771-.30225.31836-.44165.48828-.0857.10449-.16065.21386-.24024.32129-.07544.102-.15454.20117-.22534.30664-.08276.12353-.155.252-.23023.3789-.05761.09717-.11889.1919-.17236.29151-.06811.12744-.12646.25879-.18725.38916-.05.10644-.10352.21142-.14893.3208-.05225.126-.09448.25439-.13989.38232-.04248.11866-.08814.23584-.125.35694-.03882.12841-.06763.25879-.09986.38916-.03076.123-.06567.24511-.09057.3706-.03.15137-.04859.3042-.06983.457-.01465.106-.03515.20948-.04565.3169a8.02276,8.02276,0,0,0,0,1.584c.0105.10742.031.21094.04565.3169.02124.15283.0398.30566.06983.457.0249.12549.05981.24756.09057.3706.03223.13037.061.26075.09986.38916.03686.1211.08252.23828.125.35694.04541.12793.08764.25634.13989.38232.04541.10938.09888.21436.14893.3208.06079.13037.11914.26172.18725.38916.05347.09961.11475.19434.17236.29151.0752.12695.14747.25537.23023.3789.0708.10547.1499.20459.22534.30664.07959.10742.15454.2168.24024.32129.137.16651.28393.32471.43359.47949.03271.03418.06055.07081.094.104l48,48a8.00018,8.00018,0,1,0,11.31446-11.31348L51.31348,96H168a48,48,0,0,1,0,96H80a8,8,0,0,0,0,16h88a64,64,0,0,0,0-128Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="80 136 32 88 80 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
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
    <polyline
      points="80 136 32 88 80 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
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
    <polyline
      points="80 136 32 88 80 40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"
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

const ArrowUUpLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowUUpLeft.displayName = "ArrowUUpLeft";

export default ArrowUUpLeft;
