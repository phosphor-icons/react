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
    <polyline
      points="128 80 128 128 176 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="128"
      cy="128"
      r="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="201.53911"
      y1="20.51977"
      x2="235.48023"
      y2="54.46089"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="20.51977"
      y1="54.46089"
      x2="54.46089"
      y2="20.51977"
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
    <polyline
      points="128 72 128 128 184 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="128"
      r="88"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <line
      x1="195.88225"
      y1="26.17662"
      x2="229.82338"
      y2="60.11775"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="26.17662"
      y1="60.11775"
      x2="60.11775"
      y2="26.17662"
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
      <path d="M235.48047,54.46094,201.53906,20.51953a8,8,0,0,0-11.31347,11.314L224.1665,65.77441a8,8,0,1,0,11.314-11.31347Z" />
      <path d="M65.77441,20.51953a8,8,0,0,0-11.31347,0L20.51953,54.46094a8,8,0,0,0,11.314,11.31347L65.77441,31.8335A8.00061,8.00061,0,0,0,65.77441,20.51953Z" />
      <path d="M223.957,125.22363c-.02051-.71777-.0459-1.43408-.082-2.14892-.001-.02491-.00293-.04932-.00439-.07373A96.003,96.003,0,0,0,132.999,32.12939c-.02441-.00146-.04882-.00341-.07373-.00439-.71484-.03613-1.43115-.06152-2.14892-.082-.10742-.00293-.21436-.00879-.32227-.01172Q129.2295,32.00048,128,32q-1.22973,0-2.4541.03125c-.10791.00293-.21485.00879-.32227.01172-.71777.02051-1.43408.0459-2.14892.082-.02491.001-.04932.00293-.07373.00439A96.004,96.004,0,0,0,32.12939,123.001c-.00146.02441-.00341.04882-.00439.07373-.03613.71484-.06152,1.43115-.082,2.14892-.00293.10742-.00879.21436-.01172.32227Q32.00048,126.7705,32,128q0,1.22973.03125,2.4541c.00293.10791.00879.21485.01172.32227.02051.71777.0459,1.43408.082,2.14892.001.02491.00293.04932.00439.07373A96.003,96.003,0,0,0,123.001,223.87061c.02441.00146.04882.00341.07373.00439.71484.03613,1.43115.06152,2.14892.082.10742.00293.21436.00879.32227.01172q1.2246.03077,2.4541.03125,1.22973,0,2.4541-.03125c.10791-.00293.21485-.00879.32227-.01172.71777-.02051,1.43408-.0459,2.14892-.082.02491-.001.04932-.00293.07373-.00439A96.004,96.004,0,0,0,223.87061,132.999c.00146-.02441.00341-.04882.00439-.07373.03613-.71484.06152-1.43115.082-2.14892.00293-.10742.00879-.21436.01172-.32227Q223.99952,129.2295,224,128q0-1.22973-.03125-2.4541C223.96582,125.438,223.96,125.33105,223.957,125.22363ZM184,136H128a8.00008,8.00008,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="128 72 128 128 184 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
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
    <line
      x1="195.88225"
      y1="26.17662"
      x2="229.82338"
      y2="60.11775"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="26.17662"
      y1="60.11775"
      x2="60.11775"
      y2="26.17662"
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
      points="128 72 128 128 184 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
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
    <line
      x1="195.88225"
      y1="26.17662"
      x2="229.82338"
      y2="60.11775"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="26.17662"
      y1="60.11775"
      x2="60.11775"
      y2="26.17662"
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
      points="128 72 128 128 184 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="128"
      r="88"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <line
      x1="195.88225"
      y1="26.17662"
      x2="229.82338"
      y2="60.11775"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="26.17662"
      y1="60.11775"
      x2="60.11775"
      y2="26.17662"
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

const Alarm = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Alarm.displayName = "Alarm";

export default Alarm;
