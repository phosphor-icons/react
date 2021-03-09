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
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="37.46679"
      y1="96"
      x2="218.53174"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="37.47057"
      y1="160"
      x2="218.53448"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="40"
      ry="93.42294"
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
    <circle cx="128" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <line
      x1="37.46679"
      y1="96"
      x2="218.53174"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="37.47057"
      y1="160"
      x2="218.53448"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="40"
      ry="93.42294"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M225.86035,163.20862a7.94949,7.94949,0,0,0,.373-1.05676,104.00629,104.00629,0,0,0-.01026-68.33094,7.96,7.96,0,0,0-.35546-1.00793A104.17669,104.17669,0,0,0,128.042,24.00086L128,23.96423l-.042.03663A104.17672,104.17672,0,0,0,30.13623,92.80164a7.94362,7.94362,0,0,0-.36475,1.03454,104.00383,104.00383,0,0,0,.01319,68.36658,7.975,7.975,0,0,0,.34179.968,104.17624,104.17624,0,0,0,97.83057,68.8291l.043.0376.043-.0376A104.1768,104.1768,0,0,0,225.86035,163.20862ZM128,45.559a110.409,110.409,0,0,1,25.52246,42.44141H102.47754A110.409,110.409,0,0,1,128,45.559ZM102.478,168.00037H153.522A110.41425,110.41425,0,0,1,128,210.44177,110.41425,110.41425,0,0,1,102.478,168.00037Zm-4.18848-16a126.93369,126.93369,0,0,1,0-48h59.4209a126.93369,126.93369,0,0,1,0,48Zm75.73877-48h38.645a88.23665,88.23665,0,0,1,0,48h-38.645a147.05417,147.05417,0,0,0,0-48Zm32.34375-16H170.40771A127.43992,127.43992,0,0,0,146.2749,41.91406,88.31787,88.31787,0,0,1,206.37207,88.00037ZM146.27441,214.08679a127.44456,127.44456,0,0,0,24.13282-46.08642h35.96484A88.31753,88.31753,0,0,1,146.27441,214.08679Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="37.46679"
      y1="96"
      x2="218.53174"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="37.47057"
      y1="160"
      x2="218.53448"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="40"
      ry="93.42294"
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
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="37.46679"
      y1="96"
      x2="218.53174"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="37.47057"
      y1="160"
      x2="218.53448"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="40"
      ry="93.42294"
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
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <line
      x1="37.46679"
      y1="96"
      x2="218.53174"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="37.47057"
      y1="160"
      x2="218.53448"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="40"
      ry="93.42294"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Globe = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Globe.displayName = "Globe";

export default Globe;
