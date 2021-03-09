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
    <circle
      cx="128"
      cy="128"
      r="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M179.45516,61.6015c30.106-8.94046,52.92047-8.81761,59.39609,2.3985C249.897,83.1317,209.22146,127.29479,148,162.641S28.19444,211.1317,17.14875,192c-6.47514-11.21527,4.82354-31.03251,27.61578-52.63295"
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
    <circle cx="128" cy="128" r="88" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184.17224,60.25854c27.75785-7.55343,48.54608-6.88109,54.679,3.74146C249.897,83.1317,209.22146,127.29479,148,162.641S28.19444,211.1317,17.14875,192c-6.13187-10.6207,3.67551-28.95548,24.08867-49.21359"
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
    <path d="M223.251,115.99854A96.03076,96.03076,0,0,1,128,224a95.50329,95.50329,0,0,1-57.96045-19.52515C94.58984,198.321,123.48145,186.03418,152,169.56934,180.542,153.09009,205.645,134.196,223.251,115.99854ZM245.7793,60c-5.46875-9.47119-20.31592-18.42773-59.82373-8.47852A95.94717,95.94717,0,0,0,32,128a96.48271,96.48271,0,0,0,.748,11.99414C4.41748,169.2085,4.75488,186.5332,10.2207,196c3.69336,6.39746,11.875,12.78809,29.81348,12.78809a117.6895,117.6895,0,0,0,25.47559-3.23243c1.49121-.33447,3.0039-.69824,4.52978-1.08081a96.84991,96.84991,0,0,1-14.24219-13.27978c-18.65527,3.31811-29.31591.96924-31.72021-3.19507-1.501-2.59961-.6582-7.48535,2.31152-13.4043a83.04134,83.04134,0,0,1,10.74121-15.61841,96.04543,96.04543,0,0,0,18.66748,32.21778q2.97071-.52845,6.20948-1.25171c23.94628-5.37207,53.06543-17.5293,81.99316-34.23047s54.01514-35.84082,70.6416-53.89258q2.27271-2.46827,4.228-4.79883a96.04556,96.04556,0,0,0-18.668-32.21752A83.29551,83.29551,0,0,1,219.1543,63.2998c6.61328.38672,11.26758,2.09961,12.76855,4.7002,2.40186,4.15967-.88428,14.54932-13.05322,29.02148a95.19186,95.19186,0,0,1,4.38135,18.97706c1.07959-1.11548,2.1372-2.229,3.15918-3.33838C251.69678,85.20508,250.90039,68.86914,245.7793,60Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M184.17224,60.25854c27.75785-7.55343,48.54608-6.88109,54.679,3.74146C249.897,83.1317,209.22146,127.29479,148,162.641S28.19444,211.1317,17.14875,192c-6.13187-10.6207,3.67551-28.95548,24.08867-49.21359"
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
      cx="128"
      cy="128"
      r="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M184.17224,60.25854c27.75785-7.55343,48.54608-6.88109,54.679,3.74146C249.897,83.1317,209.22146,127.29479,148,162.641S28.19444,211.1317,17.14875,192c-6.13187-10.6207,3.67551-28.95548,24.08867-49.21359"
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
      cx="128"
      cy="128"
      r="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184.17224,60.25854c27.75785-7.55343,48.54608-6.88109,54.679,3.74146C249.897,83.1317,209.22146,127.29479,148,162.641S28.19444,211.1317,17.14875,192c-6.13187-10.6207,3.67551-28.95548,24.08867-49.21359"
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

const Planet = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Planet.displayName = "Planet";

export default Planet;
